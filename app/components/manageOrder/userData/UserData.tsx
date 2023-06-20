import {FC, useState} from 'react'
import UserDataForm from "@/app/components/manageOrder/userData/userDataForm/UserDataForm";
import UserDataWindow from "@/app/components/manageOrder/userData/userDataWindow/UserDataWindow";
import {useAppSelector} from "@/app/hooks/redux";

const UserData: FC = () => {
    const {buyer} = useAppSelector(state => state.ManageOrderSliceReducer)
    const [isBuyerInfo, setIsBuyerInfo] = useState<boolean>(false)


    return <div>

        {isBuyerInfo ? <UserDataWindow change={setIsBuyerInfo}/> : <UserDataForm change={setIsBuyerInfo}/>}

    </div>
}

export default UserData