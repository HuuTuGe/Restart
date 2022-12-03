import {defineStore} from 'pinia'

interface Prop {
    props: Array<number>
}
export const usePropStore = defineStore('prop', {
    state: () => {
        return {
            props: [0,0,0,0,0,0] // 智力，体质，魅力，财富，运气，心情
        } as Prop
    },
    getters: {

    },
    actions: {
        increment(index:number, num:number):void {
            /**
             * 
             */
            this.props[index] += num
        },
        randomProps(): void {
            /**
             * 
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
            majorName: ""
        }
    },
    getters: {

    },
    actions: {

    }
})