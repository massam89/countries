import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Country = ({ country }) => {

  const getScrollHandler = () => {
    localStorage.setItem('scroll', window.pageYOffset)
  }

  return (
    <Link onClick={getScrollHandler} className="country" to={`/${country.alpha3Code}`} >
      <li>
        <LazyLoadImage src={country.flags.svg} alt={`${country.name} flag`}/>
        <h2> {country.name}</h2>
        <h3><span className='boldHeading'>Population: </span> {parseInt(country.population).toLocaleString()}</h3>
        <h3><span className='boldHeading'>Region: </span> {country.region}</h3>
        <h3><span className='boldHeading'>Capital: </span> {country.capital}</h3>
      </li>
    </Link>
  )
}

export default Country;