import {FC} from 'react'
import styles from './UserDataWindow.module.scss'
import {useAppSelector} from "@/app/hooks/redux";

interface Props {
    change: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const UserDataWindow: FC<Props> = ({change}) => {

    const {buyer} = useAppSelector(state => state.ManageOrderSliceReducer)
    const handleChangeValue = () => {
        change(prevState => !prevState)
    }
    return <div className={styles.userDataWindowContainer}>
        <div className={styles.headerPart}>
            <h2>Получатель</h2>
            <p onClick={handleChangeValue}>Изменить</p>
        </div>
        <div className={styles.buyerInfo}>
            <p>{buyer?.initials}</p>
            <p>+{buyer?.number}</p>
            <p>{buyer.email}</p>
        </div>
    </div>
}

export default UserDataWindow