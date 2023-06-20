import {FC} from 'react'
import styles from './watched.module.scss'
import {useAppSelector} from "@/app/hooks/redux";
import SmallGoodCard from "@/app/components/Phone/Watched/smallGoodCard/SmallGoodCard";

const Watched: FC = () => {
    const {watched} = useAppSelector(state => state.UserInfoReducer.user)
    return <div className={styles.watchedContainer}>
        <h2>Вы смотрели</h2>
        <div className={styles.watchedItems}>
            {watched?.map((value, i) => {
                return <SmallGoodCard key={i} phone={value}/>
            })}
        </div>
    </div>
}

export default Watched