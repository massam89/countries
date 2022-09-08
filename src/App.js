import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import CountryPage from "./pages/CountryPage";
import './css/App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const darkModeHandler = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Header darkMode={darkMode} onChangeDarkMode={darkModeHandler}/>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>} />
        <Route path=":alpha3Code" element={<CountryPage darkMode={darkMode} />} />
      </Routes>
      
    </>
  )
}

export default App