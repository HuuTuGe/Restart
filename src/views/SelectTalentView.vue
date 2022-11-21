<template>
      <div id="largestborder">
         <div class="result">
          您被分配到<span id="blue">{{msg1}}</span>，请自行分配属性(共25点)
         </div>
         <div class="medium">
         <div class="ml"><div class="shuxing">智力</div><add_reduce v-if="count1" :count="count1" ></add_reduce></div>

         <div class="ml"><div class="shuxing">体质</div><add_reduce v-if="count2" :count="count2" ></add_reduce></div>
         
         <div class="ml"><div class="shuxing">魅力</div><add_reduce v-if="count3" :count="count3" ></add_reduce></div>
         
         <div class="ml"><div class="shuxing">运气</div><add_reduce v-if="count4" :count="count4" ></add_reduce></div>

         <div class="ml"><div class="shuxing">家境</div><add_reduce v-if="count5" :count="count5" ></add_reduce></div>
        </div>
         <div class="Randombutton">随机分配属性</div>
         <div class="talentchoose">请选择两个天赋</div>
         <div class="talentone">{{m1}}</div>
         <div class="talenttwo">强身健体{{m2}}</div>
         <div class="talentthree">{{m3}}</div>
         <router-link to="/Play">
          <button class="sure">确认</button>
         </router-link>
         
            
        </div>
</template>

<script lang="ts">
import Vue from 'vue';
import add_reduce from '@/components/add_reduce.vue';
export default {
name: 'selecttalent',
components:{
    add_reduce,
},
data () {
  return {
       msg1:'计算机科学与技术学院',
       count1:5,
       count2:1,
       count3:2,
       count4:1,
       count5:1,
       m1:"社交牛逼症(魅力+3)",
       m2:"强身健体(体质+2,心情+1)",
       m3:"天选之子(运气+3)"


  }
}
}

</script >

<style scoped>
#largestborder {
 height:722px;
 width:390px;
 background-color: #efefef;
 margin:0 auto;


}

.result{
  float:left;
  margin-top: 61px;
  margin-left:33px;
  margin-right:32px;
  width:325px;
  height:px;
  
  font-size: 20px;
  
}
#blue{
  color:#0f40f5;
  
}
.medium{
  height:289px;
  
}
.ml{
  float:right;
  margin-right: 62px;
  margin-top: 15px;
  display:flex;
  align-items: center;
  justify-content:space-between
 
}
.shuxing{
 
  
  
  height:18px;
  width:128px;
  background-color:rgba(255,255,255,0);
  text-align: center;

  
}
.Randombutton{
 
width: 157px;
height: 47px;
line-height: 29px;
border-radius: 10px 10px 15px 10px;
background-color: rgba(255, 255, 255, 1);
color: rgba(16, 16, 16, 1);
font-size: 20px;
margin-left: 118px;
margin-top: 20px;
line-height: 47px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
.talentchoose{
 margin-top: 15px;
 margin-left: 21px;
width: 325px;
height: 67px;
color: rgba(16, 16, 16, 1);
font-size: 28px;
text-align: left;
font-family: PingFangSC-regular;

}
.talentone{
margin-left: 21px;
margin-top:0px;
width: 348px;
height: 44px;
line-height: 29px;
border-radius: 15px 15px 15px 15px;
background-color: rgba(255, 255, 255, 1);
color: rgba(16, 16, 16, 1);
font-size: 20px;
line-height: 44px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
.talenttwo{
margin-left: 21px;
margin-top:20px;
width: 348px;
height: 44px;
line-height: 29px;
border-radius: 15px 15px 15px 15px;
background-color: rgba(89, 27, 183, 1);
color: rgba(255, 255, 255, 1);
font-size: 20px;
line-height: 44px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
.talentthree{
margin-left: 21px;
margin-top:20px;
width: 348px;
height: 44px;
line-height: 29px;
border-radius: 15px 15px 15px 15px;
background-color: rgba(147, 210, 243, 1);
color: rgba(16, 16, 16, 1);
font-size: 20px;
line-height: 44px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
.sure{
margin-top: 18px;
margin-left: 92px;
width: 190px;
height: 60px;
line-height: 60px;
border-radius: 5px 5px 0px 5px;
background-color: rgba(255, 255, 255, 1);
color: rgba(16, 16, 16, 1);
font-size: 36px;
text-align: center;
font-family: Arial;
border: 1px solid rgba(187, 187, 187, 1);
}
</style>

