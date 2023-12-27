import { createSlice } from '@reduxjs/toolkit'

export const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState: {
        searchText: '',
        searchResults: [],
        totalPage: 0
    },
    reducers: {
        setSearchText: (state, PayloadAction) => {
            state.searchText = PayloadAction.payload
        },
        setSearchResults: (state, PayloadAction) => {
            state.searchResults = PayloadAction.payload
        },
        setTotalPage: (state, PayloadAction) => {
            state.totalPage = PayloadAction.payload
        }
    }
})

export const { setSearchText, setSearchResults, setTotalPage } = searchResultSlice.actions

export default searchResultSlice.reducer