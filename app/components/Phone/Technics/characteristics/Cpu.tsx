import {FC} from 'react'
import styles from './characteristics.module.scss'
import {Cpu} from '@/app/services/types.phoneService/TPhone'
import Line from './Line'

interface ICpu {
    cpu: Cpu
}

const Cpu: FC<ICpu> = ({cpu}) => {
    return <div className={styles.container}>
        <h2>Процессор</h2>

        <Line property='Процессор' value={cpu.cpuPhone}/>
        <Line property={cpu.description}/>
    </div>
}

export default Cpu