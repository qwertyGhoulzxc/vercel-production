import { FC } from 'react'
import styles from './characteristics.module.scss'

interface ILine {
    property:string;
    value?:string | number
}

const Line: FC<ILine> = ({property,value}) => {
    return <div  className={styles.line}>
    <p className={styles.property}>{property}</p>
    <p className={styles.value}>{value}</p>
  </div>
}

export default Line