export interface Major {
    majorName: string,
    academyId: number
}

export interface User {
    commonAchievementList: Set<number>,
    specialAchievementList: Set<number>,
    restartNum: number
}

export interface Life {
    names:Array<string>,
    props:Array<number>,
    eventList: Set<number>,
    achievementList: Set<number>,
    getAchievments: number,
    pictures: Array<Picture>
}
export interface Picture {
    url: string,
    content: string,
    time: string,
}

export interface GameSource{
    commonAchievementsNum: number,
    specialAchievementsNum: number
}