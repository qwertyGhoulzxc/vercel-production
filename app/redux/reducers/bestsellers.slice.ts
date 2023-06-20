import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {IBestsellers} from "@/app/redux/reducers/types/bestsellers.interface";

const initialState: IBestsellers = {
    bestsellers: []
}

const bestsellersData = createSlice({
    name: 'bestsellers',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.bestsellers = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.bestsellersReducer
            }
        }
    }
})

export const bestsellersReducer = bestsellersData.reducer;
export const bestsellersActions = bestsellersData.actions;