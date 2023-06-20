import {FC} from 'react'
import styles from './totalWindow.module.scss'
import {useAppSelector} from "@/app/hooks/redux";

const TotalWindow: FC = () => {
    const {shoppingBasket} = useAppSelector(state => state.UserInfoReducer.user)

    let totalSumValue = 0;
    for (let i = 0; i < shoppingBasket.length; i++) {
        totalSumValue += shoppingBasket[i].price.price;
    }

    // useEffect(() => {
    //     totalSumValue = shoppingBasket.reduce((accumulator, currentObject) => {
    //         return accumulator + currentObject.price.price;
    //     }, 0);
    // }, [])
    //
    // useEffect(() => {
    //     totalSumValue = shoppingBasket.reduce((accumulator, currentObject) => {
    //         return accumulator + currentObject.price.price;
    //     }, 0);
    // }, [shoppingBasket])

    return <div className={styles.totalWindowContainer}>
        <div className={styles.totalSumContainer}>
            <p>Итого к оплате</p>
            <p className={styles.sum}>{totalSumValue.toLocaleString("ru-RU")} BYN</p>
        </div>
        <div className={styles.deliver}>
            <p><span>Доставка:</span> бесплатно </p>
            <p><span>Самовызов:</span> С 13:00 до 19:00,<br/>по адресу - <span
                style={{color: '#1EB53A'}}>ул. Минская 12</span>
            </p>

        </div>
    </div>
}

export default TotalWindow