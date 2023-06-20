import { Control } from "react-hook-form";
import { PhoneInputProps } from "react-phone-input-2";

export interface IFormFields{
number:string;
email:string;
password:string;
confirmPassword:string;
}

export type IInputType = 'password' | 'text'

export type PhoneInputByProps = {
    name: keyof IFormFields;
    control: Control<IFormFields>;
  } & PhoneInputProps;

 export type FormState = 'login' | 'registration' | 'ChangePassByLink' | 'ChangePassWithParams'
  export interface IFormProps{
    title:string;
    IFormState:FormState;
  }

  export type TypeChooseLogin = 'PhoneNumber' | 'Email'