
export type TypeEnterParam = 'registration' | 'login' | null

export interface IIsAuth{
    isAuth:boolean;
    EnterParam:TypeEnterParam;
}