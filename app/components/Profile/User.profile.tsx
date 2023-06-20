import {FC} from 'react'
import Layout from '../Layout/Layout'
import styles from './User.profile.module.scss'
import {logout} from "@/app/redux/reducers/requests";
import {useAppDispatch} from "@/app/hooks/redux";

const UserProfile: FC = () => {
//     const dispatch = useAppDispatch()
//     const [img,setImg] = useState<any>(null)
//     const [modalChangeImg,setModalChangeImg] = useState<any>('')
//     const {user} = useAppSelector(state=>state.UserInfoReducer)
//     const {setChangeProfileAvatar} = useActions()
//
// //darag&drop
// const [drag,setDrag] = useState<boolean>(false)
//
// const dragStartHandler =(e:any)=>{
//     e.preventDefault();
//     setDrag(true)
// }
// const dragLeaveHandler = (e:any)=>{
//     e.preventDefault()
//     setDrag(false)
// }
//
// const dropHandler = (e:any)=>{
//     e.preventDefault()
//     let file = [...e.dataTransfer.files]
//     setDrag(false)
//
//     const url = URL.createObjectURL(file[0]);
//     switch (file[0].type){
//         case 'image/png':{setNewLogo(url);
//             setModalChangeImg(file[0])
//             return;
//         }
//         case 'image/jpeg':{setNewLogo(url);
//             setModalChangeImg(file[0])
//             return;
//         }
//         case 'image/jpg':{setNewLogo(url);
//             setModalChangeImg(file[0])
//             return;
//         }
//         default:return setChangeProfileAvatar(true)
//     }
//
// }
//
//     const handleChange = (e:any)=> {
//         setImg(e.target.files[0])
//         console.log(img);
//      }
//
//      const [newLogo,setNewLogo]  =useState<any>('')
//      const handleFileChange = (selectedFile: File) => {
//         setModalChangeImg(selectedFile)
//                 const url = URL.createObjectURL(selectedFile);
//                 setNewLogo(url)
//
//             };
//
//      const handleSendFile = useCallback(async (e:any)=>{
//         e.preventDefault()
//         try{
//             const id = Cookies.get('id')||''
//             const formData = new FormData()
//             formData.append('avatar',img)
//             formData.append('id', id);
//             dispatch(setAvatarServer(formData))
//             dispatch(reloadReduxData(Cookies.get('id')))
//             // Cookies.get('username')
//         }catch (e) {
//             console.log(e);
//
//         }
//     },[img])
//
//     const [newName,setNewName] = useState<string>(user.name)
//     const handleNameChange = (e:any)=>{
//         setNewName(e.target.value)
//     }
    const dispatch = useAppDispatch()
//
    const handleLogOut = async () => {
        dispatch(logout())
    }

    return (
        <Layout title='Профиль'>
            <button onClick={handleLogOut} className={styles.btn}>Log Out</button>
        </Layout>
    )
}

export default UserProfile