import {FC} from 'react'
import AppleCategories from "@/app/components/HomePage/AppleTechnic/iPadAndCategories/AppleCategories/AppleCategories";
import styles from './iPadAndCategories.module.scss'
import IPadCard from "@/app/components/HomePage/AppleTechnic/iPadAndCategories/iPadCard/IPadCard";

const IPadAndCategories: FC = () => {
    return <div className={styles.container}>
        <h2>Техника Apple</h2>
        <AppleCategories/>
        <IPadCard/>
    </div>
}

export default IPadAndCategories