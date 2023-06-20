import {IUserDataFormState} from "@/app/components/manageOrder/userData/userDataForm/userDataForm.interface";

export interface IManageOrderState {
    buyer: IUserDataFormState;
    isDelivery: boolean | null
    payment: string
}

