import {FC, useEffect, useState} from 'react'
import styles from './inputSearch.module.scss'
import {BsSearch} from 'react-icons/bs'
import {phoneService} from "@/app/services/PhoneService";
import {useActions} from "@/app/hooks/useActions";
import {RxCrossCircled} from "react-icons/rx";
import SearchWindow from "@/app/components/Layout/header/inputSearch/searchWindow/SearchWindow";

const InputSearch: FC = () => {

    const [inputValue, setInputValue] = useState<string>('')
    const {setSearchData, clearSearchData} = useActions()
    useEffect(() => {
        const delay = 1000; // Время задержки в миллисекундах
        const timeoutId = setTimeout(async () => {
            const data = await phoneService.search(inputValue, "3")
            console.log(data.phones)
            setSearchData(data.phones)
            // SetSearchData(data.phones)
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [inputValue]);
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleClear = () => {
        clearSearchData()
        setInputValue('')
    }


    return (<div className={styles.Wdth}>
            <input onChange={handleChange} value={inputValue} placeholder='Телефон iPhone '
                   className={styles.inputStyle}/>
            {inputValue.length === 0 ? <BsSearch className={styles.icon}/> :
                <RxCrossCircled onClick={handleClear} className={styles.icon}/>}
            {inputValue.length !== 0 && <SearchWindow inputValue={inputValue}/>}
        </div>
    )
}

export default InputSearch