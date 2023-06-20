import {TShortPhone} from "@/app/services/types.phoneService/TPhone";

export interface IUser {
    email: string;
    id: string;
    phonenumber: string;
    isActivated: boolean
    avatarImg: string
    name: string;
    purchased: [],
    avatar: string
    status: string;
    shoppingBasket: TShortPhone[] | [];
    watched: TShortPhone[] | []

}

export interface IError {
    status: number;
    message: string
}

interface ILoading {
    loginLoading: boolean;
    registrationLoading: boolean;
    LogOutLoading: boolean;
    checkAuthLoading: boolean;
    SendLinkLoading: boolean;
    reloadReduxDataLoading: boolean;
    changeNameLoading: boolean;
    changePasswordLoading: boolean;
    setSetAvatarServerLoading: boolean;
}

export interface ILoadingStatus {
    loadingStatus: ILoading
    LoadingStatus: boolean
}