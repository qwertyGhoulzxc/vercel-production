export interface IWatch {
    company: string;
    model: string;
    img: string[];
    color: string;
    price: number
}

export interface IWatchState {
    watches: IWatch[]
}