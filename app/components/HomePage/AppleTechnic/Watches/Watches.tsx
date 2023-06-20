import {FC} from 'react'
import WatchCard from "@/app/components/HomePage/AppleTechnic/Watches/WatchCard/WatchCard";
import {useAppSelector} from "@/app/hooks/redux";
import styles from './Watches.module.scss'

const Watches: FC = () => {
    const {watches} = useAppSelector(state => state.WatchesDataReducer)
    return <div className={styles.watchesContainer}>
        {
            watches.map((value, i) => {
                return <WatchCard key={i} watch={value}/>
            })
        }

    </div>
}

export default Watches