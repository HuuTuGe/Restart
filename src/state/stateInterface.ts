export interface Prop {
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
    lifeId: number,
    eventList: Array<number>,
    achievementList: Array<number>
}
