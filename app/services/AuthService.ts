import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse, ReloadData} from "./types.authService/typesAuthResponse";
import {IUser} from "./types.authService/IUser";



export default class AuthService{
    static async login(phonenumber:string,password:string,email:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/login',{phonenumber,email,password})
    }
//
    static async  changeName(id:string,newName:string):Promise<AxiosResponse<IUser>>{
        return $api.post<IUser>('/setname',{id,newName})
    }

    static async registration(phonenumber:string,password:string,email:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/registration',{email,password,phonenumber})
    }

    static async logout():Promise<void>{
        return $api.post('/logout')
    }

    static async ChangePass(changePassword:string,newPass:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/change/Bylink',{changePassword,newPass})
    }

    static async SendLink(email:string,phonenumber:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/forgotpass',{email,phonenumber})
    }

static async reloadReduxData(id:any):Promise<AxiosResponse<any>>{
    return $api.post<ReloadData>('/reloadataredux',{id})
}



}