export interface ICompany {
    id: string;
    company: string;
    _id:string;
    model:string;
    Isnew:boolean;
  }
  
  export interface IData {
    [key: string]: ICompany[];
  }