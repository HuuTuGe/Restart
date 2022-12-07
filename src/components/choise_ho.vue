<template>
  <div class="out">
    <div class="im"><img src="../assets/letter.png" alt=""></div>
    <div class="head">叮咚，成绩短信还是发送到了你的邮箱，你还是跟过去一样准备先定好放假的计划你选择：</div>
    <div class="in" v-for="choice in choices">
      <button id="fir" @click="change_pro(choice.propertyChange)">{{choice.content}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import {storeToRefs} from 'pinia'
import {useLifeStore, useMajorStore} from "@/state/store"
import {api, catchError} from '@/api/api'
import {ChoiceData} from '@/api/outputInterface'
import { ChoicesParam } from '@/api/inputInterface';


interface Data {
  choices:Array<ChoiceData>
}

export default Vue.extend({
  name:'choise_ho',
  data(){
    return{
      choices: []
    // con_1:'',
    // con_2:'',
    // con_3:'',
    // con_4:'',
    // con_5:'',
    // con_6:'',
    // con_7:'',
  } as Data
  },
  mounted:function() {
      this.pro();
  },
  setup() {
    const majorStore = useMajorStore()
    const propStore = useLifeStore()
    const {props,names} = storeToRefs(propStore)
    return{majorStore,propStore,props,names}
  },
  methods:{
      pro(){
        api.getChoicesData().then(data => this.choices = data)
      },
      change_pro(props:Array<number>){
        this.propStore.apdateProps(props),
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
      },
      // Get_sec(){
      //   (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
      //   axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
      //     this.propStore.apdateProps(response.data[1].propertyChange)
      //     })
      // },
      // Get_thi(){
      //   (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
      //   axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
      //     this.propStore.apdateProps(response.data[2].propertyChange)
      //   })
      // },
      // Get_fur(){
      //   (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
      //   axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
      //     this.propStore.apdateProps(response.data[3].propertyChange)
      //   })
      // },
      // Get_fiv(){
      //   (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
      //   axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
      //     this.propStore.apdateProps(response.data[4].propertyChange)  
      //   })
      // },
      // Get_six(){
      //   (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
      //   axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
      //     this.propStore.apdateProps(response.data[5].propertyChange)
      //   })
      // },
      // Get_sev(){
      //   (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
      //   axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
      //     this.propStore.apdateProps(response.data[6].propertyChange)
      //   })
      // }
  }
})
</script>


<style scoped>
div{
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
}
.out{
  width: 380px;
  height: 533px;
  position: relative;
}
.im{
  width: 46px;
  height: 46px;
  position: relative;
  left:13px;
  top:5px
}
.head{
  position: relative;
  width: 310px;
  height: 80px;
  font-size: 16px;
  top:-40px;
  left: 55px;
}
button{
  border-radius: 4px;
  width: 284px;
  height: 54px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(16, 16, 16, 1);
  border: 1px solid rgba(187, 187, 187, 1);
  position: relative;
  margin-bottom: 10px;
  text-align: center;
}
.in{
  position: relative;
  top:-40px;
}
</style>