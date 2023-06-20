import {IError, IUser} from "../../../services/types.authService/IUser";

export interface UserSliceInterface {
    user: IUser;
    isAuth: boolean;
    LoginError: IError
    RegistrError: IError
    ChangePassError: IError
    SendLinkError: IError
    ChangeName: IError
    ChangeProfile: {
        img: boolean
    }
    lastErrorName: string;

}