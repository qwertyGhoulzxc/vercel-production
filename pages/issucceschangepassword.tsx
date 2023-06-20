import EnterStatusWindow from '@/app/components/Enter/EnterStatusWindow'
import {FC} from 'react'
import {GetServerSideProps} from "next";
import {wrapper} from "@/app/redux/store";
import {getMe} from "@/app/redux/reducers/requests";

const issucceschangepassword: FC = () => {
    return <EnterStatusWindow/>
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    await getMe(ctx, store)

    const state = store.getState()
    const isAuth = state.UserInfoReducer.isAuth
    if (!isAuth) {
        return {
            props: {}
        }
    } else {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
})
export default issucceschangepassword