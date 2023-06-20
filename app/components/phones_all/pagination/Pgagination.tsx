import {FC} from 'react'
import {useAppSelector} from "@/app/hooks/redux";
import styles from './pagination.module.scss'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import {useRouter} from "next/router";

const Pagination: FC = () => {
    const {page, limit, total,} = useAppSelector(state => state.phonesDataReducer)
    const {checkedColors, checkedMemory, HPRICERedux, LPRICERedux} = useAppSelector(state => state.BtnStateReducer)
    const totalPages = Math.ceil(total / limit)
    const pagesUi = []
    for (let i = 1; i <= totalPages; i++) {
        pagesUi.push(i)
    }

    const {push} = useRouter()
    const handleLeftArrow = () => {
        push(`/goods/phones?page=${page - 1}&color=${checkedColors.join(',')}&memory=${checkedMemory.join(',')}&lprice=${LPRICERedux}&hprice=${HPRICERedux}`)
    }

    const handleRightArrow = () => {
        push(`/goods/phones?page=${page + 1}&color=${checkedColors.join(',')}&memory=${checkedMemory.join(',')}&lprice=${LPRICERedux}&hprice=${HPRICERedux}`)
    }

    const handleRedirect = (pageVal: string | number) => {
        if (pageVal !== page)
            push(`/goods/phones?page=${pageVal}&color=${checkedColors.join(',')}&memory=${checkedMemory.join(',')}&lprice=${LPRICERedux}&hprice=${HPRICERedux}`)
    }


    return <div className={styles.container}>
        <div className={styles.pagesContainer}>
            {page !== 1 && <BsArrowLeftCircle onClick={handleLeftArrow}/>}
            {pagesUi?.map((value, i) => {
                return <p onClick={() => handleRedirect(i + 1)}
                          className={page === i + 1 ? styles.pageChecked : styles.pageDefault} key={i}>{value}</p>
            })
            }
            {page !== totalPages && <BsArrowRightCircle onClick={handleRightArrow}/>}
        </div>
    </div>
}

export default Pagination