import { useEffect, useState } from "react";
import SearchAndFilter from "../components/SearchAndFilter";
import Countries from "../components/Countries";
import { similarity } from "../lib/helper.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { countryActions } from "../store/country/countrySlice";

function Home(props) {
  const countries = useSelector((state) => state.country.countries);
  const filteredCountry = useSelector((state) => state.country.filteredCountry);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [nameFilter, setNameFilter] = useState(true);
  const [popFilter, setPopFilter] = useState(true);

  useEffect(() => {
    const currentScrollPosition = +localStorage.getItem('scroll') 
    window.scrollTo(0, 0)
    if(currentScrollPosition){
      const interval = setInterval(() => {   
        window.scrollTo(0, window.pageYOffset + 10)
        
        if(window.pageYOffset === currentScrollPosition) {
          clearInterval(interval)
        }
      }, 1)
    }
  }, [])

  //Handle list When filter button is changed
  useEffect(() => {

    if (filter === "All") {
      dispatch(countryActions.updateFilteredCountry([...countries]));
    } else {
      dispatch(
        countryActions.updateFilteredCountry([
          ...countries.filter((country) => country.region === filter),
        ])
      );
    }
    // eslint-disable-next-line
  }, [filter]);

  const filterHandler = (filter) => {
    setFilter(filter);
  };

  //Handle list When search input is changed
  useEffect(() => {
    const identifier = setTimeout(() => {
      if (searchInput.trim() === "") {
        dispatch(countryActions.updateFilteredCountry([...countries]));
      } else {
        dispatch(countryActions.updateFilteredCountry([
          ...countries.filter(
            (country) =>
              similarity(
                country.name.toLowerCase(),
                searchInput.toLowerCase()
              ) > 0.5
          ),
        ]));
      }
    }, 300);

    return () => clearTimeout(identifier);
    // eslint-disable-next-line
  }, [searchInput]);

  const searchHandler = (input) => {
    setSearchInput(input);
  };

  // Sort Handlers
  const sortNameHandler = () => {
    let nameFilterCountries;
    let arrayForSort = [...filteredCountry]

    if (nameFilter) {
      nameFilterCountries = arrayForSort.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      
    } else {
      nameFilterCountries = arrayForSort.sort((a, b) =>
        b.name > a.name ? 1 : a.name > b.name ? -1 : 0
      );
    }
    dispatch(countryActions.updateFilteredCountry([...nameFilterCountries]));
    setNameFilter(!nameFilter);
  };

  const sortPopHandler = () => {
    let popFilterCountries;
    let arrayForSort = [...filteredCountry]

    if (popFilter) {
      popFilterCountries = arrayForSort.sort(
        (a, b) => parseInt(b.population) - parseInt(a.population)
      );
    } else {
      popFilterCountries = arrayForSort.sort(
        (a, b) => parseInt(a.population) - parseInt(b.population)
      );
    }
    dispatch(countryActions.updateFilteredCountry([...popFilterCountries]));
    setPopFilter(!popFilter);
  };

  return (
    <>
      <button
        onClick={sortPopHandler}
        className={`sortPop${props.darkMode ? " dark-mode" : ""}`}
      >
        Sort by population
      </button>
      <button
        onClick={sortNameHandler}
        className={`sortName${props.darkMode ? " dark-mode" : ""}`}
      >
        Sort by name
      </button>
      <div className={`home${props.darkMode ? " dark-mode" : ""}`}>
        <SearchAndFilter
          onChangeSearch={searchHandler}
          onChangeFilter={filterHandler}
        />
        <Countries />
      </div>
    </>
  );
}

export default Home;
