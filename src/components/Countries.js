import Country from './Country'

const Countries = ({filteredCountry, countries}) => {

  return (
    <div className="countries">
      <div className='container'>
        {filteredCountry &&
          filteredCountry.map((country, index) => {
            return <Country key={index} country={country} countries={countries} />
          })
        }
      </div>
    </div>
  )
}

export default Countries;