import { useActions } from '@/app/hooks/useActions'
import { FC, useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { NextPage } from 'next';
import Variants from './variants/Variants';
import PhonesList from './Phones/PhonesList';
import ComingSoon from './Phones/ComingSoon/ComingSoon';





const Catalog:FC = () => {

  const VariantsArr:string[] =['Смартфоны','Ноутбуки, планшеты и компьютеры','Аксессуары','Наушники, аудио и колонки','Смарт-часы и Фитнес-браслеты']

    const [checked,setChecked]=useState(VariantsArr[0])

  return <Layout title="Catalog" description='Каталог техники по низким ценам, в рассрочку'>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <Variants setChecked={setChecked} checked={checked} data={VariantsArr}/>
    {checked===VariantsArr[0]?<PhonesList/>:<ComingSoon/>}
    {/*  */}
    
    </div>
    </Layout>
}


export default Catalog