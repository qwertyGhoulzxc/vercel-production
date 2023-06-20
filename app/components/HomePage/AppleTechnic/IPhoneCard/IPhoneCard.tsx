import {FC} from 'react'
import styles from './IPhoneCard.module.scss'
import {MdOutlineShoppingBag} from 'react-icons/md'

const IPhoneCard: FC = () => {
    return <div className={styles.iphoneCardContainer}>
        <img
            src={'https://cdn1.it4profit.com/brd2/q:68/g:sm/plain/s3://app/public/models/MLKF3HU-A/large/w/210927160049834542.webp'}/>
        <div className={styles.properties}>
            <p className={styles.category}>Мобильные телефоны</p>
            <h2>Apple iPhone 13 mini</h2>
            <p className={styles.mac}>(Blue / 128 GB)</p>
            <p className={styles.price}>2 350 BYN</p>
        </div>
        <button className={styles.addTobasket}><MdOutlineShoppingBag/><p>В корзину</p></button>
        {/*<button className={styles.removeFromBasket}><MdOutlineShoppingBag/><p>Убрать</p></button>*/}
    </div>
}

export default IPhoneCard