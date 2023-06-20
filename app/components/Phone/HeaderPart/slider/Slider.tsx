import {FC, useEffect, useState} from 'react'
import styles from './slider.module.scss'
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'

interface Props {
    img: string[];
}

const Slider: FC<Props> = ({img}) => {

    const [checkedImg, setCheckedImg] = useState(img[0])
    const [checkedId, setCheckedId] = useState(0)
    useEffect(() => {
        setCheckedImg(img[0]);
    }, [img]);
    const handleClickImg = (i: number) => {
        setCheckedImg(img[i])
        setCheckedId(i)
    }
    const handleLeftArrow = () => {
        if (checkedId === 0) {
            setCheckedImg(img[img.length - 1])
            setCheckedId(img.length - 1)
        } else {
            setCheckedImg(img[checkedId - 1])
            setCheckedId(prev => prev - 1)
        }
    }

    const handleRightArrow = () => {
        if (checkedId === img.length - 1) {
            setCheckedImg(img[0])
            setCheckedId(0)
        } else {
            setCheckedImg(img[checkedId + 1])
            setCheckedId(prev => prev + 1)
        }
    }

    return <div className={styles.sliderContainer}>

        <img className={styles.checkedImg} src={checkedImg} alt=""/>
        <div className={styles.imgVariants}>
            <BsArrowLeftCircle onClick={handleLeftArrow} style={{marginRight: '10px'}}/>
            {img.map((value, i) => {
                return <img onClick={() => handleClickImg(i)} key={i} src={value}/>
            })}
            <BsArrowRightCircle onClick={handleRightArrow} style={{marginLeft: '10px'}}/>

        </div>
    </div>
}

export default Slider