import { Link } from "react-router-dom";

const Country = ({ country }) => {

  return (
    <Link to={`/${country.name.common.toLowerCase()}`} state={{  country : country  }}>
      <li>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width='50' />
      <h2> {country.name.common}</h2>
      <h3>Population: {parseInt(country.population).toLocaleString()}</h3>
      <h3>Region:{country.region}</h3>
      <h3>Capital: {country.capital}</h3>
    </li>
    </Link>
    
  )
}

export default Country;