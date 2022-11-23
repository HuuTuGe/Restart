<template>
    <div class="bigc">
    <button class="reduce" @click="reducedata" :disabled="dis">-</button>
    <div class="number">{{count}}</div>
    <button class="add" @click="adddata" :disabled="dis">+</button>
    </div>
   
</template>

<script lang="js">
import Vue from 'vue';
export default {
name: 'add_reduce',
props:{
      count:Number,
      dis:Boolean
},
methods:{
     reducedata(){
        this.$emit("reducechangedata")
     },
     adddata(){
        this.$emit("addchangedata")
     }
}

  
}


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