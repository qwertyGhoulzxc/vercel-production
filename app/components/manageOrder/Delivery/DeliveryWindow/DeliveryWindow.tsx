import {FC} from 'react'
import styles from './DeliveryWindow.module.scss'
import {useAppSelector} from "@/app/hooks/redux";

interface Props {
    checked: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const DeliveryWindow: FC<Props> = ({checked}) => {
    const {isDelivery} = useAppSelector(state => state.ManageOrderSliceReducer)
    return <div className={styles.deliveryWindowContainer}>
        <div className={styles.headerPart}>
            <h2>Способ получения</h2>
            <p onClick={() => checked(prev => !prev)}>Изменить</p>
        </div>
        <div className={styles.typE}>{isDelivery ? <>Доставка</> : <>Самовывоз</>}</div>
        <div className={styles.typE}>по адресу - {isDelivery ? <>...</> : <>ул. Минская 12</>}</div>
    </div>
}

export default DeliveryWindow