export interface TPhone {
    _id:string
    id: number
    company: string
    price: Price
    model: string
    color: Color
    possibleColors: string[]
    article: number
    Isnew: boolean
    equipment: string[]
    display: Display
    cpu: Cpu
    camera: Camera
    memory: Memory
    system: System
    simCard: SimCard
    casE: CasE
    other: Other
    inStock: number
    buyedCount: number
    accessories?: any[]
  }

  export interface TShortPhone {
    id: number
    company:string
    price: Price
    color: Color
    memory: Memory
    _id: string
    model: string,
  }

  
  export interface Price {
    price: number
    discountPrice?: number
  }
  
  export interface Color {
    colorEn: string
    colorRu: string
    img: string[]
  }
  
export interface Display {
    typeDisplay: string
    screen: string
    screenSizePixels: string
    PPI: string
    colors: string
    sensorDisplay: string
    multiTouch: string
    screenProtect: string
    displayFeatures: string
    oleophobicCoating: string
  }
  
export interface Cpu {
    cpuPhone: string
    description: string
  }
  
export interface Camera {
    cameraPhone: string
    opticalZoom: string
    stabilizationImg: string
    autoFocus: string
    light: string
    record: string
    recordQuality: string
    recordFps: number
    videoStabilization: string
    frontCamera: string
  }
  
export interface Memory {
    memory: string[]
    possibleMemory: string[]
    ram: string
  }
  
export interface System {
    os: string
    navigation: string
  }
  
export interface SimCard {
    typeSimCard: string
    eSim: string
    numSim: number
  }
  
export interface CasE {
    typeOfCase: string
    height: number
    width: number
    depth: number
    weight: number
    caseMaterial: string
    waterProtection: string
    typeOfWaterProtection: string
  }
  
export interface Other {
    guarantee: string
    manufacturer: string
    factory: string
    [propsName:string]:any
  }