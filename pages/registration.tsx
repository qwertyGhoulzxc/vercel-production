import Registration from '../app/components/Enter/Registration'
import {FC} from 'react'
import {GetServerSideProps} from "next";
import {wrapper} from "@/app/redux/store";
import {getMe} from "@/app/redux/reducers/requests";

const registration: FC = () => {
    return <Registration/>
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
export default registration