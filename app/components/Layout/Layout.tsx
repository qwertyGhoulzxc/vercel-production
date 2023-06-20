import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Meta from '../seo/Meta'
import { IMeta } from '../seo/Meta.interface'

const Layout: FC<PropsWithChildren<IMeta>> = ({children,title,description}) => {



  return (
    <Meta title={title} description={description}>
    <div className={styles.page}>
   <Header/>
    <main className={styles.container}>
        {children}
    </main>
    <Footer/>
    </div>
    </Meta>
  )
}




export default Layout