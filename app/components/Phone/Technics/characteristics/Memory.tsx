import {FC} from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'
import {Memory} from '@/app/services/types.phoneService/TPhone'

interface IOmitMemory extends Omit<Memory, 'possibleMemory'> {
}

interface IMemory {
    memory: IOmitMemory
}

const Memory: FC<IMemory> = ({memory}) => {
    return <div className={styles.container}>
        <h2>Комплектация</h2>
        <Line property='Встроенная память (GB)' value={memory.memory[0]}/>
        <Line property='Оперативная память (GB)' value={memory.ram}/>
    </div>
}

export default Memory