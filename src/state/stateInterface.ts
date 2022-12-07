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
    eventList: Array<number>|undefined,
    achievementList: Array<number>|undefined,
    getAchievments: number
}