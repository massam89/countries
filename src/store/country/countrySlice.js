import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: 'country',
    initialState: {countries: [], filteredCountry: []},
    reducers: {
        addCountries(state, action){
           state.countries = action.payload
           state.filteredCountry = action.payload
        },
        updateCountries(state,action){
            state.countries = action.payload
        },
        updateFilteredCountry(state, action){
            state.filteredCountry = action.payload
        }

    }
})

export const countryActions = countrySlice.actions
export default countrySlice.reducer

