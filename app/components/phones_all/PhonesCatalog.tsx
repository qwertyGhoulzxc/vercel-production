import {FC} from 'react'
import Layout from '../Layout/Layout'
import HeaderPart from './header/HeaderPart'
import GoodsList from './GoodsList/GoodsList'
import FilterWindow from './FilterWindow/FilterWindow'
import styles from './PhonesCatatlog.module.scss'
import Pagination from "@/app/components/phones_all/pagination/Pgagination";


const PhonesCatalog: FC = () => {


    return <Layout title='Iphones'>
        <HeaderPart/>
        <div className={styles.pageContainer}>
            <GoodsList/>
            <FilterWindow/>
        </div>
        <Pagination/>
    </Layout>
}
//добавить раззмерные блоки
export default PhonesCatalog