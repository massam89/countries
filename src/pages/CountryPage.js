import { useLocation, Link } from 'react-router-dom'

function CountryPage () {
  const location = useLocation()
  const { country } = location.state

  return (
    <>
      <Link to='/'>back</Link>
      <h1>hello from country page {country.name.common} </h1>
    </>
  
  )
}

export default CountryPage;