import {FC} from 'react'
import styles from './manageorder.module.scss'
import {Price} from '@/app/services/types.phoneService/TPhone'
import {useAppSelector} from "@/app/hooks/redux";
import {basketService} from "@/app/services/basketService";
import {useActions} from "@/app/hooks/useActions";

interface Props {
    price: Price
}

const ManageOrder: FC<Props> = ({price}) => {
    const {setUserData} = useActions()
    const {user} = useAppSelector(state => state.UserInfoReducer)
    const {id: phoneIId} = useAppSelector(state => state.phoneSliceReducer)
    const handleAddToBasket = async () => {
        const data = await basketService.addItem(user.id, String(phoneIId))
        setUserData(data)
    }
    const handleDelete = async () => {
        const data = await basketService.removeItem(user.id, String(phoneIId))
        setUserData(data)
    }
    return <div className={styles.box}>
        <h2>{price.price.toLocaleString('ru-RU')} BYN</h2>
        {price.discountPrice &&
            <h3 className={styles.discountPrice}>{price.discountPrice.toLocaleString('ru-RU')} BYN</h3>}
        <p style={{marginBottom: '5px'}}><span>Доставка:</span> бесплатно</p>
        <p style={{marginBottom: '10px'}}><span>Самовывоз:</span> С 13:00 до 19:00,<br/>по адресу - <span
            style={{color: "#1EB53A"}}>ул. Минская 12</span></p>
        {!user.shoppingBasket.some(obj => obj.id === phoneIId) ?
            <button onClick={handleAddToBasket} className={styles.addToBasket}>В корзину</button> :
            <button onClick={handleDelete} className={styles.deleteFromBasket}>убрать</button>}

        {/*если товар добавлен в корзину тогда чекать сотояние и менять кнопку и менять стили ну или создать другой класс кнопки*/}
        <button className={styles.buy}>Купить</button>

    </div>
}

export default ManageOrder