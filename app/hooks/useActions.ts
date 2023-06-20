import {bindActionCreators} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import {BtnStateActions} from '../redux/reducers/Buttons.state'
import {LoadingActions} from '../redux/reducers/Loading.slice'
import {UserInfoActions} from '../redux/reducers/user.slice'
import {phonesDataActions} from "../redux/reducers/phones.slice"
import {phoneSliceActions} from "../redux/reducers/phone.slice"
import {SearchDataActions} from "@/app/redux/reducers/search.data.slice";
import {ManageOrderSliceActions} from "@/app/redux/reducers/manageOrder.slice";

const allActions = {
    ...BtnStateActions,
    ...LoadingActions,
    ...UserInfoActions,
    ...phonesDataActions,
    ...phoneSliceActions,
    ...SearchDataActions,
    ...ManageOrderSliceActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}