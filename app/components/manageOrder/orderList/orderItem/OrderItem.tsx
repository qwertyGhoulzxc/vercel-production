import {FC} from 'react'
import {TShortPhone} from "@/app/services/types.phoneService/TPhone";
import styles from './orderItem.module.scss'

interface Props {
    phone: TShortPhone
}

const OrderItem: FC<Props> = ({phone}) => {
    return <div className={styles.orderItemContainer}>
        <div>{phone.company} {phone.model}
            <span> ({phone.color.colorEn} / {phone.memory.memory[0] === '1024' ? <>1TB</> : <>{phone.memory.memory[0]}GB</>})</span>
            <p>{phone.price.price.toLocaleString("ru-RU")} BYN</p></div>
    </div>
}

export default OrderItem