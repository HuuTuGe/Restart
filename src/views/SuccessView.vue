<template>
  <div id="largestborder">
    <!--<div id="success_fix">
       <div id="bluebg">
         <div id="SuccessCount"><div id="count1">{{count1}}</div></div>
        </div>
        
       
      </div>-->
    <div class="box1">
      <return_box class="ret"></return_box>
      <div class="justplace"></div>
      <div class="box2">
        <p class="text3">成就</p>
        <p class="text4">收集进度</p>

        <span class="num1">15</span>
        <span class="num2">/</span>
        <span class="num3">60</span>
      </div>
    </div>

    <div class="box3">你已重开 {{ count4 }} 次</div>

    <div id="details">
      <p class="cjtitle">&nbsp;&nbsp;&nbsp;成就详情</p>
      <router-link to="/SAchievement">
        <div id="specialtotal">
          <div id="special"></div>
          <div id="specialdt">
            <div class="stype">特殊成就</div>
            <div class="sreason">专业特色剧情触发</div>
            <div class="COUNT">{{ count2 }}/{{ total2 }}</div>
            <div class="check"></div>
          </div>
        </div>
      </router-link>
      <router-link to="/NAchievement">
        <div id="commomtotal">
          <div id="commom"></div>
          <div id="commomdt">
            <div class="stype">普通成就</div>
            <div class="sreason">常规剧情触发</div>
            <div class="COUNT">{{ count3 }}/{{ total3 }}</div>
            <div class="check"></div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import return_box from "@/components/return_box.vue";
export default {
  name: "success",
  components: {
    return_box,
  },
  data() {
    return {
      msg: "成就榜",
      count1: 0,
      count2: 2,
      count3: 5,
      count4: 0,
      total2: 10,
      total3: 15,
    };
  },
};
</script  >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
#largestborder {
  height: 722px;

  background-color: #efefef;
  margin: 0 auto;
  padding-top: 0px;
  margin-bottom: 0px;
  float: left;
}
#success_fix {
  height: 309px;
  width: 390px;
  background-color: #efefef;
  border-top: 0px;
  margin-top: 0;
}

/*<!--#gamerecord{
  height:64px;
  width:390px;
  margin-bottom: 0px;
  background-color: #1c5dae;


}*/
.box1 {
  width: 390px;
  height: 242px;
  margin-top: 0px;
  background: url(../assets/成就榜大字.png) 0px 0px;
  background-color: #d4ebf7;
  background-size: 390px 253px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  font-family: Arial;
}
.justplace {
  height: 105px;
  width: 390px;
  float: left;
  opacity: 0.7;
}

.box2 {
  left: 10px;
  top: 10px;
  float: left;
  margin-left: 16px;
  width: 344px;
  height: 113px;
  line-height: 20px;
  border-radius: 10px;
  background-color: rgba(0, 80, 179, 1);
  text-align: center;
  box-shadow: 0px 2px 6px 0px rgba(64, 169, 255, 100);
  position: relative;
}
.box3 {
  left: 0px;
  top: 10px;
  width: 390px;
  height: 64px;
  line-height: 64px;
  background-color: rgba(0, 80, 179, 1);
  color: rgb(248, 244, 244);
  font-size: 36px;
  text-align: center;
  font-family: Arial;
  position: relative;
}
.text1 {
  margin-left: 21 px;

  margin-top: 34 px;

  width: 275px;
  height: 69px;
  color: rgba(16, 16, 16, 1);
  font-size: 55px;
  /* text-align: left; */
  /* font-display: 700px; */
  font-weight: 700px;
  font-family: ZKQingKeHuangYou-regular;
  position: relative;
}
.text2 {
  left: 20px;
  right: 5px;
  bottom: 130px;
  top: px;
  width: 158px;
  height: 28px;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
  position: relative;
}
.text3 {
  left: 18px;
  bottom: px;
  top: px;
  width: 250px;
  height: 310px;
  color: rgb(250, 248, 248);
  font-size: 33px;
  text-align: left;
  /* font-family: PingFangSC-regular; */
  position: absolute;
}
.text4 {
  left: 18px;
  top: 35px;
  width: 250px;
  height: 310px;
  color: rgba(255, 255, 255, 1);
  font-size: 36px;
  text-align: left;
  font-family: PingFangSC-regular;
  position: absolute;
}
.p1 {
  float: right;
  margin: 6px 29px 66px 182px;
  width: 150px;
  height: 100px;
  position: relative;
}
.num1 {
  left: 180px;
  top: 30px;
  width: 67px;
  height: 64px;
  color: rgba(252, 202, 0, 1);
  font-size: 48px;
  text-align: right;
  font-family: ZKQingKeHuangYou-regular;
  position: absolute;
}
.num2 {
  left: 205px;
  top: 47px;
  width: 105px;
  height: 164px;
  color: white;
  font-size: 100px;
  font-style: italic;
  position: absolute;
}
.num3 {
  left: 130px;
  top: 70px;
  width: 67px;
  height: 64px;
  color: rgba(255, 255, 255, 1);
  font-size: 48px;
  text-align: left;
  font-family: ZKQingKeHuangYou-regular;
  position: relative;
}
#details {
  margin-bottom: 0px;
  height: 380px;
  width: 390px;
}
p {
  margin-left: 0px;
  font-size: 20px;
  text-align: left;
}
#specialtotal {
  height: 150px;
  width: 390px;
  margin-top: 25px;
}
#special {
  height: 140px;
  width: 160px;
  background: url(../assets/奖杯.png) no-repeat 0px 0px;
  background-size: 150px 150px;
  float: left;
  display: inline;
}
#commomtotal {
  height: 150px;
  width: 390px;
  margin-top: 20px;
}
#commom {
  height: 140px;
  width: 160px;
  float: left;
  display: inline;
  background: url(../assets/奖杯.png) no-repeat 0px 0px;
  background-size: 150px 150px;
}
#specialdt {
  height: 150px;
  width: 230px;
  float: right;
  display: inline;
  overflow: visible;
  /* font-size: 200px; */
}
#commomdt {
  height: 150px;
  width: 230px;
  float: right;
  display: inline;
}
.stype {
  font-size: 20px;
  color: #0f40f5;
}
.sreason {
  margin-top: 5px;
  font-size: 20px;
}
.check {
  height: 70px;
  width: 70px;
  float: right;
  display: inline;
  background: url(../assets/打钩.png) no-repeat 0px 0px;
  background-size: 50px 50px;
  margin-right: 5px;
  margin-top: 15px;
}
.COUNT {
  float: left;
  display: inline;
  margin-left: 70px;
  margin-top: 25px;
  color: #f5222d;
  font-size: 22px;
}

.cjtitle {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
}
</style>

