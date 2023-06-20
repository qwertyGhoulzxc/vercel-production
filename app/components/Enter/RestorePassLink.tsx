import { FC } from 'react'
import Layout from '../Layout/Layout'
import Form from './form/Form'



const RestorePassLink: FC = () => {
  return <Layout title='Смена пароля' description='Поменять пароль на сайте Life' >
    <Form title='Выслать ссылку для смены пароля на email' IFormState='ChangePassByLink'/>
  </Layout>
}

export default RestorePassLink