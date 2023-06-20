import {Display} from '@/app/services/types.phoneService/TPhone'
import {FC} from 'react'
import styles from './characteristics.module.scss'
import Line from './Line'

interface IDisplay {
    display: Display
}

const Display: FC<IDisplay> = ({display}) => {
    return <div className={styles.container}>
        <h2>Дисплей</h2>

        <Line property={'Тип дисплея'} value={display.typeDisplay}/>
        <Line property={'Диагональ (дюйм)'} value={display.screen}/>
        <Line property={'Разрешение (пикс)'} value={display.screenSizePixels}/>
        <Line property={'Плотность пикселей (PPI'} value={display.PPI}/>
        <Line property={'Количество цветов дисплея'} value={display.colors}/>
        <Line property={'Сенсорный дисплей'} value={display.sensorDisplay}/>
        <Line property={'Поддержка Multitouch'} value={display.multiTouch}/>
        <Line property={'Защита экрана'} value={display.screenProtect}/>
        <Line property={'Особенности дисплея'} value={display.displayFeatures}/>
        <Line property={'Олеофобное покрытие'} value={display.typeDisplay}/>
        <Line property={''} value={display.oleophobicCoating}/>
    </div>
}

export default Display