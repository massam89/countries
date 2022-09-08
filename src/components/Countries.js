import Country from './Country'

const Countries = ({countries}) => {

  return (
    <div className="countries">
      {countries &&
        countries.map((country, index) => {
          return <Country key={index} country={country} countries={countries} />
        })
      }
    </div>
  )
}

export default Countries;