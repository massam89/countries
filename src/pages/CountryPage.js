import { useLocation, Link } from 'react-router-dom'
import {findPropFromObj} from '../lib/helper.js'
function CountryPage () {
  const location = useLocation()
  const { country } = location.state

  return (
    <div className='country-page'>
      <div className='back-link'>
        <Link to='/'>back</Link>
      </div>
      <div className='image'>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} width='100'/>
      </div>
      <div className='description'>
        <h2>{country.name.common}</h2>
        <div className='details'>
          <div className='left'>
            <h3>Native name: {findPropFromObj(country.name.nativeName, 'official')}</h3>
            <h3>Population:{parseInt(country.population).toLocaleString()}</h3> 
            <h3>Region: {country.region}</h3> 
            <h3>Sub region: {country.subregion}</h3> 
            <h3>Capital: {country.capital}</h3> 
          </div>
          <div className='right'>
            <h3>Top level domain: {country.tld[0]}</h3>
            <h3>Currencies: {Object.keys(country.currencies)}</h3> 
            <h3>Languages: {Object.keys(country.languages).map(k => `${country.languages[k]}, `)} </h3> 
          </div>
        </div>
        <div className='neighbors'>
          <span>Border Countries</span>
          <ul>
            {country.borders.map((item, index) => (
             <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  
  )
}

export default CountryPage;