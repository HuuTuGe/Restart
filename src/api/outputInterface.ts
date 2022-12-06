export interface UserData{
    
}

export interface MajorData{
    academyId: number,
    majorName: string
}

export interface TalentData{
    name: string,
    rarity: string
    propChanges: Array<number>   
}

export interface EventData{
    id: number,
    content: string,
    propertyChange: Array<number> 
}

export interface AchievementData{
    id: number,
    content: string,
    rarity: string
}

export interface LifeData{
    haveAchievement: boolean,
    achievement: AchievementData,
    lifeEvent: EventData
}
