import {SimCard} from '@/app/services/types.phoneService/TPhone'
import {FC} from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'

interface ISim {
    sim: SimCard
}

const Sim: FC<ISim> = ({sim}) => {
    return <div className={styles.container}>
        <h2>SIM-карта</h2>
        <Line property='SIM-карта' value={sim.typeSimCard}/>
        <Line property='Поддержка eSIM' value={sim.eSim}/>
        <Line property='Кол-во SIM-карт' value={sim.numSim}/>
    </div>
}

export default Sim