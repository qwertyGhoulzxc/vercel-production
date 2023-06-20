import { useAppSelector } from '@/app/hooks/redux'
import { FC } from 'react'
import styles from './ShortTechnics.module.scss'

const ShortTechnics: FC = () => {
    const {id,article,display,memory,camera} = useAppSelector(state=>state.phoneSliceReducer)
  return <div className={styles.ShortTechnicsContainer}>
    <p><span>ID:</span> {id}</p>
    <p><span>Артикул:</span> {article}</p>
    <p><span>Диагональ (дюйм):</span> {display.screen}</p>
    <p><span>Разрешение (пикс):</span> {display.screenSizePixels}</p>
    <p><span>Встроенная память ({memory.memory[0]==='1024'?<>TB</>:<>GB</>}):</span> {memory.memory[0]}</p>
    <p><span>Оптический зум:</span> {camera.opticalZoom}</p>
    <p><span>Фотокамера (Мп):</span> {camera.cameraPhone}</p>
  </div>
}

export default ShortTechnics