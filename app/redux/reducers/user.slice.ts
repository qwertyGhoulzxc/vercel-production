import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserSliceInterface} from "./types/UserSlice.interface";
import {IError} from "@/app/services/types.authService/IUser";
import {HYDRATE} from "next-redux-wrapper";

const initialState: UserSliceInterface = {
    user: {
        email: '',
        phonenumber: '',
        id: '',
        isActivated: false,
        avatarImg: '',
        name: '',
        avatar: '',
        purchased: [],
        status: 'user',
        shoppingBasket: [],
        watched: []
    },
    isAuth: false,
    LoginError: {
        status: 202,
        message: ''
    },
    RegistrError: {
        status: 202,
        message: ''
    },
    ChangePassError: {
        status: 202,
        message: ''
    },
    SendLinkError: {
        status: 202,
        message: ''
    },
    ChangeName: {
        status: 202,
        message: ''
    },
    ChangeProfile: {
        img: false
    },
    lastErrorName: ''

}

const userInfo = createSlice({
    name: 'userParams',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setErrorStatusLogin: (state, action: PayloadAction<IError>) => {
            state.LoginError.status = action.payload.status;
            state.LoginError.message = action.payload.message
        },
        setErrorStatusRegistr: (state, action: PayloadAction<IError>) => {
            state.RegistrError.status = action.payload.status;
            state.RegistrError.message = action.payload.message
        },
        setErrorStatusChangePass: (state, action: PayloadAction<IError>) => {
            state.ChangePassError.status = action.payload.status;
            state.ChangePassError.message = action.payload.message
        },
        setErrorStatusSendLink: (state, action: PayloadAction<IError>) => {
            state.SendLinkError.status = action.payload.status;
            state.SendLinkError.message = action.payload.message
        },
        setErrorStatusChangeName: (state, action) => {
            state.ChangeName.status = action.payload.status;
            state.ChangeName.message = action.payload.message
        },
        setChangeProfileAvatar: (state, action: PayloadAction<boolean>) => {
            state.ChangeProfile.img = action.payload
        },
        
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.UserInfoReducer
            }
        }
    }
})

export const UserInfoReducer = userInfo.reducer
export const UserInfoActions = userInfo.actions