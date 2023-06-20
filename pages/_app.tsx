import {wrapper} from "@/app/redux/store";
import React from 'react'
import {AppProps} from "next/app";
import '../styles/globals.scss'

function App({Component, pageProps}: AppProps) {

    return (
        // <Provider store={store}>
        <Component {...pageProps}></Component>
        // </Provider>
    )

}

export default wrapper.withRedux(App)


//registration

// const [RegistrateUser,{isError,isLoading,data,error}] = useRegUserMutation()

// const handleClick = async(e:React.MouseEvent<HTMLButtonElement>)=>{
//     await RegistrateUser({
//         email:"pos2.ebasha@gmail.com",
//         password:'djksldh231',
//         phonenumber:31211231231231,
//     })
// }

//login

// const [LoginUser,{isError,isLoading,data,error}] = useLoginUserMutation()

// const handleClick = async(e:React.MouseEvent<HTMLButtonElement>)=>{
//         await LoginUser({
//             email:"pos2.ebasha@gmail.com",
//             password:'djksldh231',
//         })
//     }