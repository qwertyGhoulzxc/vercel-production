import { FC } from 'react'
import Layout from '../Layout/Layout'
import Form from './form/Form'

const Registration: FC = () => {
  return <Layout title='Регистрация' description='регистрируйтесь на сайте Life:) для поукупо гаджетов по низким ценам'>
    <Form title='Регистрация' IFormState='registration'/>

    </Layout>
}

export default Registration