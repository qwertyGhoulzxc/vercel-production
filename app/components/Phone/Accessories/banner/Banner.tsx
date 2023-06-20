import { FC } from 'react'
import styles from './banner.module.scss'
import {BsArrowRightCircle} from 'react-icons/bs'
import Link from 'next/link'

const Banner: FC = () => {
  return <Link href={'/'}><div className={styles.banner}>
    <div>
    <p>А</p>
    <p>К</p>
    <p>Ц</p>
    <p>И</p>
    <p>Я</p>
    </div>
    <BsArrowRightCircle/>
  </div>
  </Link>
}

export default Banner