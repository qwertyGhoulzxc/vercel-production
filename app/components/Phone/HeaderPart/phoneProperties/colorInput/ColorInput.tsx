import {FC, useState} from 'react'
import styles from './ColorInput.module.scss'
import {phoneService} from "@/app/services/PhoneService";
import {useAppSelector} from "@/app/hooks/redux";

interface IColorInput {
    color: string[]
    defaultColor: string;
    changed: (value: (((prevState: string) => string) | string)) => void;
}

const ColorInput: FC<IColorInput> = ({color, defaultColor, changed}) => {
    const [checked, setChecked] = useState<string>(defaultColor)
    const {model, memory} = useAppSelector(state => state.phoneSliceReducer)
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.value)
        const id = await phoneService.getPhoneByMAndCl(String(e.target.value), memory.memory[0], model)
        changed(id)
        console.log(e.target.value);
    }

    return <div className={styles.ColorInputContainer}>
        {
            color.map((value, i) => {
                return <div key={i} className={styles.CheckedInput}>
                    <input onChange={handleChange} type="radio" name="colorRadio" id={value} value={value}/>
                    <label className={value === checked ? styles.checked : styles.default} htmlFor={value}>
                        <div style={value === 'white' ? {background: 'ghostwhite'} : {background: value}}></div>
                    </label>
                </div>
            })
        }
        {/* <div  className={styles.CheckedInput}>
    <input onChange={handleChange}  defaultChecked type="radio" name="colorRadio" id='qwe' value='a'/>
     </div> */}
    </div>
}

export default ColorInput