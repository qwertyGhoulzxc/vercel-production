import {FC, useEffect} from 'react'
import styles from '../FilterWindow.module.scss'
import {useActions} from "@/app/hooks/useActions";

interface IPriceInput {
    priceObj: {
        minPrice: number,
        maxPrice: number,
    }
    lPriceValue: (value: (((prevState: (number | string)) => (number | string)) | number | string)) => void
    hPriceValue: (value: (((prevState: (number | string)) => (number | string)) | number | string)) => void;
    reset: boolean;
    lPriceData: any
    hPriceData: any
}

const PriceInput: FC<IPriceInput> = ({priceObj, lPriceValue, hPriceValue, reset, lPriceData, hPriceData}) => {
    const {setLPRICERedux, setHPRICERedux} = useActions()

    useEffect(() => {
        lPriceValue('')
        setLPRICERedux(priceObj.minPrice)
        setHPRICERedux(priceObj.maxPrice)
        hPriceValue('')
    }, [reset])

    useEffect(() => {
        if (hPriceData === 0) {
            hPriceValue('')
            setHPRICERedux(priceObj.maxPrice)
        }
    }, [hPriceData])

    useEffect(() => {
        if (lPriceData === 0) {
            lPriceValue('')
            setLPRICERedux(priceObj.minPrice)
        }
    }, [lPriceData])

    const handleSetLValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        lPriceValue(Number(e.target.value))
        setLPRICERedux(Number(e.target.value))
    }
    const handleSetHValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        hPriceValue(Number(e.target.value))
        setHPRICERedux(Number(e.target.value))
    }

    return <div style={{justifyContent: 'space-between'}} className={styles.inputBlock}>
        <div className={styles.PriceInputBlock}>
            <p>От</p>
            <input type="number" value={lPriceData} onChange={handleSetLValue}
                   placeholder={priceObj?.minPrice?.toString()}/>
        </div>

        <div className={styles.PriceInputBlock}>
            <p>До</p>
            <input type="number" value={hPriceData} onChange={handleSetHValue}
                   placeholder={priceObj?.maxPrice?.toString()}/>
        </div>
    </div>
}

export default PriceInput