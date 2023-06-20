import AuthService from "../../services/AuthService";
import {UserInfoActions} from "./user.slice";
import {IUser} from "../../services/types.authService/IUser";
import {AppDispatch} from "../store";
import axios from "axios";
import {AuthResponse} from "../../services/types.authService/typesAuthResponse";
import {API_URL} from "../../http";
import Cookies from 'js-cookie'
import {LoadingActions} from "./Loading.slice";
import {GetServerSidePropsContext} from "next";
import {ParsedUrlQuery} from "querystring";
import {ToolkitStore} from "@reduxjs/toolkit/src/configureStore";
import {parseCookies} from "nookies";

const {
    setUserData,
    setAuth,
    setErrorStatusLogin,
    setErrorStatusRegistr,
    setErrorStatusChangePass,
    setErrorStatusSendLink,
    setErrorStatusChangeName
} = UserInfoActions

const {
    setSetAvatarServerLoading,
    setChangePasswordLoading,
    setChangeNameLoading,
    setReloadReduxDataLoading,
    setCheckAuthLoading,
    setRegistrationLoading,
    setLogOutLoading,
    setSendLinkLoading,
    setLoginLoading
} = LoadingActions


export const login = (phonenumber: string, password: string, email: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoginLoading(true))
        const response = await AuthService.login(phonenumber, password, email)
        dispatch(setLoginLoading(false))
        // console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUserData(response.data.user))
        dispatch(setErrorStatusLogin({
            status: 200,
            message: ''
        }))
        Cookies.set('id', response.data.user.id, {expires: 365 * 5});
    } catch (e: any) {
        dispatch(setErrorStatusLogin({
            status: e.response.status,
            message: e.response.data.message
        }))
        dispatch(setLoginLoading(false))
    }

}

export const registration = (phonenumber: string, password: string, email: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setRegistrationLoading(true))
        const response = await AuthService.registration(phonenumber, password, email)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))
        dispatch(setUserData(response.data.user))
        dispatch(setErrorStatusRegistr({
            status: 200,
            message: ''
        }))
        Cookies.set('id', response.data.user.id, {expires: 365 * 5});
        dispatch(setRegistrationLoading(false))
    } catch (e: any) {
        dispatch(setErrorStatusRegistr({
            status: e.response.status,
            message: e.response.data.message
        }))
        dispatch(setRegistrationLoading(false))
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLogOutLoading(true))
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        dispatch(setAuth(false))
        dispatch(setUserData({} as IUser))
        Cookies.remove('id');
        dispatch(setLogOutLoading(false))
    } catch (e: any) {
        console.log(e.response?.data?.message)//!!!!!
        dispatch(setLogOutLoading(false))
    }

}

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setCheckAuthLoading(true))
        const response = await axios.get<AuthResponse>(`${API_URL}refresh`, {withCredentials: true})

        localStorage.setItem('token', response.data.accessToken)
        dispatch(setAuth(true))

        const id = Cookies.get('id');
        Cookies.set('id', String(id), {expires: 365 * 5});
        dispatch(setCheckAuthLoading(false))
    } catch (e: any) {
        console.log(e.response?.data?.message)
        dispatch(setCheckAuthLoading(false))
    }
}


export const changeNameI = (id: any, newName: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setChangeNameLoading(true))
        const response = await AuthService.changeName(id, newName)
        dispatch(setErrorStatusChangeName({
            status: 200,
            message: ''
        }))
        dispatch(setUserData(response.data))
        dispatch(setChangeNameLoading(false))
    } catch (e: any) {
        dispatch(setErrorStatusChangeName({
            status: e.response.status,
            message: e.response.data.message
        }))
        dispatch(setChangeNameLoading(false))
    }
}


export const setAvatarServer = (data: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setSetAvatarServerLoading(true))

        const response = await axios.post(`${API_URL}setAvatar`, data, {
            headers: {
                'content-type': 'mulpipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            withCredentials: true,
        })
        dispatch(setUserData(response.data))
        dispatch(setSetAvatarServerLoading(false))
    } catch (e) {
        //!!!!!!
        dispatch(setSetAvatarServerLoading(false))

    }
}


export const changePassword = (changePassword: string, newPass: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setChangePasswordLoading(true))
        const response = await AuthService.ChangePass(changePassword, newPass)
        dispatch(setErrorStatusChangePass({
            status: 200,
            message: 'Ваш прароль успешно изменен'
        }))
        dispatch(setChangePasswordLoading(false))
    } catch (e: any) {

        dispatch(setErrorStatusChangePass({
            status: e.response.status,
            message: e.response?.data?.message
        }))
        dispatch(setChangePasswordLoading(false))
    }
}

export const SendLink = (email: string, phonenumber: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setSendLinkLoading(true))
        const response = await AuthService.SendLink(email, phonenumber)
        dispatch(setErrorStatusSendLink({
            status: 200,
            message: ''
        }))
        dispatch(setSendLinkLoading(false))
    } catch (e: any) {
        dispatch(setErrorStatusSendLink({
            status: e.response.status,
            message: e.response?.data?.message
        }))
        dispatch(setSendLinkLoading(false))
    }
}


export const reloadReduxData = (id: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setReloadReduxDataLoading(true))
        const response = await AuthService.reloadReduxData(id)
        dispatch(setAuth(true))
        dispatch(setUserData(response.data))
        localStorage.setItem('token', response.data.accessToken)
        Cookies.set('id', id, {expires: 365 * 5});
        dispatch(setReloadReduxDataLoading(false))
    } catch (e: any) {
        dispatch(setErrorStatusLogin({
            status: e.response.status,
            message: e.response.data.message
        }))
        dispatch(setReloadReduxDataLoading(false))
    }
}


export const getMe = async (ctx: GetServerSidePropsContext<ParsedUrlQuery, string | false | object | undefined>, store: ToolkitStore) => {
    try {
        const state = store.getState()
        const isAuth = state.UserInfoReducer.isAuth
        if (!isAuth) {
            const {id, refreshToken} = parseCookies(ctx)
            const {data} = await axios.post(`${API_URL}reloadataredux`, {id})
            store.dispatch(UserInfoActions.setUserData(data.user))
            store.dispatch(UserInfoActions.setAuth(true))
        }
    } catch (err) {
        console.log(err)
    }

}

export const getMeAlways = async (ctx: GetServerSidePropsContext<ParsedUrlQuery, string | false | object | undefined>, store: ToolkitStore) => {
    try {
        const {id} = parseCookies(ctx)
        const {data} = await axios.post(`${API_URL}reloadataredux`, {id})
        store.dispatch(UserInfoActions.setUserData(data.user))
        store.dispatch(UserInfoActions.setAuth(true))
    } catch (err) {
        console.log(err)
    }

}


//получать поле isAuth и если оно ===true тогда мы не делаем запрос