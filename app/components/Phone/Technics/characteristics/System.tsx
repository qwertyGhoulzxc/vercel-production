import {System} from '@/app/services/types.phoneService/TPhone'
import {FC} from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'

interface ISystem {
    system: System
}

const System: FC<ISystem> = ({system}) => {
    return <div className={styles.container}>
        <h2>Система</h2>
        <Line property='Операционная система' value={system.os}/>
        <Line property='Навигация' value={system.navigation}/>
    </div>
}

export default System