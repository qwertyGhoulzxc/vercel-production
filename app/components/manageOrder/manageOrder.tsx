import {FC, useState} from 'react'
import Layout from "@/app/components/Layout/Layout";
import OrderList from "@/app/components/manageOrder/orderList/OrderList";
import UserData from "@/app/components/manageOrder/userData/UserData";
import styles from './manageOrder.module.scss'
import {useAppSelector} from "@/app/hooks/redux";
import Delivery from "@/app/components/manageOrder/Delivery/Delivery";
import {basketService} from "@/app/services/basketService";
import {useActions} from "@/app/hooks/useActions";
import {useRouter} from "next/router";

const ManageOrders: FC = () => {
    const {buyer} = useAppSelector(state => state.ManageOrderSliceReducer)
    const {id} = useAppSelector(state => state.UserInfoReducer.user)
    const {setUserData} = useActions()
    const [isPayment, setIsPayment] = useState<boolean>(false)
    const {push} = useRouter()
    const handleSubmit = async () => {
        const data = await basketService.removeAll(id)
        setUserData(data)
        push('/')
    }

    return <Layout title={'Состав заказа'}>
        <OrderList/>
        <UserData/>
        {buyer.initials === '' ? <div className={styles.OrderC}>2. Способ получения заказа</div> :
            <Delivery setIsPayment={setIsPayment}/>}
        {isPayment && <button className={styles.btn} onClick={handleSubmit}>Подтвердить заказ</button>}
    </Layout>
}

export default ManageOrders


//qwertghoulzxc@gmail.com