import { configureStore } from '@reduxjs/toolkit'
import searchResultReducer from "./reducer/search-result";

export default configureStore({
    reducer: {
        searchResult: searchResultReducer,
    },
})