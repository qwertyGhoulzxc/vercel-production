import Catalog from '@/app/components/Catalog/Catalog'
import { getMe } from '@/app/redux/reducers/requests'
import { wrapper } from '@/app/redux/store'
import { GetServerSideProps } from 'next'

import { FC } from 'react'

const catalog: FC = () => {
  return <Catalog/>
}


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {

  await getMe(ctx, store)
  return {
    props:{}
  }
})

export default catalog
