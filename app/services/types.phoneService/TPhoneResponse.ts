import { TPhone, TShortPhone } from "./TPhone";

export interface TPhoneResponse {
  total: number;
  page: number;
  limit: number;
  phones: TPhone[];
}

export interface TPhoneShortResponse {
  uniqueMemory: string[];
  uniqueColorsObj: IUniqueColorsObj[];
  minPrice: number;
  maxPrice: number;
  total: number;
  page: number;
  limit: number;
  uniqueModels:string[]
  phones: TShortPhone[];
}

interface IUniqueColorsObj{
  colorEn:string;
  colorRu:string;
}