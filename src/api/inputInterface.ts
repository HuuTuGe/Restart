import axios from "axios"
export interface MajorParam{
    majorType: string // 学院类型
}

export interface LifeParam{
    eventList: Array<number>,
    achievementList: Array<number>,
    academyId: number,
    props: Array<number>
}

export interface ChoicesParam{
    
}

export interface PicturesParam{
    eventsId?: Array<number>,
    achievementsId?: Array<number>
}

export interface AchievementsParam{
    page: number,
    limit:number,
}

export interface PictureParam{
    eventId?: number,
    achievementId?: number
}

export interface UserParam{
    usrId: number 
}
