const SearchAndFilter = (props) => {

const filterHandler = (e) => {
  props.onChangeFilter(e.target.value)
}

const searchHandler = (e) => {
  props.onChangeSearch(e.target.value)
}

  return (
    <div className="search-filter">
      <div className="container">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type='text' placeholder="Search for a country..." onChange={searchHandler}/>
        </div>

        <div className="filter">
          <select onChange={filterHandler}>
            <option value="" disabled selected hidden>Filter by region</option>
            <option value='All'>َAll</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
      </div>  
    </div>
  )
}

export default SearchAndFilter;