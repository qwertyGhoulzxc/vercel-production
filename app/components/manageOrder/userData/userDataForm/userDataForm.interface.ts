import {Control} from "react-hook-form";
import {PhoneInputProps} from "react-phone-input-2";

export interface IUserDataFormState {
    number: string;
    email: string;
    initials: string
}

export type PhoneInputByProps = {
    name: keyof IUserDataFormState;
    control: Control<IUserDataFormState>;
} & PhoneInputProps;