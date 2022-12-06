<template>
    <div class="bigc">
    <button class="reduce" @click="reduce" >-</button>
    <div class="number">{{count}}</div>
    <button class="add" @click="add" >+</button>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {usePropStore} from '@/state/store'
export default defineComponent({
name: 'add_reduce',
props:{
      count:Number,
      id:Number,
      update:{type:Boolean, default:true}
},
setup() {
    const propStore = usePropStore()
    return{propStore}
},
methods:{
     reduce(){
        if(this.update){
            this.propStore.decrement(this.id as number,1)
        }
     },
     add(){
        if(this.update){
            this.propStore.increment(this.id as number,1)
        }
     },
}

  
})


</script  >
<style scoped>
.bigc{
    width:167px;
    overflow: hidden;
    background-color:rgba(0,0,0,0);
}
.reduce{
    float:left;
    width:20px;
    height:16px;
    border-radius: 2px;
    border-color: rgb(28, 26, 26) ;
    border-style: solid;
    background-color:white;
    text-align: center;
    line-height: 12px;
}
.number{
    float: left;
    width:117px;
    height:18px;
    text-align: center;
    background-color: rgba(0,0,0,0);
}
.add{
    float:right;
    width:20px;
    height:16px;
    border-radius: 2px;
    border-color: rgb(36, 35, 35) ;
    border-style: solid;
    background-color:white;
    text-align: center;
    line-height: 12px;

}

</style>