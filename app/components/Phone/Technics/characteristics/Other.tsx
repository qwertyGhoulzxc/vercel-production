import {FC} from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'
import {Other} from '@/app/services/types.phoneService/TPhone'

interface IOther {
    other: Other
}

const Other: FC<IOther> = ({other}) => {
    return <div className={styles.container}>
        <h2>Комплектация</h2>
        <Line property='Срок гарантии' value={other.guarantee}/>
        <Line property='Производитель' value={other.manufacturer}/>
        <Line property='Страна производитель' value={other.factory}/>
    </div>
}

export default Other