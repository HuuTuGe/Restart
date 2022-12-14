
export enum AchievementType {
    /**
     * @usage - Achievement.common(返回普通成就)
     */
    common= "普通成就",
    special= "特殊成就",
    null = ""
}

export interface UserParam {
    commonAchievementList: Set<number>,
    specialAchievementList: Set<number>,
    restartNum: number
}

export interface MajorParam{
    majorType: string // 学院类型
}

export interface LifeParam{
    eventList: Set<number>, // // 本回合已达成的事件的id
    achievementList: Set<number>, // 本回合已达成的成就的id
    academyId: number,
    props: Array<number>
}

export interface ChoicesParam{
    
}

export interface Headers{
    lifestartToken: string|null
}

export interface PicturesParam{
    eventsId?: Array<number>,
    achievementsId?: Array<number>
}

export interface AchievementsParam{
    ids: Set<number>, // 本局游戏获得的id,可以为[]
    page: number,
    limit:number,
    type: AchievementType, // 普通成就或特殊成就
}

export interface PictureParam{
    eventId?: number,
    achievementId?: number
}
