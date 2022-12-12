import { Link } from "react-router-dom";

const Country = ({ country }) => {

  const getScrollHandler = () => {
    console.log(window.event);
    localStorage.setItem('scroll', window.event.layerY)
  }

  return (
    <Link onClick={getScrollHandler} className="country" to={`/${country.alpha3Code}`} >
      <li>
        <img src={country.flags.svg} alt={`${country.name} flag`}/>
        <h2> {country.name}</h2>
        <h3><span className='boldHeading'>Population: </span> {parseInt(country.population).toLocaleString()}</h3>
        <h3><span className='boldHeading'>Region: </span> {country.region}</h3>
        <h3><span className='boldHeading'>Capital: </span> {country.capital}</h3>
      </li>
    </Link>
  )
}

export default Country;