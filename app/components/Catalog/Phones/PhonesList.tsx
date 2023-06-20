import { FC } from 'react'
import styles from './PhoneList.module.scss'
import PhonesRequest from './PhonesRequest/PhonesRequest'

const PhonesList: FC = () => {
  return <div className={styles.phoneListContainer}>
    <h2>Смартфоны</h2>
    <PhonesRequest/>
    
  </div>
}

export default PhonesList