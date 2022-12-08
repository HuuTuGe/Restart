<template>
  <div class="app">
    <div class="header">
      <div class="head">
        <return_box from="/"></return_box>
        <div class="light"><img src="../assets/light.jpg" alt=""></div>
        <h1 class="term">{{it}}</h1>
        <div class="shu">
          <p class="head_p" style="color:white">属性值</p>
          <hr noshade="true" style="color:white;">
          <div class="tab">
            <table>
              <tr>
                <td ref="zhili">
                  智力：{{props[0]}}
                </td>
                <td ref="tizhi">
                  体质：{{props[1]}}
                </td>
              </tr>
              <tr>
                <td ref="meili">
                  魅力：{{props[2]}}
                </td>
                <td ref="caifu">
                  财富：{{props[3]}}
                </td>
              </tr>
              <tr>
                <td ref="yunqi">
                  运气：{{props[4]}}
                </td>
                <td ref="xinqing">
                  心情：{{props[5]}}
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  已收集成就：{{getAchievments}}
                </td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    </div>
      <div class="con" id="CON">
        <div id="con_in" v-for="lifeData in lifeDatas">
          <event_box :cDay="cDay" :lifeData="lifeData"></event_box>
          <ach_box :lifeData="lifeData" v-if="lifeData.haveAchievement"></ach_box>
        </div>
      </div>
      <button @click="(day(),iem(),p(),scrollToBottom())" class="bu" v-show="!DayShow">点击播放</button>
      <div class="end_game" v-show="IsShow">
        <router-link to="/Summary">
          <button class="life_con">人生报告</button>
        </router-link>
      </div>
      <div class="choise" v-show="(DayShow&&!IsShow)">
        <choise_ho></choise_ho>
      </div>
  </div>
</template>

<script lang="ts">
import return_box from '../components/return_box.vue'
import event_box from '../components/event_box.vue'
import ach_box from '../components/ach_box.vue'
import choise_ho from '../components/choise_ho.vue'
import { defineComponent } from "vue";
import {api, catchError} from '@/api/api'
import {LifeParam} from '@/api/inputInterface'
import {storeToRefs} from 'pinia'

import {useLifeStore, useMajorStore} from "@/state/store"
import { LifeData } from '@/api/outputInterface';

interface Play {
  counter: Array<object>;
  s: Array<object>;
  IsShow: boolean,
  DayShow: boolean,
  cDay: number,
  f:number,
  ef:number,
  it:string,
  item:number,
  stage:number,
  timeout: any,
  lifeDatas: Array<LifeData>,
  container:any
  // ach_is:Array<boolean>
}



export default defineComponent( {
  propr:['cDay','lifeDatas'],
  name: 'play',
  components: {
    return_box,
    event_box,
    ach_box,
    choise_ho,
  },
  setup() {
    const majorStore = useMajorStore();
    const lifeStore = useLifeStore();
    const {names,props,getAchievments} = storeToRefs(lifeStore)
    return {majorStore,lifeStore,names,props,getAchievments}
  },
  data() {
    return {
      counter:[],
      s:[],
      IsShow: false,
      DayShow: false,
      cDay: 18,
      f:1,//判断是否需要初始化
      ef:1,//判断结束
      item:1,
      it:'大一上',
      timeout: null,
      stage:1,
      lifeDatas:[],
      container:null
    } as Play
  },
  methods: {
    iem(){
      if(this.item==1){
        this.it="大一上"
      }else if(this.item==2){
        this.it="大一下"
      }else if(this.item==3){
        this.it="大二上"
      }else if(this.item==4){
        this.it="大二下"
      }else if(this.item==5){
        this.it="大三上"
      }else if(this.item==6){
        this.it="大三下"
      }else if(this.item==7){
        this.it="大四上"
      }else if(this.item==8){
        this.it="大四下"
      }
    },
    day(){
      if(this.cDay%9==1){
        this.DayShow = true
        this.item++
        this.stage++
        if(this.it=='大四下'){
          this.IsShow=true
        }
      }
      this.cDay-=1
      if(this.cDay==0){
        this.DayShow = true
        this.cDay=18
        this.stage=this.stage+3
        
      }
     },
    p(){
      let param:LifeParam = {
        props: this.lifeStore.props,
        eventList: this.lifeStore.eventList,
        achievementList: this.lifeStore.achievementList,
        academyId: this.majorStore.academyId,
      }
      api.getEventData(param).then(data => {
        this.lifeDatas.push(data)
        this.lifeStore.apdateProps(data.lifeEvent.propertyChange)
        if(data.haveAchievement){
          this.lifeStore.addAchievement(data.achievement?.id as number)
        }
        if(this.ef==1&&!this.IsShow){
          this.IsShow=data.lifeEvent.gameOver;//需要修改
          if(this.IsShow==true){
            this.ef=0
          }
        }

      }).catch(error => catchError(error))
      if(this.timeout){
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        console.log('0000')
      },500)
    },
    scrollToBottom: function () {
      this.$nextTick(() => {
	      this.container = this.$el.querySelector(".con");
        this.container.scrollTop = this.container.scrollHeight;
      })
    }
      
  },
  
mounted () {
   this.scrollToBottom();
},
//每次页面渲染完之后滚动条在最底部
updated:function(){
   this.scrollToBottom();
}
})
</script>

