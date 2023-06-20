import {FC} from 'react'
import styles from './GoodsCard.module.scss'
import {BsArrowRightCircle} from 'react-icons/bs'
import {TShortPhone} from '@/app/services/types.phoneService/TPhone'
import {useRouter} from 'next/router'

interface Props {
    phone: TShortPhone
}

const GoodsCard: FC<Props> = ({phone}) => {

    const {push, pathname, basePath} = useRouter()

    return <div onClick={() => push(`${basePath}/goods/phones/phone?page=${phone.id}`)}
                className={styles.card}>

        <div>
            <img src={phone?.color.img[0]} alt=""/>
        </div>
        <div className={styles.text}>
            <h2>{phone?.company} {phone?.model}</h2>
            <p>{phone?.color.colorEn} / {phone?.memory.memory} GB</p>
            <div className={styles.la}>
                <div className={styles.priceProperty}>
                    <h2 className={styles.price}>{phone?.price.price.toLocaleString('ru-RU')} BYN</h2>
                    {phone?.price.discountPrice &&
                        <h2 className={styles?.discountPrice}>{phone?.price.discountPrice.toLocaleString('ru-RU')} BYN</h2>}

                </div>
                <BsArrowRightCircle className={styles.icon}/>
            </div>
        </div>
    </div>
}

export default GoodsCard