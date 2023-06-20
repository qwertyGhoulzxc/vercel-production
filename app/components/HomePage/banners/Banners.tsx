import {FC} from 'react'
import Image from 'next/image'
import IphoneMain from '../../../../public/images/banners/banners-iphone-main.png'
import Headphone from '../../../../public/images/banners/banners-secondheadphone.png'
import IphoneSecond from '../../../../public/images/banners/banners-secondphone.png'
import IphonesThird from '../../../../public/images/banners/banners-threephones.png'
import IphoneFirst from '../../../../public/images/banners/banners-thirstphone.png'
import PhoneFirst from '../../../../public/images/banners/banners-thirstsamsung.png'
import GalaxyFirst from '../../../../public/images/banners/banners-thirstgalaxy.png'
import Apple from '../../../../public/images/banners/Apple.png'
import Samsung from '../../../../public/images/banners/Samsung.png'
import Xiaomi from '../../../../public/images/banners/Xiaomi.png'
import Huawei from '../../../../public/images/banners/LogoHuawei.png'
import HuaweiText from '../../../../public/images/banners/HUAWEI.png'
import styles from './Banners.module.scss'

const Banners: FC = () => {
    return <>
        <div className={styles.Flexcontainer}>
            <div className={styles.MainBanner}>
                <h2>Большой выбор техники Apple в Минске</h2>
                <Image src={IphoneMain} alt='' width={486} height={550}/>
            </div>
            <div className={styles.Banners}>
                <div className={styles.FirstBanner}>
                    <h2>Iphone, Samsung, Xiaomi, HUAWEI в нашем магазине</h2>
                    <Image src={GalaxyFirst} alt='' width={228} height={228} className={styles.GalaxyFirst}/>
                    <Image src={IphoneFirst} alt='' width={151} height={152} className={styles.IphoneFirst}/>
                    <Image src={PhoneFirst} alt='' width={228} height={228} className={styles.PhoneFirst}/>
                </div>
                <div className={styles.SecondBanner}>
                    <h2>Качественные Чехлы и аксессуары</h2>
                    <Image src={Headphone} alt='' width={74} height={63} className={styles.Headphone}/>
                    <Image src={IphoneSecond} alt='' width={139} height={163} className={styles.IphoneSecond}/>
                </div>
                <div className={styles.ThirdBanner}>
                    <h2>Акция на что-то c чем-то, до конца февраля!</h2>
                    <Image src={IphonesThird} alt='' width={236} height={162}/>
                </div>
            </div>
        </div>
        <div className={styles.Logos}>
            <div className={styles.soloLogo}>
                <Image src={Apple} alt='' width={60} height={60}/>
            </div>
            <div className={styles.soloLogo}>
                <Image src={Samsung} alt='' width={118} height={19}/>
            </div>
            <div className={styles.soloLogo}>
                <Image src={Xiaomi} alt='' width={68} height={68}/>
            </div>
            <div className={styles.soloLogo}>
                <Image src={HuaweiText} alt='' width={69} height={15} className={styles.HuaweiText1}/>
                <Image src={Huawei} alt='' width={60} height={60} className={styles.HuaweiLogo}/>

            </div>
        </div>


    </>
}

export default Banners