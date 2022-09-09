import Country from './Country'

const Countries = ({countries}) => {

  return (
    <div className="countries">
      <div className='container'>
        {countries &&
          countries.map((country, index) => {
            return <Country key={index} country={country} countries={countries} />
          })
        }
      </div>
    </div>
  )
}

export default Countries;