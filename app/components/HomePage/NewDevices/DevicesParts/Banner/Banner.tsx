import {FC} from 'react'
import styles from './Banner.module.scss'
import {BsArrowRightCircle} from 'react-icons/bs'
import {useRouter} from "next/router";

const Banner: FC = () => {
    const {push} = useRouter()
    const handleClick = () => {
        push('/goods/phones/phone?page=1')
    }

    return <div onClick={handleClick} className={styles.bannerContainer}>
        <div>
            <h2>iPhone 13 Pro. Уже в продаже</h2>
            <BsArrowRightCircle/>
        </div>
    </div>
}

export default Banner