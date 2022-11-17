<template>
  <div class="app">
    <div class="box1">
      <p class="text1">{{ msg }}</p>
      <img src="../assets/3.jpg" alt="" class="p1" />
      <p class="text2">Achievement list</p>
    </div>
    <div class="box2">
      <p class="text3">成就</p>
      <p class="text4">收集进度</p>

      <span class="num1">{{ fz1 }}</span>
      <span class="num2">/</span>
      <span class="num3">60</span>
    </div>

    <div class="box3">
      <span class="gr"> {{ cj }} </span>
      <span class="p2">成就详情</span>
      <span class="gr"> >> </span>
    </div>

    <div class="box4">
      <NAlist class="cont1"></NAlist>
      <NAlist class="cont2"></NAlist>
      <NAlist class="cont1"></NAlist>
      <NAlist class="cont2"></NAlist>
      <NAlist class="cont1"></NAlist>
      <NAlist class="cont2"></NAlist>
      <NAlist class="cont1" color="black"></NAlist>

    </div>

    <div class="box5">
      <input type="button" value="上一页" class="r" @click="changebefore" />
      <span class="one">{{ fz }}</span>
      <span class="one">/</span>
      <span class="one">{{ fm }}</span>
      <input type="button" value="下一页" class="r1" @click="changelast" />
    </div>
  </div>
</template>



<script >
import NAlist from "./NAlist.vue";

export default {
  name: "app",
  components: {
    NAlist,
  },
  data() {
    return {
      msg: "普通成就",
      fz1: "15",
      cj: "<<",
      fz: "1",
      fm: "5",
    };
  },
  methods: {
    changebefore() {
      if (this.fz > 1) this.fz--;
    },
    changelast() {
      if (this.fz < this.fm) this.fz++;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  width: 390px;
  height: 722px;
  border: 1px solid #000;
  text-align: center;
  margin: 0 auto;
  background-color: #f7f7f7;
}
.box1 {
  width: 390px;
  height: 242px;
  background-color: #d4ebf7;
  background-size: 390px 253px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  font-family: Arial;
  position: absolute;
}

.box2 {
  float: left;
  bottom: px;
  top: 148px;
  margin-left: 24px;
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
  margin-top: 275px;
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
.box4 {
  width: 390px;
  height: 330px;
  background-color: #f7f7f7;
  background-size: 390px 253px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  font-family: Arial;
  position: relative;
}
.text1 {
  padding-left: 10px;
  width: 275px;
  height: 69px;
  color: rgba(16, 16, 16, 1);
  font-size: 55px;
  text-align: left;
  font-display: 700px;
  font-weight: 700;
  font-family: ZKQingKeHuangYou-regular;
}
.text2 {
  padding-left: 20px;
  top: 100px;
  width: 158px;
  height: 28px;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
  position: absolute;
}
.text3 {
  left: 18px;
  bottom: px;
  top: -10px;
  width: 250px;
  height: 310px;
  color: rgb(250, 248, 248);
  font-size: 36px;
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
  left: 95px;
  top: px;
  bottom: 130px;
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
.r {
  padding-top: px;
  padding-left: 10px;
  /* float: left; */
}
.r1 {
  right: 10px;
  padding-top: px;
  padding-right: 10px;
  /* float: left; */
}

.one {
  bottom: 0;
  top: px;
  right: px;
}
.p2 {
  bottom: px;
  width: 275px;
  height: 69px;
  text-align: left;
  font-display: 700px;
  font-family: ZKQingKeHuangYou-regular;
  position: relative;
}
.gr {
  bottom: px;
  width: 275px;
  height: 69px;
  text-align: left;
  font-display: 700px;
  font-family: ZKQingKeHuangYou-regular;
  position: relative;
  color: greenyellow;
}
.cont1 {
  /* padding-bottom: 10px; */
  /* padding-top: 10px; */
  padding-left: 10px;
  padding-right: 10px;
  float: left;
  margin: 5px;
}
.cont2 {
  /* padding-bottom: 10px; */
  /* padding-top: 10px; */
  padding-left: 10px;
  padding-right: 10px;
  float: right;
  margin: 5px;
}
</style>

