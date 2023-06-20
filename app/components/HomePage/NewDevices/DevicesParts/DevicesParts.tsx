import {FC} from 'react'
import {useAppSelector} from "@/app/hooks/redux";
import GoodsCard from "@/app/components/phones_all/GoodsList/GoodsCard/GoodsCard";
import styles from './DevicesParts.module.scss'
import Banner from "@/app/components/HomePage/NewDevices/DevicesParts/Banner/Banner";
import AccessorCard from "@/app/components/Phone/Accessories/AccessorCard/AccessorCard";

const DevicesParts: FC = () => {
    const {bestsellers} = useAppSelector(state => state.bestsellersReducer)
    const {cases} = useAppSelector(state => state.CasesDataReducer)
    return <div className={styles.DevicesPartContainer}>
        <div className={styles.AddNew}>
            <GoodsCard phone={bestsellers[0]}/>
            <div className={styles.circle}>New</div>
        </div>
        <Banner/>
        {
            cases.map((value, i) => {
                if (i < 2)
                    return <AccessorCard isArrow={true} CasE={value}/>
            })
        }
    </div>
}

export default DevicesParts