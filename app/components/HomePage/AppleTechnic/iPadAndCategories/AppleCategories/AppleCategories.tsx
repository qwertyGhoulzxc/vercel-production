import {FC} from 'react'
import styles from './AppleCategories.module.scss'

const AppleCategories: FC = () => {
    return <div className={styles.appleCategoriesContainer}>
        <div className={styles.card}>iPhone</div>
        <div className={styles.card}>iPad</div>
        <div className={styles.card}>Apple Watch</div>
        <div className={styles.card}>Ноутбуки</div>

    </div>
}

export default AppleCategories