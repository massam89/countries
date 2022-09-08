import { useLocation, Link, useParams } from 'react-router-dom'

function CountryPage (props) {
  const location = useLocation()
  const { countries } = location.state
  const {alpha3Code} = useParams()

  const country = countries.find(item => item.alpha3Code === alpha3Code)

  let countryBorders;
  if(country.borders) {
    countryBorders = country.borders.map(border => countries.find(country => border === country.alpha3Code))
  }

  return (
    <div className={`country-page${props.darkMode ? ' dark-mode' : ''}`}>
      <div className='back-link'>
        <Link to='/'>back</Link>
      </div>
      <div className='image'>
        <img src={country.flags.svg} alt={`${country.name} flag`} width='100'/>
      </div>
      <div className='description'>
        <h2>{country.name}</h2>
        <div className='details'>
          <div className='left'>
            <h3>Native name: {country.nativeName}</h3>
            <h3>Population:{parseInt(country.population).toLocaleString()}</h3> 
            <h3>Region: {country.region}</h3> 
            <h3>Sub region: {country.subregion}</h3> 
            <h3>Capital: {country.capital}</h3> 
          </div>
          <div className='right'>
            <h3>Top level domain: {country.topLevelDomain}</h3>
            <h3>Currencies: {country.currencies && country.currencies[0].name}</h3> 
            <h3>Languages: {country.languages[0].name} </h3> 
          </div>
        </div>
        <div className='neighbors'>
          <span>Border Countries</span>
          <ul>
            {countryBorders && countryBorders.map((item, index) => (
             <li key={index}><Link to={`/${item.alpha3Code}`} state={{ countries:countries }}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  
  )
}

export default CountryPage;