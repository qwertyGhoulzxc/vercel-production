import { FC } from 'react'
import Layout from '../Layout/Layout'
import styles from './NotFound.module.scss'
import { useRouter } from 'next/router'
const NotFound: FC = () => {

    const {replace} = useRouter()

    const handleClick =()=>{
        replace('/')
    }

  return <Layout title='404'>
    <div className={styles.page}>
    <h2>404</h2>
    <p>Походу вы заблудились</p>
    <button onClick={handleClick}>На главную</button>
    </div>
  </Layout>
}

export default NotFound