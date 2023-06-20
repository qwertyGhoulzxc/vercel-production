import {Action, combineReducers, configureStore, ThunkAction,} from "@reduxjs/toolkit";
import {BtnStateReducer} from "./reducers/Buttons.state";
import {LoadingReducer} from "./reducers/Loading.slice";
import {UserInfoReducer} from "./reducers/user.slice";
import {createWrapper} from "next-redux-wrapper";
import {phonesDataReducer} from "./reducers/phones.slice";
import {phoneSliceReducer} from './reducers/phone.slice'
import {bestsellersReducer} from "@/app/redux/reducers/bestsellers.slice";
import {CasesDataReducer} from "@/app/redux/reducers/cases.slise";
import {WatchesDataReducer} from "@/app/redux/reducers/watches.slice";
import {SearchDataReducer} from "@/app/redux/reducers/search.data.slice";
import {ManageOrderSliceReducer} from "@/app/redux/reducers/manageOrder.slice";

// const removeMutationResultFilter: Middleware<any> = (store) => (next) => (action) => {
//     if (action.type === 'api/users/mutations/removeMutationResult') {
//       return;
//     }
//     return next(action);
//   };

const rootReducer = combineReducers({
    BtnStateReducer,
    LoadingReducer,
    UserInfoReducer,
    phonesDataReducer,
    phoneSliceReducer,
    bestsellersReducer,
    CasesDataReducer,
    WatchesDataReducer,
    SearchDataReducer,
    ManageOrderSliceReducer
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

export const store = setupStore();
// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = typeof store
// export type AppDispatch = AppStore['dispatch']

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(setupStore);
//добавить поле isReg
