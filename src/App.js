import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import CountryPage from "./pages/CountryPage";
import './css/App.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<CountryPage />} />
      </Routes>
      
    </>
  )
}

export default App