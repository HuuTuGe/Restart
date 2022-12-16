import { AchievementType } from "./inputInterface"

export interface UserData{
    commonAchievementList: Array<number>, // 用户已达成的普通成就
    specialAchievementList: Array<number>, // 用户已达成的特殊成就
    restartNum: number
}

export interface MajorData{
    academyId: number,
    majorName: string
}

export interface PictureData{
    content: string,
    url: string
}
export interface TalentData{
    name: string,
    rarity: string
    propChanges: Array<number>   
}

export interface EventData{
    id: number,
    content: string,
    propertyChange: Array<number>,
    gameOver: boolean
}

export interface AchievementData{
    id: number,
    name: string,
    rarity: string,
    type: AchievementType
}

export interface LifeData{
    haveAchievement: boolean,
    achievement?: AchievementData,
    lifeEvent: EventData
}

export interface TokenData{
    token:string
}

export interface ChoiceData{
    propertyChange: Array<number>,
    content: string
}

export interface SourceData{
    commonAchievementsNum: number|undefined,
    specialAchievementsNum: number|undefined
}