import {FC, useState} from 'react'
import {MdOutlineShoppingBag} from 'react-icons/md'
import {BsArrowRightCircle} from 'react-icons/bs'
import styles from './AccessorCard.module.scss'
import {ICase} from "@/app/redux/reducers/types/case.interface";

interface Props {
    CasE: ICase
    isArrow: boolean
}

const AccessorCard: FC<Props> = ({CasE, isArrow}) => {

    const [btn, setBtn] = useState<boolean>(isArrow)
    return <div className={styles.container}>
        <img src={CasE.img[0] || ''} alt=""/>
        <div className={styles.description}>
            <h2 className={styles.name}>Чехол на {CasE.model} </h2>
            <p>{CasE.color}</p>

            <div className={styles.line}>
                <h2>{CasE.price} BYN</h2>
                {btn ? <BsArrowRightCircle className={styles.arrow}/> : <MdOutlineShoppingBag/>}

            </div>
        </div>
    </div>
}

export default AccessorCard