<style scoped>
/* 注意scoped*/
.app {
  width: 390px;
  height: 722px;
  border: 1px solid #000;
  text-align: center;
  margin: 0 auto;
  background-color: #f7f7f7;
}
.bu{
  position: relative;
  width: 100px;
  height: 20px;
  top:-30px;
  display: inline-block;
}
.choise{
  width: 390px;
  height: 533px;
  background-color: white;
  position: relative;
  top:-583px;
}

#outer {
  position: relative;
  width: 380px;
  height: 400px;
}

div {
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
}

.header {
  position: relative;
  background-color: white;
  height: 312px;
}

.head {
  background-color: #BAE7FF;
  height: 250px;
  width: 390px;
  position: relative;
}
.life_con{
  width: 250px;
  height: 80px;
  font-size: 52px;
  background-color: #BAE7FF;
  position: relative;
  top:100px;
  left: px;
}

.con {
  position: relative;
  background-color: white;
  top: -10px;
  width: 390px;
  height: 420px;
  overflow: hidden;
  overflow-y: auto;
}

.con::-webkit-scrollbar {
  background-color: #f8f8f800;
}

.con::-webkit-scrollbar-thumb {
  background-color: #dddddd;
  border-radius: 100px;
}

.con::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}

.con::-webkit-scrollbar-corner {
  background-color: rgba(255, 255, 255, 0);
}

.con::-webkit-scrollbar {
  width: 10px;
  transition: all 2s;
}

.end_game{
  position: absolute;
  background-color:rgba(0,0,0,0); /*rgba(0,0,0,0)*/
  top: 330px;
  width: 390px;
  height: 402px;
}
.back {
  display: inline-block;
  background-color: #000;
  height: 37px;
  width: 46px;
  margin: 0%;
  position: relative;
  left: -230px;
}

.light {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  margin: 0%;
  padding: 0%;
  width: 145px;
  height: 145px;
  position: absolute;
  right: 25px;
  top: 17px;
  transform: rotate(15deg);
  /* -o-transform: rotate(45deg);
  -moz-transform: rotate(45deg); */
}

.shu {
  position: relative;
  top: px;
  left: px;
  background-color: #0050B3;
  display: inline-block;
  text-align: center;
  height: 190px;
  width: 345px;
}


.head_p {
  width: 58px;
  height: 172;
  font-size: 36px;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -56px;
  left: -120px;
}

.ach_p {
  display: inline-block;
  margin: 0;
  padding-left: 10px;
  color: white;
  font-size: 20px;
  position: relative;
  top: -45%;
  left: 2%;
}

.tab {
  position: relative;
  display: inline-block;
  top: -100px;
  height: 240px;
  width: 340px;
}

table {
  text-align: left;
  display: inline;
  color: white;
  display: inline-block;
  font-size: 20px;
  margin: 0px;
  position: relative;
  top: -100px;
  left: 30px;
  border-collapse: separate;
}

td {
  padding-bottom: 10px;
  padding-left: 30px;
  width: 100px;
}

h1 {
  /* display: inline-block; */
  font-size: 48px;
  float: left;
  margin: 0;
  padding-left: 20px;
}

hr {
  display: inline-block;
  width: 4px;
  height: 150px;
  margin: 0;
  position: relative;
  top: 10%;
  left: -35%;
  background-color: white;
}

img {
  position: absolute;
  width: 145px;
  height: 195px;
  left: -15px;
  top: 5px;
  transform: rotate(deg);
}
</style>