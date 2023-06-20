import {GetServerSideProps, NextPage} from 'next'
import ManageOrders from "@/app/components/manageOrder/manageOrder";
import {wrapper} from "@/app/redux/store";
import {getMe} from "@/app/redux/reducers/requests";

const ManageOrder: NextPage = () => {
    return <ManageOrders/>
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    await getMe(ctx, store)

    const state = store.getState()
    const isAuth = state.UserInfoReducer.isAuth
    const isActivated = state.UserInfoReducer.user.isActivated
    if (isAuth) {
        return {
            props: {}
        }
    } else if (!isActivated) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
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
export default ManageOrder