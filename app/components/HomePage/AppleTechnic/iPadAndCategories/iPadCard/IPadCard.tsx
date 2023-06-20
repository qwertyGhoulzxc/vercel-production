import {FC} from 'react'
import styles from './IPadCard.module.scss'
import IPadImg from '../../../../../../public/images/devices/Ipad.png'
import Image from "next/image";

const IPadCard: FC = () => {
    return <div className={styles.iPadCardContainer}>
        <div className={styles.image}>
            <Image src={IPadImg} alt={'iPad'} width={248} height={307}/>
        </div>
        <div className={styles.text}>
            <p>Планшет</p>
            <h2>Apple<br/> iPad Pro 4</h2>
        </div>

    </div>
}

export default IPadCard