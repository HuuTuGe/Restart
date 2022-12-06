<template>
  <div class="app">
    <div class="header">
      <div class="head">
        <!-- <div class="back"></div> -->
        <return_box from="/"></return_box>
        <div class="light"><img src="../assets/light.jpg" alt=""></div>
        <h1 class="term">{{it}}</h1>
        <div class="shu">
          <p class="head_p" style="color:white">属性值</p>
          <hr noshade="true" style="color:white;">
          <div class="tab">
            <table>
              <tr>
                <!-- <td>智力：<span>6</span></td> -->
                <td ref="zhili">
                  智力：{{num1}}
                </td>
                <!-- <td>体质：<span>6</span></td> -->
                <td ref="tizhi">
                  体质：{{num2}}
                </td>
              </tr>
              <tr>
                <!-- <td>魅力：<span>6</span></td>
                  <td>财富：<span>6</span></td> -->
                <td ref="meili">
                  魅力：{{num3}}
                </td>
                <td ref="caifu">
                  财富：{{num4}}
                  <!-- <pro_item prop_name="财富" ref="caifu"></pro_item> -->
                </td>
              </tr>
              <tr>
                <!-- <td>运气：<span>6</span></td>
                  <td>心情：<span>6</span></td> -->
                <td ref="yunqi">
                  运气：{{num5}}
                  <!-- <pro_item prop_name="运气" ref="yunqi"></pro_item> -->
                </td>
                <td ref="xinqing">
                  心情：{{num6}}
                  <!-- <pro_item prop_name="心情" ref="xinqing"></pro_item> -->
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <!-- <pro_item prop_name="已收集成就" ref="chengjiu"></pro_item> -->
                  已收集成就：{{num7}}
                </td>
              </tr>
            </table>
            <!-- <span class="ach_p">已收集成就:</span>
              <span class="ach_p">6</span> -->
          </div>

        </div>
      </div>
    </div>
      <div class="con" id="CON">
        <div id="con_in" v-for="(d,index) in counter" :key="index" >
          <event_box :cDay="cDay"></event_box>
        </div>
      </div>
      <button @click="(print_div(),end_game(),day(),change(),iem(),p())" class="bu">点击播放</button>
      <div class="end_game" v-show="IsShow">
        <router-link to="/Smmary">
          <button class="life_con">人生报告</button>
        </router-link>
      </div>
      <div class="choise" v-show="DayShow">
        <choise_ho></choise_ho>
      </div>
  </div>
</template>

<script lang="ts">
import { provide } from 'vue';
import return_box from './return_box.vue'
import pro_item from './pro_item.vue'
import event_box from './event_box.vue'
import ach_box from './ach_box.vue'
import choise_ho from './choise_ho.vue'
import { defineComponent } from "vue";
import axios from 'axios'
import {usePropStore, useMajorStore} from "@/state/store"
interface Play {
  counter: Array<object>;
  s: Array<object>;
  IsShow: boolean,
  DayShow: boolean,
  cDay: number,
  num1:number,
  num2:number,
  num3:number,
  num4:number,
  num5:number,
  num6:number,
  num7:number,
  f:number,
  ef:number,
  it:string,
  item:number,
  stage:number,
  timeout: any,
}



export default defineComponent( {

  
  propr:['cDay'],
  name: 'play',
  components: {
    provide,
    return_box,
    pro_item,
    event_box,
    ach_box,
    choise_ho
  },
  setup() {
    const majorStore = useMajorStore();
    const propStore = usePropStore();
    return {majorStore,propStore}
  },
  data() {
    return {
      counter:[],
      s:[],
      IsShow: false,
      DayShow: false,
      cDay: 18,
      num1:0,
      num2:0,
      num3:0,
      num4:0,
      num5:0,
      num6:0,
      num7:0,
      f:1,//判断是否需要初始化
      ef:1,//判断结束
      item:1,
      it:'大一上',
      timeout: null,
      stage:1
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
      }
      this.cDay-=1
      if(this.cDay==0){
        this.DayShow = true
        this.cDay=18
        this.stage=this.stage+3
      }
    },
    pro(){
      if(this.f==1){
        this.num1=5
        this.num2=5
        this.num3=5
        this.num4=5
        this.num5=5
        this.num6=5
        this.f=0
        // usePropStore(this.num1,)
      }
      
    },
    p(){
      this.s[this.num1,this.num2,this.num3,this.num4,this.num5,this.num6]
      axios.get("https://mock.apifox.cn/m1/1984536-0-default/event",{
        params:{
          s:[this.num1,this.num2,this.num3,this.num4,this.num5,this.num6],
          stage:this.stage,
          // item:
        }
        // num1:this.num1,num2:this.num2,num3:this.num3,num4:this.num4,num5:this.num5,num6:this.num6,
        
        // stage:
      }).then(response =>{
        console.log(response)
      })
    },
    change(){
      // let _this=this;
      axios
      .get('https://mock.apifox.cn/m1/1984536-0-default/event')
      .then(response =>{
        // let a=response.data.vacation[0].property_change.split(" ")
        this.num1+=response.data.lifeEvent.propertyChange[0]
        this.num2+=response.data.lifeEvent.propertyChange[1]
        this.num3+=response.data.lifeEvent.propertyChange[2]
        this.num4+=response.data.lifeEvent.propertyChange[3]
        this.num5+=response.data.lifeEvent.propertyChange[4]
        this.num6+=response.data.lifeEvent.propertyChange[5]
        // console.log("a="+a[0])
        // console.log("a="+a[1])
        // console.log("a="+a[2])
        // console.log("a="+a[3])
        // console.log("a="+a[4])
        // console.log("a="+a[5])
        // this.num1+=response.data.vacation[0].property_change
        // console.log(response.data.vacation[0].property_change[2])
        this.propStore.increment(0,this.num1)
        if(response.data.ach_id!=0){
          this.num7+=1
        }
      });
    },
    print_div(){
      this.counter.push({});
    },
    end_game(){
      
      let _this=this;
      axios.
      get('https://mock.apifox.cn/m1/1984536-0-default/event')
      .then(response => {
        if(this.ef==1){
          _this.IsShow=response.data.gameover;//需要修改
          if(_this.IsShow==true){
            this.ef=0
          }
        }
       
      });
    },
  },
  mounted:function(){
    this.pro();
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
  top:-563px;
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
  display: inline-block;
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