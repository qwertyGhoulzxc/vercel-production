import {FC} from 'react'
import styles from './orderList.module.scss'
import {useAppSelector} from "@/app/hooks/redux";
import OrderItem from "@/app/components/manageOrder/orderList/orderItem/OrderItem";
import Link from "next/link";

const OrderList: FC = () => {
    const {shoppingBasket} = useAppSelector(state => state.UserInfoReducer.user)
    let totalSum = 0;
    for (let i = 0; i < shoppingBasket.length; i++) {
        totalSum += shoppingBasket[i].price.price;
    }

    return <div className={styles.orderListContainer}>
        <div className={styles.headerPart}>
            <h2>Состав заказа</h2>
            <Link href={'/basket'}>Изменить</Link>
        </div>
        {shoppingBasket.map((value, i) => {
            return <OrderItem key={i} phone={value}/>
        })}
        <div className={styles.totalSum}><span>Итого к оплате:</span> <p>{totalSum.toLocaleString("ru-RU")} BYN</p>
        </div>
    </div>
}

export default OrderList