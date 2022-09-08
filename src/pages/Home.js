import { useEffect, useState } from 'react'
import SearchAndFilter from '../components/SearchAndFilter'
import Countries from '../components/Countries';

function App() {

  const [countries, setCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountries([...data])
      setFilteredCountry([...data])
    })
  }, [])

  useEffect(() => {
    if(filter === 'All') {
      setFilteredCountry([...countries])
    } else {
      setFilteredCountry([...countries.filter(country => country.region === filter)])
    }
  }, [filter])

  useEffect(() => {
    const identifier = setTimeout(() => {
      if(searchInput.trim() === ''){
        setFilteredCountry([...countries])
      }else {
        setFilteredCountry([...countries.filter(country => country.name.common.toLowerCase() === searchInput.toLowerCase())])
      }
    }, 500)

    return () => clearTimeout(identifier)
  }, [searchInput])

  const filterHandler = (filter) => {
    setFilter(filter)
  }

  const searchHandler = (input) => {
    setSearchInput(input)
  }

  return (
    <div className="home">
      <SearchAndFilter onChangeSearch={searchHandler} onChangeFilter={filterHandler}/>
      <Countries countries={filteredCountry} />
    </div>
  );
}

export default App;