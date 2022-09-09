import { useEffect, useState } from 'react'
import SearchAndFilter from '../components/SearchAndFilter'
import Countries from '../components/Countries';
import {similarity} from '../lib/helper.js'

function Home(props) {
  const [countries, setCountries] = useState([])
  const [filteredCountry, setFilteredCountry] = useState([])
  const [filter, setFilter] = useState('all')
  const [searchInput, setSearchInput] = useState('')
  const [nameFilter, setNameFilter] = useState(true)
  const [popFilter, setPopFilter] = useState(true)

  //Get data from an API
  useEffect(() => {
    const url = 'https://restcountries.com/v2/all'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountries([...data])
      setFilteredCountry([...data])
    })
  }, [])

  //Handle list When filter button is changed
  useEffect(() => {
    if(filter === 'All') {
      setFilteredCountry([...countries])
    } else {
      setFilteredCountry([...countries.filter(country => country.region === filter)])
    }
    // eslint-disable-next-line
  }, [filter])

  const filterHandler = (filter) => {
    setFilter(filter)
  }

  //Handle list When search input is changed
  useEffect(() => {
    const identifier = setTimeout(() => {
      if(searchInput.trim() === ''){
        setFilteredCountry([...countries])
      }else {
        setFilteredCountry([...countries.filter(country => similarity(country.name.toLowerCase(),searchInput.toLowerCase()) > 0.5)])
      }
    }, 300)

    return () => clearTimeout(identifier)
    // eslint-disable-next-line
  }, [searchInput])

  const searchHandler = (input) => {
    setSearchInput(input)
  }

  // Sort Handlers
  const sortNameHandler = () => {
    let nameFilterCountries;
    if(nameFilter){
      nameFilterCountries = filteredCountry.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    } else {
      nameFilterCountries = filteredCountry.sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
    }
    setFilteredCountry([...nameFilterCountries])
    setNameFilter(!nameFilter)
  }

  const sortPopHandler = () => {
    let popFilterCountries;
    if(popFilter){
      popFilterCountries = filteredCountry.sort((a, b) => parseInt(b.population) - parseInt(a.population))
    } else {
      popFilterCountries = filteredCountry.sort((a, b) => parseInt(a.population) - parseInt(b.population))
    }
    setFilteredCountry([...popFilterCountries])
    setPopFilter(!popFilter)
  }

  return (
    <>
      <button onClick={sortPopHandler} className={`sortPop${props.darkMode ? ' dark-mode' : ''}`}>Sort by population</button>
      <button onClick={sortNameHandler} className={`sortName${props.darkMode ? ' dark-mode' : ''}`}>Sort by name</button>
      <div className={`home${props.darkMode ? ' dark-mode' : ''}`}>
        <SearchAndFilter onChangeSearch={searchHandler} onChangeFilter={filterHandler}/>
        <Countries filteredCountry={filteredCountry} countries={countries} />
      </div>
    </> 
  );
}

export default Home;
