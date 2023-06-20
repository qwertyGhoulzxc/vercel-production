import {FC} from 'react'
import {useAppSelector} from "@/app/hooks/redux";
import GoodsCard from "@/app/components/phones_all/GoodsList/GoodsCard/GoodsCard";
import {BsArrowRightCircle} from 'react-icons/bs'
import styles from './Bestsellers.module.scss'
import {useRouter} from "next/router";

const Bestsellers: FC = () => {
    const {bestsellers} = useAppSelector(state => state.bestsellersReducer)
    const {push, basePath} = useRouter()
    const handleClick = () => {
        push(`${basePath}/goods/phones`)
    }
    return <div>
        <div onClick={handleClick} className={styles.header}>
            <h2>Лидеры продаж</h2>
            <BsArrowRightCircle/>
        </div>

        <div className={styles.container}>
            {bestsellers.map((value, i) => {
                return <GoodsCard phone={value} key={i}/>
            })}
            <div onClick={handleClick} className={styles.banner}>
                <h2>Больше скидок <br/>в каталоге</h2>
                <BsArrowRightCircle/>
            </div>
        </div>
    </div>
}

export default Bestsellers