import { FC } from 'react'
import Layout from '../Layout/Layout'
import Form from './form/Form'
import { useRouter } from 'next/router'



const ChangePassByLink: FC = () => {
  return <Layout title='Смена пароля' >
    <Form title='Поменять пароль :' IFormState='ChangePassWithParams'/>
  </Layout>
}

export default ChangePassByLink