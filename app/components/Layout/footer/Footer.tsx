import { FC } from 'react'
import widthStyle from '../Layout.module.scss'
import styles from './Footer.module.scss';
import classNames from 'classnames';


const Footer: FC = () => {
return <footer className={styles.footerCl}>
    <div className={classNames(widthStyle.container, styles.flex)}>
        <div className={styles.firstCol}>
            <a href="tel:+375292367856">+375 29 236 78 56</a>
            <ul>
                <li>Ул. Минская</li>
                <li>Ул. Октябрьская</li>
                <li>Ул. Молодежная</li>
            </ul>
        </div>
        <h2>Life:)</h2>
        <div className={styles.secondCol}>
        ООО *Life* Республика<br/> Беларусь, г. Минск.<br/> Регестрация - ул. Минская 23.06.2019
        </div>
    </div>
    </footer>
}

export default Footer