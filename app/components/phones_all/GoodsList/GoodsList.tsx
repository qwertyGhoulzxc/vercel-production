import { FC, PropsWithChildren } from 'react'
import GoodsCard from './GoodsCard/GoodsCard'
import styles from './GoodsList.module.scss'
import { useAppSelector } from '@/app/hooks/redux'

//добавит на них всех Link
//добавить компонет "увы такой страницы нету" если phones.length===0
const GoodsList: FC = () => {

  
  const {phones} = useAppSelector(state=>state.phonesDataReducer)

  return <div className={styles.pageContainer}>

   {phones?.map((i,ii)=>{
    return <GoodsCard phone={i} key={ii} />
   })}
    

  </div>
}

export default GoodsList