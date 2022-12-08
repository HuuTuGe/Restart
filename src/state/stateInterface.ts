export interface Major {
    majorName: string,
    academyId: number
}

export interface User {
    commonAchievementList: Array<number>,
    specialAchievementList: Array<number>,
    restartNum: number
}

export interface Life {
    names:Array<string>,
    props:Array<number>,
    eventList: Array<number>,
    achievementList: Array<number>,
    getAchievments: number
}

export interface GameSource{
    commonAchievementsNum: number|undefined,
    specialAchievementsNum: number|undefined
}