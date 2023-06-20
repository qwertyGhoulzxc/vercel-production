import {FC} from 'react'
import styles from './BigBanner.module.scss'
import {BsArrowRightCircle} from 'react-icons/bs'
import {useRouter} from "next/router";

const BigBanner: FC = () => {
    const {push} = useRouter()
    const handleClick = () => {
        push('/goods/phones')
    }
    return <div onClick={handleClick} className={styles.bigBannerContainer}>
        <h2>
            Больше скидок в каталоге
        </h2>
        <BsArrowRightCircle/>
    </div>
}

export default BigBanner