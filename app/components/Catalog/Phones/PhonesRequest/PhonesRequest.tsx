import {FC, useEffect, useState} from 'react'
import styles from './PhonesRequest.module.scss'
import {phoneService} from '@/app/services/PhoneService'
import {ICompany, IData} from './Interfaces'
import {useRouter} from 'next/router'


const PhonesRequest: FC = () => {
    const [data, setData] = useState<IData>({})
    useEffect(() => {
        const fetching = async () => {
            const res = await phoneService.getUniqueModels()
            return setData(res)
        }
        fetching()
    }, [])

    const {push} = useRouter()
    const handleClick = (id: string) => {
        push(`/goods/phones/phone?page=${id}`)
    }

    return <div className={styles.container}>
        <h3>Все телефоны</h3>
        <div>
            {Object.keys(data).map((key: any) => (
                <div className={styles.List} key={key}>
                    <h3>{key}</h3>
                    <ul>
                        {data[key].map((obj: ICompany) => (
                            <li onClick={() => handleClick(obj.id)} key={obj.id}><span
                                className={obj.Isnew ? styles.new : styles.old}>NEW </span>{obj.model}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div>
            {Object.keys(data).map((key: any) => (
                <div className={styles.List} key={key}>
                    <h3>{key}</h3>
                    <ul>
                        {data[key].map((obj: ICompany) => (
                            <li onClick={() => handleClick(obj.id)} key={obj.id}><span
                                className={obj.Isnew ? styles.new : styles.old}>NEW </span>{obj.model}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div>
            {Object.keys(data).map((key: any) => (
                <div className={styles.List} key={key}>
                    <h3>{key}</h3>
                    <ul>
                        {data[key].map((obj: ICompany) => (
                            <li onClick={() => handleClick(obj.id)} key={obj.id}><span
                                className={obj.Isnew ? styles.new : styles.old}>NEW </span>{obj.model}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div>
            {Object.keys(data).map((key: any) => (
                <div className={styles.List} key={key}>
                    <h3>{key}</h3>
                    <ul>
                        {data[key].map((obj: ICompany) => (
                            <li onClick={() => handleClick(obj.id)} key={obj.id}><span
                                className={obj.Isnew ? styles.new : styles.old}>NEW </span>{obj.model}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
}

export default PhonesRequest