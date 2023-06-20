import {FC} from 'react'
import IPadAndCategories from "@/app/components/HomePage/AppleTechnic/iPadAndCategories/iPadAndCategories";
import Watches from "@/app/components/HomePage/AppleTechnic/Watches/Watches";
import styles from './AppleTechnic.module.scss'
import IPhoneCard from "@/app/components/HomePage/AppleTechnic/IPhoneCard/IPhoneCard";

const AppleTechnic: FC = () => {
    return <div className={styles.appleTechnicContainer}>
        <IPadAndCategories/>
        <Watches/>
        <IPhoneCard/>
    </div>
}

export default AppleTechnic