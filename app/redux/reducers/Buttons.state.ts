import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IButtonsState} from './types/ButtonsState.interface'

const initialState: IButtonsState = {
    catalogBtn: false,
    checkedColors: [],
    checkedMemory: [],
    isFiltered: false,
    LPRICERedux: 0,
    HPRICERedux: 9999,
}

const ButtonsStateSlice = createSlice({
    name: 'ButtonsState',
    initialState,
    reducers: {
        setCatalogBtnState: (state, action: PayloadAction<boolean>) => {
            state.catalogBtn = action.payload
        },
        setCheckedColors: (state, action) => {
            state.checkedColors = action.payload
        },
        setCheckedMemory: (state, action) => {
            state.checkedMemory = action.payload
        },
        setIsFiltered: (state, action: PayloadAction<boolean>) => {
            state.isFiltered = action.payload
        },
        setHPRICERedux: (state, action: PayloadAction<number>) => {
            state.HPRICERedux = action.payload
        },
        setLPRICERedux: (state, action: PayloadAction<number>) => {
            state.LPRICERedux = action.payload
        },
    }
})


export const BtnStateReducer = ButtonsStateSlice.reducer
export const BtnStateActions = ButtonsStateSlice.actions