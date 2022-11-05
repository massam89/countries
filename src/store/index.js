import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./country/countrySlice";
import uiSlice from "./ui/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        country: countrySlice
    }
})

export default store