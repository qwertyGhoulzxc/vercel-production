import {Memory} from '@/app/services/types.phoneService/TPhone'
import {FC, useState} from 'react'
import styles from './MemoryInput.module.scss'
import {phoneService} from "@/app/services/PhoneService";
import {useAppSelector} from "@/app/hooks/redux";

interface Props {
    memory: Memory;
    changed: (value: (((prevState: string) => string) | string)) => void;
}


const MemoryInput: FC<Props> = ({memory, changed,}) => {
    const [checked, setChecked] = useState<string>(memory.memory[0])
    const {model, color} = useAppSelector(state => state.phoneSliceReducer)
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.value)
        const id = await phoneService.getPhoneByMAndCl(color.colorEn, String(e.target.value), model)
        changed(id)
        console.log(e.target.value);

    }


    return <div className={styles.MemoryInputContainer}>
        {
            memory.possibleMemory.map((value, i) => {
                return <div key={i} className={styles.CheckedInput}>
                    <input onChange={handleChange} type="radio" name="memoryRadio" id={value} value={value}/>
                    <label className={value === checked ? styles.checked : styles.default}
                           htmlFor={value}>{value === '1024' ? <>1TB</> : <>{value}GB</>}</label>
                </div>
            })
        }

    </div>
}

export default MemoryInput