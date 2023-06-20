import HomePage from "@/app/components/HomePage/HomePage";
import {wrapper} from "@/app/redux/store";
import {GetServerSideProps} from "next";

import {getMe} from "@/app/redux/reducers/requests";
import {phoneService} from "@/app/services/PhoneService";
import {casesService} from "@/app/services/CasesService";
import {watchesService} from "@/app/services/WatchesService";

export default function Index() {

    return (

        <HomePage/>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    try {
        await getMe(ctx, store)
        await phoneService.getBestsellers(store, 3)
        await casesService.getCases(store, 3)
        await watchesService.getWatches(store)
        return {
            props: {}
        }
    } catch (e) {
        console.log(e)
        return {
            props: {}
        }
    }
})