import Login from '@/app/components/Enter/Login'
import {FC} from 'react'
import {GetServerSideProps} from "next";
import {wrapper} from "@/app/redux/store";
import {getMe} from "@/app/redux/reducers/requests";

const login: FC = () => {
    return <Login/>
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
export default login