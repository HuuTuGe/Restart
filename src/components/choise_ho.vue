<template>
  <div class="out">
    <div class="im"><img src="../assets/letter.png" alt=""></div>
    <div class="head">叮咚，成绩短信还是发送到了你的邮箱，你还是跟过去一样准备先定好放假的计划你选择：</div>
    <div class="in">
      <button id="fir" @click="Get_fir">{{con_1}}</button>
      <button id="sec" @click="Get_sec">{{con_2}}</button>
      <button id="thi" @click="Get_thi">{{con_3}}</button>
      <button id="fur" @click="Get_fur">{{con_4}}</button>
      <button id="fiv" @click="Get_fiv">{{con_5}}</button>
      <button id="six" @click="Get_six">{{con_6}}</button>
      <button id="sev" @click="Get_sev">{{con_7}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import {storeToRefs} from 'pinia'
import {useLifeStore, useMajorStore} from "@/state/store"

export default Vue.extend({
  name:'choise_ho',
  data(){
    return{
    con_1:'',
    con_2:'',
    con_3:'',
    con_4:'',
    con_5:'',
    con_6:'',
    con_7:'',
  }
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
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response => {
          this.con_1=response.data[0].content
          this.con_2=response.data[1].content
          this.con_3=response.data[2].content
          this.con_4=response.data[3].content
          this.con_5=response.data[4].content
          this.con_6=response.data[5].content
          this.con_7=response.data[6].content
          // console.log(response)
        })
      },
      Get_fir(){
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
          this.propStore.apdateProps(response.data[0].propertyChange)
          // (this.$parent as Vue & {num1:number}).num1+=response.data[0].propertyChange[0]
          // (this.$parent as Vue & {num2:number}).num2+=response.data[0].propertyChange[1]
          // (this.$parent as Vue & {num3:number}).num3+=response.data[0].propertyChange[2]
          // (this.$parent as Vue & {num4:number}).num4+=response.data[0].propertyChange[3]
          // (this.$parent as Vue & {num5:number}).num5+=response.data[0].propertyChange[4]
          // (this.$parent as Vue & {num6:number}).num6+=response.data[0].propertyChange[5]
        })
        // this.num1+=response.data[2].propertyChange
        // this.num2+=response.data[2].propertyChange
        // this.num3+=response.data[2].propertyChange
        // this.num4+=response.data[2].propertyChange
        // this.num5+=response.data[2].propertyChange
        // this.num6+=response.data[2].propertyChange
        
      },
      Get_sec(){
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
          this.propStore.apdateProps(response.data[1].propertyChange)
          })
      },
      Get_thi(){
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
          this.propStore.apdateProps(response.data[2].propertyChange)
        })
      },
      Get_fur(){
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
          this.propStore.apdateProps(response.data[3].propertyChange)
        })
      },
      Get_fiv(){
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
          this.propStore.apdateProps(response.data[4].propertyChange)  
        })
      },
      Get_six(){
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
          this.propStore.apdateProps(response.data[5].propertyChange)
        })
      },
      Get_sev(){
        (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
        axios.get('https://mock.apifox.cn/m1/1984536-0-default/choices').then(response =>{
          this.propStore.apdateProps(response.data[6].propertyChange)
        })
      }
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