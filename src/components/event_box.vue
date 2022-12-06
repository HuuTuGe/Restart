<template>
  <div>
    <div class="event_box">
      <div class="term">{{mon}}</div>
      <hr class="d_line">
      <div class="con"><span class="con_in">{{Con_In}}</span></div>
    </div>
    <div id="ach" v-if="(ach_id == true)">
      <ach_box></ach_box>
    </div>
  </div>
  
</template>


<script lang="ts">
// import  play from './play.vue'
import Vue from 'vue';
import axios from 'axios'
import ach_box from './ach_box.vue'
import {defineEmits} from 'vue'

export default Vue.extend({
  
  name: 'event_box',
  props:['cDay'],
  data(){
    return{
      mon:'',
      Con_In:'',
      ach_id:false,
      cday:this.cDay
    }
  },
  components:{
    ach_box
  },
  mounted:function(){
    this.print_MON();
    this.print_In();
  },
  methods:{
      print_In(){
      let _this=this
      axios.get('https://mock.apifox.cn/m1/1984536-0-default/event')//url
      .then(response =>{
        _this.Con_In = response.data.lifeEvent.content;//事件id
        _this.ach_id = response.data.haveAchievement;
        
      })
    },
    print_MON(){
      if(this.cday==17){
        this.mon="九月上"
        console.log(this.cday)
      }else if(this.cday==16){
        this.mon="九月下"
        console.log(this.cday)
      }
      else if(this.cday==15){
        this.mon="十月上"
        console.log(this.cday)
      }else if(this.cday==14){
        this.mon="十月下"
        console.log(this.cday)
      }else if(this.cday==13){
        this.mon="十一月上"
        console.log(this.cday)
      }else if(this.cday==12){
        this.mon="十一月下"
        console.log(this.cday)
      }else if(this.cday==11){
        this.mon="十二月上"
        console.log(this.cday)
      }else if(this.cday==10){
        this.mon="十二月下"
        console.log(this.cday)
      }else if(this.cday==9){
        this.mon="一月上"
        console.log(this.cday)
      }else if(this.cday==8){
        this.mon="三月上"
        console.log(this.cday)
      }else if(this.cday==7){
        this.mon="三月下"
        console.log(this.cday)
      }else if(this.cday==6){
        this.mon="四月上"
        console.log(this.cday)
      }else if(this.cday==5){
        this.mon="四月下"
        console.log(this.cday)
      }else if(this.cday==4){
        this.mon="五月上"
        console.log(this.cday)
      }else if(this.cday==3){
        this.mon="五月下"
        console.log(this.cday)
      }else if(this.cday==2){
        this.mon="六月上"
        console.log(this.cday)
      }else if(this.cday==1){
        this.mon="六月下"
        console.log(this.cday)
      }else if(this.cday==0){
        this.mon="七月上"
        console.log(this.cday)
      }
      // this.mon="八月上"
      // console.log(this.cday)
    }
  },
  
})
</script>

<style scoped>
div {
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
}
.event_box{
  width: 357px;
  height: 75px;
  border-style: solid;
  border-color: #0050B3;
  position: relative;
  left: 10px;
  margin-bottom: 10px;
  margin-top: 15px;
}
.term{
  position: relative;
  display: inline-block;
  width: 45px;
  height: 45px;
  font-size: 20px;
  background-color: rgba(0,0,0,0);/*可修改为rgba(0,0,0,0) */
  float: left;
  left:15px ;
  top:10px;
  font-size: 20px;
  text-align: left;
  color:black;
}
.d_line{
  position: relative;
  display: inline-block;
  float: left;
  height: 75px;
  border: none;
  border-left: 4px dotted #0050B3;
  top:-7px;
  left: 25px;
}
.con{
  position: relative;
  display: inline-block;
  float: left;
  width: 285px;
  height: 75px;
  background-color:rgba(0,0,0,0);/*可修改为rgba(0,0,0,0) */
  left: 24px;
  color: black;
  text-align: center;
  vertical-align:middle;
  /* line-height: 80px; */
  word-wrap: break-word;
  white-space:normal; 
}
.con_in{
  display: inline-block;
  width: 285px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

}
</style>