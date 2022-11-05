import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CountryPage (props) {
 
  const countries = useSelector(state => state.country.countries)
  const {alpha3Code} = useParams()

  if(countries.length !== 0){
    const country = countries.find(item => item.alpha3Code === alpha3Code)

    let countryBorders;
    if(country.borders) {
      countryBorders = country.borders.map(border => countries.find(country => border === country.alpha3Code))
    }
  
    return (
      <div className={`country-page${props.darkMode ? ' dark-mode' : ''}`}>
        <div className='container'>
          <div className='back-link'>
             <Link to='/'><i className="fa-sharp fa-solid fa-arrow-left"></i> back</Link>
          </div>
          <div className='image-description'>
            <div className='image'>
              <img src={country.flags.svg} alt={`${country.name} flag`}/>
            </div>
            <div className='description'>
              <h2>{country.name}</h2>
              <div className='details'>
                <div className='left'>
                  <h3><span className='boldHeading'>Native name: </span> {country.nativeName}</h3>
                  <h3><span className='boldHeading'>Population:</span>{parseInt(country.population).toLocaleString()}</h3> 
                  <h3><span className='boldHeading'>Region: </span>{country.region}</h3> 
                  <h3><span className='boldHeading'>Sub region: </span>{country.subregion}</h3> 
                  <h3><span className='boldHeading'>Capital: </span>{country.capital}</h3> 
                </div>
                <div className='right'>
                  <h3><span className='boldHeading'>Top level domain: </span>{country.topLevelDomain}</h3>
                  <h3><span className='boldHeading'>Currencies: </span>{country.currencies && country.currencies[0].name}</h3> 
                  <h3><span className='boldHeading'>Languages: </span>{country.languages[0].name} </h3> 
                </div>
              </div>
              <div className='borders'>
                <span>Border Countries:  </span>
                <ul>
                  {countryBorders && countryBorders.map((item, index) => (
                  <li key={index}><Link to={`/${item.alpha3Code}`}>{item.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default CountryPage;