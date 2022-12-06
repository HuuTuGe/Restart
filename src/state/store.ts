import {defineStore, mapActions} from 'pinia'
import {Prop, Major, User, Life} from '@/state/stateInterface'

export const usePropStore = defineStore('prop', {
    state: () => {
        return {
            names: ["智力","体质","魅力","财富","运气","心情"],
            props: [0,0,0,0,0,0] // 智力，体质，魅力，财富，运气，心情
        } as Prop
    },
    getters: {

    },
    actions: {
        getPropsSum(): number {
            let sum:number = 0
            this.props.some(item => {sum+=item})
            return sum
        },
        apdateProps(props: Array<number>):void {
            /**
             * 控制属性的增加或减少
             * @param props - 属性的改变
             */
             for(let i=0; i<6; i++){
                props[i] += this.props[i]
             }
             this.props = props
        },
        increment(index:number, num:number):void {
            /**
             * 控制指定属性的增加,总属性值不得超过25
             * @param index - 更改props的第几位属性
             * @param num - 更改的幅度
             */
            if(this.getPropsSum() >= 25){
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
            if(this.getPropsSum() <= 0) {
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
        }
    }
})

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
            userId: -1,
            academyList: []
        } as User
    },
    getters: {

    },
    actions: {
        setUser(id:number, academyList: Array<number>){
            this.userId = id;
            this.academyList = academyList;
        }
    }
})

export const useLifeStore = defineStore('life', {
    state: () => {
        return {
            lifeId: -1,
            eventList: [],
            achievementList: []
        } as Life
    },
    getters: {

    },
    actions: {
        initLife(id:number, eventList?:Array<number>, achievementList?:Array<number>){
            /**
             * 初始化游戏状态
             * @param id - 对局id
             * @param eventList - 本对局触发的事件
             * @param academyList - 本对局触发的成就
             */
            this.lifeId = id;
            if(eventList){
                this.eventList = eventList
            }
            if(achievementList){
                this.achievementList = achievementList
            }
        },
        addEvent(eventId:number) {
            /**
             * 添加触发的事件
             * @param eventId - 事件id
             */
            this.eventList.push(eventId)
        },
        addAchievement(academyId:number) {
            /**
             * 添加触发的成就
             * @param academyId - 成就id
             */
            this.achievementList.push(academyId)
        }
    }
})

export const useAchievement = defineStore('achievement', {
    state: () => {
        return {

        }
    },
    getters: {

    },
    actions: {

    }
})