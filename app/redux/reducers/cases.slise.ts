import {ICaseState} from "@/app/redux/reducers/types/case.interface";
import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

const initialState: ICaseState = {
    cases: []
}

const CasesData = createSlice({
    name: 'cases',
    initialState,
    reducers: {
        setCasesData: (state, action) => {
            state.cases = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.CasesDataReducer
            }
        }
    }
})

export const CasesDataReducer = CasesData.reducer;
export const CasesDataActions = CasesData.actions;