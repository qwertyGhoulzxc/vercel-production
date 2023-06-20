import {FC, useEffect, useState} from 'react'
import styles from './SearchWindow.module.scss'
import {useAppSelector} from "@/app/hooks/redux";
import SearchItem from "@/app/components/Layout/header/inputSearch/searchWindow/searchItem/SearchItem";

interface Props {
    inputValue: string
}

const SearchWindow: FC<Props> = ({inputValue}) => {
    const [errorText, setErrorText] = useState<string>('')
    const {phones} = useAppSelector(state => state.SearchDataReducer)

    useEffect(() => {
        setTimeout(() => {
            if (phones.length === 0) {
                setErrorText(`По запросу: "${inputValue}" ничего не найдено`)
            }

        }, 1500)
    }, [inputValue])

    return <div style={errorText.length == 0 && phones.length === 0 ? {display: 'none'} : {}}
                className={styles.searchWindowContainer}>
        {phones.length !== 0 ? phones?.map((value, i) => {
                return <SearchItem key={i} phone={value}/>
            }) :
            <div className={styles.errorWindow}>{errorText}</div>
        }


    </div>
}
//По запросу: "{inputValue}" ничего не найдено
export default SearchWindow