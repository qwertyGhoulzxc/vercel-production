import {FC} from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import styles from './Accessories.module.scss'
import AccessorCard from './AccessorCard/AccessorCard'
import Banner from './banner/Banner'
import Link from 'next/link'
import {useAppSelector} from "@/app/hooks/redux";

const Accessories: FC = () => {
    const {cases} = useAppSelector(state => state.CasesDataReducer)

    return <div>
        <div className={styles.AccesoriesContainer}>
            <Link href={'/'}><h2>Чехлы и аксессуары </h2></Link>
            <BsArrowRightCircle/>
        </div>
        <div className={styles.raw}>
            {cases.map((value, i) => {
                if (i < 2)
                    return <AccessorCard isArrow={false} key={i} CasE={value}/>
            })}

            <Banner/>
        </div>
    </div>
}

export default Accessories