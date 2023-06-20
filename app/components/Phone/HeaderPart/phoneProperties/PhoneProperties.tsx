import {useAppSelector} from '@/app/hooks/redux'
import {FC, useEffect, useState} from 'react'
import styles from './PhoneProperties.module.scss'
import MemoryInput from './memoryInput/MemoryInput'
import ColorInput from './colorInput/ColorInput'
import {useRouter} from "next/router";

const PhoneProperties: FC = () => {
    const {push} = useRouter()

    const Phone = useAppSelector(state => state.phoneSliceReducer)
    const [changed, setChanged] = useState<string>(String(Phone.id))
    useEffect(() => {
        push(`/goods/phones/phone?page=${changed}`)
    }, [changed])

    return <div className={styles.container}>
        <h2>{Phone.company} {Phone.model} ({Phone.color.colorEn}/{Phone.memory.memory[0] === '1024' ? <>1TB</> : <>{Phone.memory.memory[0]}GB</>})</h2>
        <p>Объем памяти</p>
        <MemoryInput changed={setChanged} memory={Phone.memory}/>
        <p>Цвет</p>
        <ColorInput changed={setChanged} defaultColor={Phone.color.colorEn} color={Phone.possibleColors}/>

    </div>
}

export default PhoneProperties