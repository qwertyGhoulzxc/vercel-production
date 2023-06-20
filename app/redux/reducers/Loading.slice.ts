import {createSlice} from "@reduxjs/toolkit";
import {ILoadingStatus} from "../../services/types.authService/IUser";


const initialState: ILoadingStatus = {
    LoadingStatus: false,
    loadingStatus: {
        loginLoading: false,
        registrationLoading: false,
        LogOutLoading: false,
        checkAuthLoading: false,
        SendLinkLoading: false,
        reloadReduxDataLoading: false,
        changeNameLoading: false,
        changePasswordLoading: false,
        setSetAvatarServerLoading: false,
    }
}

const loadingSlice = createSlice({
    name: 'Loading',
    initialState,
    reducers: {
        setLoginLoading: (state, action) => {
            state.loadingStatus.loginLoading = action.payload
        },
        setRegistrationLoading: (state, action) => {
            state.loadingStatus.registrationLoading = action.payload
        },
        setLogOutLoading: (state, action) => {
            state.loadingStatus.LogOutLoading = action.payload
        },
        setCheckAuthLoading: (state, action) => {
            state.loadingStatus.checkAuthLoading = action.payload
        },
        setSendLinkLoading: (state, action) => {
            state.loadingStatus.SendLinkLoading = action.payload
        },
        setReloadReduxDataLoading: (state, action) => {
            state.loadingStatus.reloadReduxDataLoading = action.payload
        },
        setChangeNameLoading: (state, action) => {
            state.loadingStatus.changeNameLoading = action.payload
        },
        setChangePasswordLoading: (state, action) => {
            state.loadingStatus.changePasswordLoading = action.payload
        },
        setGlobalLoadingStatus: (state, action) => {
            state.LoadingStatus = action.payload
        },
        setSetAvatarServerLoading: (state, action) => {
            state.loadingStatus.setSetAvatarServerLoading = action.payload
        }
    }
})


export const LoadingReducer = loadingSlice.reducer
export const LoadingActions = loadingSlice.actions