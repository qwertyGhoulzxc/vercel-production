export interface ICase {
    company: string;
    model: string;
    img: string[];
    color: string;
    price: number
}

export interface ICaseState {
    cases: ICase[]
}