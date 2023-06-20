import {FC} from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'
import {CasE} from '@/app/services/types.phoneService/TPhone'

interface ICase {
    casE: CasE
}

const Case: FC<ICase> = ({casE}) => {
    return <div className={styles.container}>
        <h2>Корпус</h2>
        <Line property='Тип корпуса' value={casE.typeOfCase}/>
        <Line property='Высота (мм)' value={casE.height}/>
        <Line property='Ширина (мм)' value={casE.width}/>
        <Line property='Толщина (мм)' value={casE.depth}/>
        <Line property='Вес (г)' value={casE.weight}/>
        <Line property='Материал корпуса' value={casE.caseMaterial}/>
        <Line property='Защита от влаги и пыли' value={casE.waterProtection}/>
        <Line property='Стандарт защиты' value={casE.typeOfWaterProtection}/>
    </div>
}

export default Case