import {TPhoneShortResponse} from "@/app/services/types.phoneService/TPhoneResponse";
import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

const initialState: TPhoneShortResponse = {
    total: 0,
    limit: 12,
    maxPrice: 0,
    minPrice: 0,
    page: 1,
    uniqueColorsObj: [],
    uniqueMemory: [],
    phones: [],
    uniqueModels: []
}

const phonesData = createSlice({
    name: 'phonesData',
    initialState,
    reducers: {
        setData: (state, action) => {
            return action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.phonesDataReducer
            }
        }
    }
})

export const phonesDataReducer = phonesData.reducer;
export const phonesDataActions = phonesData.actions;