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
import Vue from 'vue';
import {storeToRefs} from 'pinia'
import {useLifeStore, useMajorStore} from "@/state/store"
import {api, catchError} from '@/api/api'
import {ChoiceData} from '@/api/outputInterface'

interface Data {
  choices:Array<ChoiceData>,
  stime:any
}

export default Vue.extend({
  name:'choise_ho',
  data(){
    return{
      choices: [],
      stime:1000
  } as Data
  },
  // created() {//这里是定时器
  //   setInterval(this.stime, 10);
  // },
  mounted:function() {
    // this.$nextTick(() => {
    //   setInterval(this.pro, 5000);
    // });
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
      console.log(123)
    },
    change_pro(props:Array<number>){
      this.propStore.apdateProps(props),
      (this.$parent as Vue & {DayShow: boolean}).DayShow=false;
    },
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
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.in:hover,
.in:focus,
.in:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>