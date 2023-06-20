import {FC} from 'react'
import stylesbag from './BasketItem.module.scss'
import {TShortPhone} from "@/app/services/types.phoneService/TPhone";
import {RxCrossCircled} from 'react-icons/rx'
import {useRouter} from "next/router";
import {basketService} from "@/app/services/basketService";
import {useAppSelector} from "@/app/hooks/redux";
import {useActions} from "@/app/hooks/useActions";

interface Props {
    phone: TShortPhone
}

const BasketItem: FC<Props> = ({phone}) => {
    const {push} = useRouter()
    const {id} = useAppSelector(state => state.UserInfoReducer.user)
    const {setUserData} = useActions()
    const handleRedirect = () => {
        push(`/goods/phones/phone?page=${phone.id}`)
    }
    const handleDeleteItem = async () => {
        const user = await basketService.removeItem(id, String(phone.id))
        setUserData(user)
    }
    return <>
        <div className={stylesbag.itemBasket}>
            <img onClick={handleRedirect} src={phone?.color?.img[0]}/>
            <div className={stylesbag.phone}>
                <div onClick={handleRedirect} className={stylesbag.phoneName}>
                    <p className={stylesbag.Name}>{phone.company} {phone.model}</p>
                    <p className={stylesbag.phoneGb}>{phone.color.colorEn} / {phone.memory.memory[0] === '1024' ? <>1TB</> : <>{phone.memory.memory[0]}GB</>}</p>
                </div>
                <div className={stylesbag.phonePrice}>
                    <p className={stylesbag.price}>{phone?.price.price.toLocaleString('ru-RU')} BYN</p>
                    <p className={stylesbag.priceSale}>{phone?.price?.discountPrice?.toLocaleString('ru-RU')} BYN</p>
                </div>
            </div>
            <RxCrossCircled onClick={handleDeleteItem}/>
        </div>

    </>
}

export default BasketItem