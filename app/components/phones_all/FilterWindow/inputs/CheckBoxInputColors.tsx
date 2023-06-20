import {FC, useEffect, useState} from 'react'
import styles from '../FilterWindow.module.scss'
import {useActions} from '@/app/hooks/useActions'
import {useAppSelector} from '@/app/hooks/redux'

interface Props {
    colorEn: string,
    colorRu: string,
    reset: boolean
    // remove:(extra:string)=>void
}


const CheckBoxInputColors: FC<Props> = ({colorEn, colorRu, reset}) => {
    const [checked, setChecked] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(colorEn)
    const {checkedColors} = useAppSelector(state => state.BtnStateReducer)
    const {setCheckedColors} = useActions()

    useEffect(() => {
        setChecked(false)

    }, [reset])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(prev => !prev)
        !checked ? setCheckedColors([...checkedColors, colorEn]) : setInputValue('')
        if (checked) {
            const removedColors = checkedColors.filter(i => i !== colorEn)
            setCheckedColors([...removedColors])
        }

    }
    return <div className={styles.CheckedInput}>
        <input onChange={handleChange} type="checkbox" value={inputValue} name={'sortColors'} id={colorEn}/>
        <label className={checked ? styles.checked : styles.default} htmlFor={colorEn}>{colorRu}</label>
    </div>
}

export default CheckBoxInputColors

