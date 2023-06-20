import {FC} from 'react'
import styles from './AccessoriesBanner.module.scss'
import {BsArrowRightCircle} from 'react-icons/bs'


const AccessoriesBanner: FC = () => {
    return <div className={styles.accessoriesBannerContainer}>
        <div>
            <h2>Чехлы на все типы телефонов</h2>
            <BsArrowRightCircle/>
        </div>
    </div>
}

export default AccessoriesBanner