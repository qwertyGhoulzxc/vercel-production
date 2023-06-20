import {createSlice} from "@reduxjs/toolkit";
import {ISearchInitialState} from "@/app/redux/reducers/types/searchData.interface";

const initialState: ISearchInitialState = {
    phones: []
}

const searchData = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        setSearchData: (state, action) => {
            state.phones = action.payload; // Update the phones value with the received array
        },
        clearSearchData: (state) => {
            state.phones = []; // Reset the phones value to an empty array
        },
    },
});

export const SearchDataReducer = searchData.reducer;
export const SearchDataActions = searchData.actions;