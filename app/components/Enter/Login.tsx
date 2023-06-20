import { FC } from 'react'
import Layout from '../Layout/Layout'
import Form from './form/Form'

const Login: FC = () => {
  return <Layout title='Войти' >
    <Form title='Войти в Аккаунт' IFormState='login'/>
  </Layout>
}

export default Login