import {FC} from 'react'

import Layout from '../Layout/Layout'
import BasketItem from './BasketItem/BasketItem'
import styles from './ShoppingBasket.module.scss'
import {useAppSelector} from "@/app/hooks/redux";
import TotalWindow from "@/app/components/shopingBasket/TotalWindow/TotalWindow";
import Link from "next/link";

const ShopingBasket: FC = () => {
    const {shoppingBasket} = useAppSelector(state => state.UserInfoReducer.user)
    return <Layout title='Корзина'>
        {shoppingBasket.length !== 0 ? <> <h2 className={styles.text}>Оформление заказа</h2>
            {shoppingBasket?.map((value, i) => {
                return <BasketItem key={i} phone={value}/>
            })}
            <TotalWindow/>
            <Link href={'/manageorder'}>
                <button className={styles.btn}>Оформить заказ</button>
            </Link></> : <h2 style={{fontSize: "50px", display: 'grid', placeItems: 'center'}}>Ваша корзина пустая</h2>}
    </Layout>

}

export default ShopingBasket