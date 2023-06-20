import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {IWatchState} from "@/app/redux/reducers/types/watches.interface";

const initialState: IWatchState = {
    watches: []
}

const WatchesData = createSlice({
    name: 'watches',
    initialState,
    reducers: {
        setWatchesData: (state, action) => {
            state.watches = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.WatchesDataReducer
            }
        }
    }
})

export const WatchesDataReducer = WatchesData.reducer;
export const WatchesDataActions = WatchesData.actions;