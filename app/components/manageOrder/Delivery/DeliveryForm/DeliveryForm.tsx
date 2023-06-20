import {FC} from 'react'
import styles from './DeliveryForm.module.scss'
import {useAppSelector} from "@/app/hooks/redux";
import {useActions} from "@/app/hooks/useActions";

interface Props {
    checked: (value: (((prevState: boolean) => boolean) | boolean)) => void
    setIsPayment: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const DeliveryForm: FC<Props> = ({checked, setIsPayment}) => {
    const {isDelivery} = useAppSelector(state => state.ManageOrderSliceReducer)
    const {setIsDeliveryOrder} = useActions()
    const handleGo = () => {
        setIsDeliveryOrder(false)
    }

    const handleDelivery = () => {
        setIsDeliveryOrder(true)
    }


    const handleSubmit = () => {
        checked(prev => !prev)
        setIsPayment(true)

    }


    return (
        <div>
            <div className={styles.fromContainer}>
                <div onClick={handleGo} className={styles.deliveryOptionContainer}>
                    <div className={styles.headerPart}>
                        <div className={styles.circle}>
                            <div className={!isDelivery ? styles.checkedArea : styles.defaultArea}></div>
                        </div>
                        <h3>Самовывоз</h3>
                    </div>
                    <p className={styles.text}>С 13:00 до 19:00,<br/>по адресу - <span
                        style={{color: '#1EB53A'}}>ул. Минская 12</span></p>
                </div>

                <div onClick={handleDelivery} className={styles.deliveryOptionContainer}>
                    <div className={styles.headerPart}>
                        <div className={styles.circle}>
                            <div className={isDelivery ? styles.checkedArea : styles.defaultArea}></div>
                        </div>
                        <h3>Доставка</h3>
                    </div>
                    <p className={styles.text}>Бесплатно<br/><span
                        style={{color: '#00000080'}}>(от 700 BYN)</span></p>
                </div>
            </div>
            <button onClick={handleSubmit} className={styles.submit}>Продолжить</button>


        </div>
    )
}

export default DeliveryForm