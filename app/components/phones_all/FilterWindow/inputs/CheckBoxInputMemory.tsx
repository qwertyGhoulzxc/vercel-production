import {FC, useEffect, useState} from 'react'
import styles from '../FilterWindow.module.scss'
import {useActions} from '@/app/hooks/useActions'
import {useAppSelector} from '@/app/hooks/redux'

interface ICheckBoxInputMemory {
    memory: string;
    reset: boolean;
   
}

const CheckBoxInputMemory: FC<ICheckBoxInputMemory> = ({memory, reset,}) => {
    const [checked, setChecked] = useState<boolean>(false)
    const {checkedMemory, isFiltered} = useAppSelector(state => state.BtnStateReducer)
    const {setCheckedMemory} = useActions()

    useEffect(() => {
        setChecked(false)

    }, [reset])

    const handleChange = () => {


        setChecked(prev => !prev)
        if (!checked && !checkedMemory.includes(memory)) {
            setCheckedMemory([...checkedMemory, memory])
        }
        if (checked) {
            const removedColors = checkedMemory.filter(i => i !== memory)
            setCheckedMemory([...removedColors])
        }
    }


    return <div className={styles.CheckedInput}>
        <input checked={checked} onChange={handleChange} type="checkbox" name={'sortMemory'} id={memory}/>
        <label className={checked ? styles.checked : styles.default} htmlFor={memory}>{memory === '1024' ? <>1
            Тб</> : <>{memory} Гб</>}</label>
    </div>
}

export default CheckBoxInputMemory
