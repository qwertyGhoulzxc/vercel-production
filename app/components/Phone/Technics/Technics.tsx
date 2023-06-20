import { FC, useState } from 'react'
import {BsArrowUpCircle,BsArrowDownCircle} from 'react-icons/bs'
import styles from './Technics.module.scss'
import EquipmentPhone from './characteristics/Equipment'
import Display from './characteristics/Display'
import Other from './characteristics/Other'
import Camera from './characteristics/Camera'
import Case from './characteristics/Case'
import Cpu from './characteristics/Cpu'
import Memory from './characteristics/Memory'
import Sim from './characteristics/Sim'
import System from './characteristics/System'
import { useAppSelector } from '@/app/hooks/redux'

const Technics: FC = () => {
const [isOpened,setIsOpened] = useState<boolean>(false)

const Phone = useAppSelector(state=>state.phoneSliceReducer) 

const handleClick =():void=>{
    setIsOpened(prev=>!prev)
}

  return <div className={styles.TechnicsContainer}>
    <div onClick={handleClick} style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'63px'}}>
    <p>Технические характеристики</p>
    {isOpened?<BsArrowUpCircle/>:<BsArrowDownCircle/>}
    </div>
    <div style={isOpened?{display:'block'}:{display:'none'}}>
        <EquipmentPhone equipment={Phone.equipment}/>
        <Display display={Phone.display}/>
        <Cpu cpu={Phone.cpu}/>
        <Camera camera={Phone.camera}/>
        <Memory memory={Phone.memory}/>
        <System system={Phone.system}/>
        <Sim sim={Phone.simCard}/>
        <Case casE={Phone.casE}/>
        <Other other={Phone.other}/>
    </div>
  </div>
}

export default Technics