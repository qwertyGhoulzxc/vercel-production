import {Camera} from '@/app/services/types.phoneService/TPhone'
import {FC} from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'

interface ICamera {
    camera: Camera
}

const Camera: FC<ICamera> = ({camera}) => {
    return <div className={styles.container}>
        <h2>Фотокамера</h2>
        <Line property='Фотокамера (Мп)' value={camera.cameraPhone}/>
        <Line property='Оптический зум' value={camera.opticalZoom}/>
        <Line property='Стабилизация изображения' value={camera.stabilizationImg}/>
        <Line property='Автофокус' value={camera.autoFocus}/>
        <Line property='Вспышка' value={camera.light}/>
        <Line property='Видеозапись' value={camera.record}/>
        <Line property='Разрешение видеосъемки (пикс)' value={camera.recordQuality}/>
        <Line property='Частота кадров видеосъемки' value={camera.recordFps}/>
        <Line property='Стабилизация видео' value={camera.videoStabilization}/>
        <Line property='Фронтальная камера (Мп)' value={camera.frontCamera}/>

    </div>


}

export default Camera