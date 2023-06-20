import {FC} from 'react'
import {TShortPhone} from "@/app/services/types.phoneService/TPhone";
import styles from './SearchItem.module.scss'
import {useRouter} from "next/router";

interface Props {
    phone: TShortPhone
}

const SearchItem: FC<Props> = ({phone}) => {
    const {push} = useRouter()
    const handleRedirect = () => {
        push(`/goods/phones/phone?page=${phone?.id}`)
    }

    return <div onClick={handleRedirect} className={styles.searchItemContainer}>

        <img alt={'phone'} src={phone?.color?.img[0]}/>
        <div className={styles.properties}>

            <div>
                <h2 className={styles.name}>{phone?.company} {phone?.model}</h2>
                <p>({phone?.color?.colorEn}/{phone?.memory?.memory[0]})</p>
            </div>

            <div>
                <p className={styles.price}>{phone?.price.price.toLocaleString('ru-Ru')} BYN</p>
                <p className={styles.discountPrice}>{phone?.price?.discountPrice} BYN</p>
            </div>
        </div>
    </div>
}

export default SearchItem