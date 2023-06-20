import {FC, useState} from "react";
import styles from "./FilterWindow.module.scss";
import CheckBoxInputColors from "./inputs/CheckBoxInputColors";
import CheckBoxInputMemory from "./inputs/CheckBoxInputMemory";
import PriceInput from "./inputs/PriceInput";
import {useAppSelector} from "@/app/hooks/redux";
import {phoneService} from "@/app/services/PhoneService";
import {useActions} from "@/app/hooks/useActions";
import {useRouter} from "next/router";

const FilterWindow: FC = () => {

    const {maxPrice, minPrice, uniqueMemory, uniqueColorsObj,} = useAppSelector(state => state.phonesDataReducer)
    const {checkedColors, checkedMemory, LPRICERedux, HPRICERedux} = useAppSelector(state => state.BtnStateReducer)
    const {setCheckedColors, setCheckedMemory, setData, setIsFiltered} = useActions()

    const {query, push} = useRouter()

    const priceObj = {
        minPrice: minPrice,
        maxPrice: maxPrice,
    };

    const [colors, setColors] = useState<string[]>([]);
    const [memory, setMemory] = useState<string[]>([]);
    const [lPrice, setLPrice] = useState<number | string>('');
    const [hPrice, setHPrice] = useState<number | string>('');
    const [reset, setReset] = useState<boolean>(false)


    const handleResetMemoryChecked = (): void => {
        const nodeList: NodeListOf<HTMLElement> =
            document.getElementsByName("sortMemory");
        const values: NodeListOf<HTMLInputElement> =
            nodeList as NodeListOf<HTMLInputElement>;
        for (let i = 0; i < values.length; i++) {
            if (values[i].checked)
                values[i].checked = false
        }
        // console.log(memory);
    };
    const handleRemoveCheckedMemory = (extra: string): void => {
        const sortedArr = memory.filter((i) => i !== extra);
        setMemory(sortedArr);
    };

    const defaultColorsResponse = uniqueColorsObj.map(i => i.colorEn)
    const defaultMemoryResponse = uniqueMemory.toString()
    const GetParamsLink = () => {

        // handleCheckedColors();
        // console.log(colors.length);

        // if (checkedColors.length === 0) {
        //     setCheckedColors(defaultColorsResponse)
        // }
        //
        // if (checkedMemory.length === 0) {
        //     setCheckedMemory(defaultMemoryResponse.split(','))
        // }
        // console.log(checkedColors);
        // console.log(checkedMemory);
        //убрать хардкод цен
        return [checkedColors.join(','), checkedMemory.join(','), lPrice, hPrice]
//удалять весь редакс после запроса
        // handleCheckedMemory(
        //   // phoneService.getSortedPhones()
        // );

    };
    const handleTest = async () => {
        const params: any = GetParamsLink()
        const data = await phoneService.getSortedPhones(params[0], params[1], params[2] === '' ? 0 : params[2], params[3] === 0 || params[3] === '' ? maxPrice : params[3])
        setData(data)
        setIsFiltered(true)
        push(`/goods/phones?page=1&color=${checkedColors.join(',')}&memory=${checkedMemory.join(',')}&lprice=${LPRICERedux}&hprice=${HPRICERedux}`)

    }


    const handleReset = async () => {
        console.log(query.page)
        const data = await phoneService.getResetPhones()
        handleResetMemoryChecked()
        setCheckedMemory([])
        setCheckedColors([])
        setLPrice('')
        setHPrice('')

        setData(data)
        setIsFiltered(false)


        setReset(prevState => !prevState)
        push(`/goods/phones?page=1&color=&memory=&lprice=${minPrice}&hprice=${maxPrice}`)

    }


    return (
        <div className={styles.container}>
            <h2 style={{marginBottom: "26px"}}>
                Цена <u>BYN</u>
            </h2>
            <PriceInput
                reset={reset}
                lPriceValue={setLPrice}
                hPriceValue={setHPrice}
                priceObj={priceObj}
                lPriceData={lPrice}
                hPriceData={hPrice}
            />
            <h2 style={{marginTop: "37px"}}>Память</h2>
            <div className={styles.inputBlock}>
                {uniqueMemory?.map((i, ii) => {
                    return (
                        <CheckBoxInputMemory
                            key={ii}
                            memory={i}
                            reset={reset}
                        />
                    );
                })}
            </div>
            <h2 style={{marginTop: "43px"}}>Цвет корпуса</h2>
            <div className={styles.inputBlock}>
                {uniqueColorsObj?.map((i, ii) => {
                    return (
                        <CheckBoxInputColors
                            // remove={handleRemoveCheckedColor}
                            key={ii}
                            colorEn={i.colorEn}
                            colorRu={i.colorRu}
                            reset={reset}
                        />
                    );
                })}
            </div>

            <button style={{margin: "25px 0 13px 0"}} onClick={handleTest}>
                ПРИМЕНИТЬ
            </button>
            <button onClick={handleReset}>СБРОСИТЬ ФИЛЬТР</button>
        </div>
    );
};

//сделать запросы : 1)кнопка запрос с фильтрами на бэк и перерисовка redux
//2) сделать в redux поле был ли запрос с фильтрами если нет то просто делать clear формы, если да то надо делать дефолтный запрос и сетать в Redux

export default FilterWindow;
