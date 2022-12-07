export interface Prop {
    names: Array<string>,
    props: Array<number>
}

export interface Major {
    majorName: string,
    academyId: number
}

export interface User {
    userId: number,
    academyList: Array<number>
}

export interface Life {
    names:Array<string>,
    props:Array<number>,
    eventList: Array<number>,
    achievementList: Array<number>,
    getAchievments: number
}