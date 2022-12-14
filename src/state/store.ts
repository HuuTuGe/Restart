import {defineStore} from 'pinia'
import {Major, User, Life, GameSource, Picture} from '@/state/stateInterface'
import { AchievementData, UserData } from '@/api/outputInterface'

export const useMajorStore = defineStore('major',{
    state: () => {
        return {
            majorName: "",
            academyId: -1,
        } as Major
    },
    getters: {

    },
    actions: {
        setMajor(name: string, id: number) {
            this.majorName = name
            this.academyId = id
        }
    }
})

export const useUserStore = defineStore('user',{
    state: () => {
        return {
            commonAchievementList: new Set(),
            specialAchievementList: new Set(),
            restartNum: 0 // 用户重开次数
        } as User
    },
    getters: {
        userCommonAchievementsNum(state): number {
            // let sum:number = 0
            // state.commonAchievementList.forEach(() => sum++)
            return this.commonAchievementList.size
        },
        userSpecialAchievementsNum(state): number{
            // let sum:number = 0
            // state.specialAchievementList.forEach(() => sum++)
            return this.specialAchievementList.size
        },
        userData(state): User{
            return state
        }
    },
    actions: {
        setUser(data: UserData){
            this.commonAchievementList = new Set(data.commonAchievementList)
            this.specialAchievementList = new Set(data.specialAchievementList)
            this.restartNum = data.restartNum
        },
        addAchievement(data: AchievementData) {
            /**
             * 添加用户新获得的成就
             * @param - data 从response中获得的成就数据
             */
            if(data.type == "普通成就" ) {
                this.commonAchievementList.add(data.id) 
            }
            else if(data.type=="特殊成就"){
                this.specialAchievementList.add(data.id)
            }
            else{
                console.log("type error")
            }
        }
    }
})

export const useLifeStore = defineStore('life', {
    state: () => {
        return {
            names: ["智力","体质","魅力","财富","运气","心情"],
            props:[0,0,0,0,0,0],
            eventList: new Set(), // 事件id的list
            achievementList: new Set(), // 成就id的list
            getAchievments: 0, // 本回合已获得的成就的计数
            pictures: []
        } as Life
    },
    getters: {
        propsSum(): number {
            let sum:number = 0
            this.props.some(item => {sum+=item})
            return sum
        }
    },
    actions: {
        init() {
            this.props = [0,0,0,0,0,0]
            this.eventList = new Set()
            this.achievementList = new Set()
            this.getAchievments = 0
        },
        addEvent(eventId:number) {
            /**
             * 添加触发的事件
             * @param eventId - 事件id
             */
            this.eventList.add(eventId)
            
        },
        addAchievement(achievementId:number) {
            /**
             * 添加触发的成就
             * @param academyId - 成就id
             */
                this.achievementList.add(achievementId)
                this.getAchievments++
        },
        
        apdateProps(props: Array<number>):void {
            /**
             * 控制整体属性的增加或减少
             * @param props - 属性的改变
             */
            let temp=props
             for(let i=0; i<6; i++){
                temp[i] += this.props[i]
             }
             this.props = temp
        },
        increment(index:number, num:number):void {
            /**
             * 控制指定属性的增加,总属性值不得超过25
             * @param index - 更改props的第几位属性
             * @param num - 更改的幅度
             */
            if(this.propsSum >= 25){
                return
            }
            let temp = this.props[index]
            if(++temp <= 25){
                this.props.splice(index,1,temp)
            }
            
        },
        decrement(index:number, num:number):void {
            /**
             * 控制指定属性的减少,总属性值不得低于0
             * @prama index - 更改props的第几位属性
             * @prama num - 更改的幅度
             */
            if(this.propsSum <= 0) {
                return
            }
            let temp = this.props[index]
            if(--temp >= 0){
                this.props.splice(index,1,temp)
            }
        },
        randomProps(): void {
            /**
             * 随机分配25点值给前五个天赋
             */
             let a1 = Math.floor(Math.random() * (25 - 0));
             let a2 = Math.floor(Math.random() * (25 - a1));
             let a3 = Math.floor(Math.random() * (25 - a1 - a2));
             let a4 = Math.floor(Math.random() * (25 - a1 - a2 - a3));
             let a5 = 25 - a1 - a2 - a3 - a4;
             this.props = [a1,a2,a3,a4,a5,0]
        },
        addPicture(picture: Picture): void{
            /**
             * 添加新的图片
             */
            this.pictures.push(picture)
        }
    }
})

export const useSourceStore = defineStore("gameSource",{
    state: () => {
        return {
            commonAchievementsNum: 0,
            specialAchievementsNum: 0
        } as GameSource
    },
    getters: {
        achievementsNum():number {
            let sum:number = 0
            if(this.commonAchievementsNum && this.specialAchievementsNum){
                sum = this.commonAchievementsNum + this.specialAchievementsNum
            }
            return sum
        }
    },
    actions: {
        init(gameSource: GameSource): void{
            this.commonAchievementsNum = gameSource.commonAchievementsNum,
            this.specialAchievementsNum = gameSource.specialAchievementsNum
        }
    }
})
