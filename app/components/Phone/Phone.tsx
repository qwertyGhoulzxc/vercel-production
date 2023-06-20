import {FC} from 'react'
import HeaderPart from './HeaderPart/HeaderPart'
import ShortTechnics from './ShortTechnics/ShortTechnics'
import Accessories from './Accessories/Accessories'
import Technics from './Technics/Technics'
import Layout from '../Layout/Layout'
import {useAppSelector} from '@/app/hooks/redux'
import Watched from "@/app/components/Phone/Watched/Watched";

const Phone: FC = () => {
    const phone = useAppSelector(state => state.phoneSliceReducer)
    const {watched} = useAppSelector(state => state.UserInfoReducer.user)
    return <Layout title={phone.model}>
        <HeaderPart/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <ShortTechnics/>
            <Accessories/>
        </div>
        <Technics/>
        {watched.length !== 0 && <Watched/>}
    </Layout>
}

export default Phone