import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import CountryPage from "./pages/CountryPage";
import './css/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui/uiSlice';
import { countryActions } from "./store/country/countrySlice";

const App = () => {
  const darkMode = useSelector(state => state.ui.darkMode)

  const dispatch = useDispatch()

  const darkModeHandler = () => {
    dispatch(uiActions.changeDarkModeStatus())
  }

  //Get data from an API
  useEffect(() => {
    const url = 'https://restcountries.com/v2/all'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch(countryActions.addCountries(data))
    })
    .catch(err => console.log(err))
  }, [dispatch])

  return (
    <>
      <Header darkMode={darkMode} onChangeDarkMode={darkModeHandler}/>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} exact/>} />
        <Route exact path=":alpha3Code" element={<CountryPage darkMode={darkMode} />} />
      </Routes>
    </>
  )
}

export default App