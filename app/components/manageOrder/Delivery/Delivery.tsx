import {FC, useState} from 'react'
import DeliveryForm from "@/app/components/manageOrder/Delivery/DeliveryForm/DeliveryForm";
import styles from './Delivery.module.scss'
import DeliveryWindow from "@/app/components/manageOrder/Delivery/DeliveryWindow/DeliveryWindow";

interface Props {
    setIsPayment: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const Delivery: FC<Props> = ({setIsPayment}) => {

    const [checked, setChecked] = useState<boolean>(false)

    return <div className={styles.deliveryContainer}>
        <h2>Способ получения</h2>
        {checked ? <DeliveryWindow checked={setChecked}/> :
            <DeliveryForm setIsPayment={setIsPayment} checked={setChecked}/>}

    </div>
}

export default Delivery