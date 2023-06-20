import Phone from '@/app/components/Phone/Phone'
import {getMeAlways} from '@/app/redux/reducers/requests'
import {wrapper} from '@/app/redux/store'
import {phoneService} from '@/app/services/PhoneService'
import {GetServerSideProps} from 'next'
import {FC} from 'react'
import {casesService} from "@/app/services/CasesService";

const PhonePage: FC = () => {
    return <Phone/>
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {

    const {query, res} = ctx
    res.setHeader('Cache-Control', 's-maxage=20,stale-while-revalidate=60')
    const page: number = Number(query.page) || 1
    // const phonesData = await phoneService.getPhones(12,page,"true");
    // написать новый запрос
    // store.dispatch(phonesDataActions.setData(phonesData))
    //создать новые поля в redux
    await getMeAlways(ctx, store)
    await phoneService.getPhoneById(store, String(page))
    await casesService.getCases(store, 2)
    await phoneService.setItemWatched(ctx, page)
    return {
        props: {}
    };
})

export default PhonePage