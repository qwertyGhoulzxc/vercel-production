import { FC, useState } from 'react'
import Layout from '../Layout/Layout'
import styles from './EnterStatusWindow.module.scss'
import { useAppSelector } from '@/app/hooks/redux'
import Link from 'next/link'
const EnterStatusWindow: FC = () => {

const {ChangePassError} = useAppSelector(state=>state.UserInfoReducer)

  return <Layout title='...'>
    <div className={styles.windowSt}>
      {ChangePassError.message==''?
      <h1>Здесь пока ничего нет</h1>:
      ChangePassError.status>=400?
    <>
    <h1>{ChangePassError.message}</h1>
    <Link href={'/forgotPass'}>Выслать ссылку занова</Link>
    </> 
    :
    <>
    <h1>{ChangePassError.message}</h1> 
    <Link href={'/'}>На главную</Link>
    </>
    }
    </div>
    </Layout>
}

export default EnterStatusWindow