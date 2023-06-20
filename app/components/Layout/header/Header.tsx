import {FC} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import styles from './header.module.scss'
import widthStyle from '../Layout.module.scss'
import InputSearch from './inputSearch/InputSearch'
import {useRouter} from 'next/router'
import {useActions} from '@/app/hooks/useActions'
import {useAppSelector} from '@/app/hooks/redux'
import Link from 'next/link'
import Image from "next/image";


const Header: FC = () => {
    const {push, asPath} = useRouter()
    const {catalogBtn} = useAppSelector(state => state.BtnStateReducer)

    const {setCatalogBtnState} = useActions()
    const {isAuth, user} = useAppSelector(state => state.UserInfoReducer)

    //{isAuth===true||EnterParam!==null?<Link href={'/profile'}>{LoginData?.user.phonenumber}</Link>:<Link href={'/login'}>Войти</Link>}


    const handleOpenCatalog = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setCatalogBtnState(!catalogBtn)
        catalogBtn ? push('/') : push('/catalog')
    }


    return (
        <header className={styles.headerCl}>
            <div className={widthStyle.container}>
                <div className={styles.firstLine}>
                    <Link href={'/'}><h1>Life:)</h1></Link>
                    <button onClick={handleOpenCatalog} style={catalogBtn ? {color: "#002FC5", background: "white"} : {
                        color: "white",
                        background: "#002FC5"
                    }}>{catalogBtn ? <CgClose className={styles.icon}/> : <GiHamburgerMenu className={styles.icon}/>}
                        <p>КАТАЛОГ</p></button>
                    <InputSearch/>
                    <div className={styles.profile}>{isAuth ? <Link href={'/profile'}>+{user.phonenumber}</Link> :
                        <Link href={'/login'}>Войти</Link>}</div>
                </div>
                <nav className={styles.secondLine}>
                    <ul>
                        <li>НОВИНКИ</li>
                        <li>АКЦИИ</li>
                        <li>СМАРТФОНЫ И УСТРОЙСТВА</li>
                        <li>ЧЕХЛЫ И АКСЕССУАРЫ</li>
                    </ul>
                    <Link href={'/basket'}>
                        <div className={styles.shopBag}>
                            <div>
                                <Image src={'/shoppingBag.png'} alt={'basket'} height={37} style={{marginRight: '5px'}}
                                       width={27}/>
                                <p>{user?.shoppingBasket?.length !== 0 && user?.shoppingBasket?.length}</p></div>
                            <p>Корзина</p></div>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header