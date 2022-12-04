import {defineStore} from 'pinia'
import {Prop, Major, User, Life} from '@/state/stateInterface'

export const usePropStore = defineStore('prop', {
    state: () => {
        return {
            props: [0,0,0,0,0,0] // 智力，体质，魅力，财富，运气，心情
        } as Prop
    },
    getters: {

    },
    actions: {
        apdateProps(props: Array<number>):void {
            /**
             * 控制属性的增加或减少
             * @param props - 属性的改变
             */
             for(let i=0; i<6; i++){
                this.props[i] += props[i]
             }
        },
        increment(index:number, num:number):void {
            /**
             * 控制指定属性的增加
             * @param index - 更改props的第几位属性
             * @param num - 更改的幅度
             */
            this.props[index] += num
        },
        decrement(index:number, num:number):void {
            /**
             * 控制指定属性的减少
             * @prama index - 更改props的第几位属性
             * @prama num - 更改的幅度
             */
            this.props[index] -= num
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
             this.props[0] = a1;
             this.props[1] = a2;
             this.props[2] = a3;
             this.props[3] = a4;
             this.props[4] = a5;
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

export const useLifeStore = defineStore('', {
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