import { useAppSelector } from '@/app/hooks/redux'
import { FC } from 'react'
import Slider from './slider/Slider'
import PhoneProperties from './phoneProperties/PhoneProperties'
import ManageOrder from './manageOrder/ManageOrder'

//129 px mr top

const HeaderPart: FC = () => {
const phoneData = useAppSelector(state=>state.phoneSliceReducer)

  return <header style={{display:'flex',justifyContent:'space-between',marginTop:"130px"}}>
    <Slider img={phoneData.color.img.slice(1)}/>
    <PhoneProperties/>
    <ManageOrder price={phoneData.price}/>
  </header>
}

export default HeaderPart