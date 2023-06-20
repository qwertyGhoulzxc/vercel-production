import {FC} from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import styles from './NewDevices.module.scss'
import DevicesParts from "@/app/components/HomePage/NewDevices/DevicesParts/DevicesParts";

const NewDevices: FC = () => {
    return <div className={styles.NewDevicesContainer}>
        <div className={styles.compare}>
            <h2>Новинки</h2>
            <BsArrowRightCircle/>
        </div>
        <DevicesParts/>
    </div>
}

export default NewDevices