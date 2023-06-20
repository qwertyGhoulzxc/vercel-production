import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './variants.module.scss'

interface Props{
    checked:string;
    setChecked:Dispatch<SetStateAction<string>>;
    data:string[]
}

const Variants: FC<Props> = ({checked,setChecked,data}) => {
    

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(e.target.value)
    }

  return <div className={styles.variantsContainer}>
    {
        data.map((value,i)=>{
            return <div className={styles.checkedInput} key={i}>
                <input onChange={handleChange} type="radio" name="catalogInput" id={value} value={value}/>
                <label className={checked===value?styles.checked:styles.default} htmlFor={value}><p>{value}</p></label>
            </div>
        })
    }
  </div>
}

export default Variants