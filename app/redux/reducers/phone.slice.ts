import {TPhone} from "@/app/services/types.phoneService/TPhone"
import {createSlice} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"

interface IOmmit {
    _id: string

}

interface IInitialState extends Omit<TPhone, keyof IOmmit> {

}

const initialState: IInitialState = {
    id: 1,
    model: '',
    company: '',
    article: 1,
    camera: {
        cameraPhone: '',
        opticalZoom: '',
        stabilizationImg: '',
        autoFocus: '',
        light: '',
        record: '',
        recordQuality: '',
        recordFps: 1,
        videoStabilization: '',
        frontCamera: '',
    },
    buyedCount: 0,
    casE: {
        typeOfCase: '',
        height: 0,
        width: 0,
        depth: 0,
        weight: 0,
        caseMaterial: '',
        waterProtection: '',
        typeOfWaterProtection: '',
    },
    color: {
        colorEn: '',
        colorRu: '',
        img: []
    },
    display: {
        typeDisplay: '',
        screen: '',
        screenSizePixels: '',
        PPI: '',
        colors: '',
        sensorDisplay: '',
        multiTouch: '',
        screenProtect: '',
        displayFeatures: '',
        oleophobicCoating: '',
    },
    cpu: {
        cpuPhone: '',
        description: '',
    },
    equipment: [],
    inStock: 0,
    Isnew: true,
    memory: {
        memory: [],
        possibleMemory: [],
        ram: ''
    },
    possibleColors: [],
    other: {
        factory: '',
        guarantee: '',
        manufacturer: ','
    },
    price: {
        price: 0,
        discountPrice: 0,
    },
    simCard: {
        typeSimCard: '',
        eSim: '',
        numSim: 1
    },
    system: {
        navigation: '',
        os: '',
    },
    accessories: []

}

const phoneSlice = createSlice({
    name: 'phoneSlice',
    initialState,
    reducers: {
        setOnePhone: (state, action) => {
            return action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.phoneSliceReducer
            }
        }
    }
})

export const phoneSliceReducer = phoneSlice.reducer
export const phoneSliceActions = phoneSlice.actions