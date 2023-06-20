import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IManageOrderState} from "@/app/redux/reducers/types/manageOrder.interface";
import {IUserDataFormState} from "@/app/components/manageOrder/userData/userDataForm/userDataForm.interface";

const initialState: IManageOrderState = {
    buyer: {
        initials: '',
        email: '',
        number: '',
    },
    isDelivery: false,
    payment: ''
}

const manageOrderSlice = createSlice({
    name: 'manageOrder',
    initialState,
    reducers: {
        setBuyerOrder: (state, action: PayloadAction<IUserDataFormState>) => {
            state.buyer = action.payload
        },
        setIsDeliveryOrder: (state, action: PayloadAction<boolean>) => {
            state.isDelivery = action.payload
        },
        setPaymentOrder: (state, action: PayloadAction<string>) => {
            state.payment = action.payload
        },
    },

})

export const ManageOrderSliceReducer = manageOrderSlice.reducer;
export const ManageOrderSliceActions = manageOrderSlice.actions;