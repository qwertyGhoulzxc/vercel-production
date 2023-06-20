import {FC, PropsWithChildren} from 'react'
import styles from './HeaderPart.module.scss'
import {useAppSelector} from '@/app/hooks/redux'

const HeaderPart: FC<PropsWithChildren<unknown>> = () => {
    const {uniqueModels} = useAppSelector(state => state.phonesDataReducer)
    return <>
        <h1 style={{marginTop: '70px'}}>Apple Iphone</h1>
        <div className={styles.modelsContainer}>
            {uniqueModels?.map((i, ii) => {
                return <div key={ii} className={styles.model}><p>{i}</p></div>
            })}
        </div>
    </>
}

export default HeaderPart