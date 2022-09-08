import { Link } from "react-router-dom";

const Country = ({ country, countries }) => {

  return (
    <Link to={`/${country.alpha3Code}`} state={{  country, countries  }}>
      <li>
      <img src={country.flags.svg} alt={`${country.name} flag`} width='50' />
      <h2> {country.name}</h2>
      <h3>Population: {parseInt(country.population).toLocaleString()}</h3>
      <h3>Region:{country.region}</h3>
      <h3>Capital: {country.capital}</h3>
    </li>
    </Link>
    
  )
}

export default Country;