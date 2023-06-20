import {FC} from 'react'
import styles from './WatchCard.module.scss'
import {IWatch} from "@/app/redux/reducers/types/watches.interface";

interface Props {
    watch: IWatch
}

const WatchCard: FC<Props> = ({watch}) => {
    return <div className={styles.watchCardContainer}>
        <img src={watch.img[0]}/>
        <div className={styles.properties}>
            <p className={styles.category}>Умные часы</p>
            <h2>{watch.company} {watch.model}</h2>
            <p className={styles.color}>({watch.color})</p>
            <p className={styles.price}>{watch.price.toLocaleString('ru-RU')} BYN</p>
        </div>
    </div>
}

export default WatchCard