import PhonesCatalog from "@/app/components/phones_all/PhonesCatalog";
import {GetServerSideProps, NextPage} from "next";
import {phoneService} from "../../../app/services/PhoneService";
import {wrapper} from "@/app/redux/store";
import {getMe} from "@/app/redux/reducers/requests";

const page: NextPage = () => {
    return <PhonesCatalog/>;
};


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {

    const {query, res, req} = ctx
    res.setHeader('Cache-Control', 's-maxage=20,stale-while-revalidate=60')

    const state = store.getState()
    const isFiltered = state.BtnStateReducer.isFiltered
    await getMe(ctx, store)
    const page = Number(query.page) || 1
    await phoneService.getPhones(query, store, 12, page, "true");


    return {
        props: {}

    };
})

export default page;
