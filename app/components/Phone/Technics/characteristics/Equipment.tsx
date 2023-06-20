import { FC } from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'
interface Props {
  equipment:string[]
}

const EquipmentPhone: FC<Props> = ({equipment}) => {
  return <div className={styles.container}>
    <h2>Комплектация</h2>
    {equipment?.map((value,i)=>{
      return <Line key={i} property={value}/>
    })}
    


  </div>
}

export default EquipmentPhone