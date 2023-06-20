import {FC} from 'react'
import AccessoriesBanner from "@/app/components/HomePage/Accessories/AccessoriesBanner/AccessoriesBanner";
import {BsArrowRightCircle} from 'react-icons/bs'
import styles from './Accessories.module.scss'
import {useAppSelector} from "@/app/hooks/redux";
import AccessorCard from "@/app/components/Phone/Accessories/AccessorCard/AccessorCard";

const Accessories: FC = () => {
    const {cases} = useAppSelector(state => state.CasesDataReducer)

    return <div className={styles.mabo}>
        <div className={styles.accessoriesHeader}>
            <h2>Чехлы и аксессуары</h2>
            <BsArrowRightCircle/>
        </div>
        <div className={styles.raw}>
            <AccessoriesBanner/>
            {cases.map((value, i) => {
                return <AccessorCard CasE={value} isArrow={true}/>
            })}
        </div>
    </div>
}

export default Accessories