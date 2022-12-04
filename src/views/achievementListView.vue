<template>
  <div class="app">
    <div class="box1">
      <return_box from="/"></return_box>
      <p class="text1">{{ mg }}</p>
      <img src="../assets/特殊成就.png" alt="" class="p1" />
      <p class="text2">Achievement list</p>
    </div>
    <div class="box2">
      <p class="text3">本次收集</p>
      <p class="text4">成就个数</p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src="../assets/成就一览.png" alt="" class="p3" />
      <span class="num1">{{ fz1 }}</span>
    </div>

    <div class="box3">
      <span class="gr"> {{ cj }} </span>
      <span class="p2">成就详情</span>
      <span class="gr"> >> </span>
    </div>

    <div class="box4">
      <NAlist
        class="cont1"
        :msg="item.message"
        :c="item.id"
        v-for="(item, index) in items"
        :value="item.message"
        :key="index"
      ></NAlist>
    </div>

    <div class="box5">
      <input type="button" value="上一页" class="r" @click="changebefore" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="one">{{ fz }} </span>
      <span class="one">/</span>
      <span class="one"> {{ fm }}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="下一页" class="r1" @click="changelast" />
    </div>
  </div>
</template>

interface isState {
  pageTitle: string,
  store: any,
  num: any
}
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script lang="ts">

import NAlist from "../components/NAlist.vue";
import { defineComponent } from "vue";
import return_box from '../components/return_box.vue';  
import axios from "axios";

export default defineComponent({
    name: "app",
    components: {
    NAlist,
    return_box,
  },
  data() {
    return {
      mg: "成就一览",
      fz1: 17,
      cj: "<<",
      fz: 1,
      fm: 5,
      items: [{ message: " ", id: 0 }],
     
    };
  },
  methods: {
    next1() {
      let _this = this;
      axios
        .get("https://mock.apifox.cn/m1/1984536-0-default/achievement", {
          params: {
            page_num: this.fz,
          },
        })
        .then(function (response: any) {
          console.log(_this.fz);
          // console.log(response);             
          _this.items = response.data.item;   //给存储数组的数组赋值
          console.log(_this.items);
        })
        .catch(function (error: any) {
          console.log(error);
        });
    },
    //上一页
    changebefore() {
      if (this.fz > 1) this.fz--;
      console.log(this.fz); 
      this.next1();
    },
    //下一页
    changelast() {
      if (this.fz < this.fm) this.fz++;
      console.log(this.fz); 
      this.next1();
    },
  },
  mounted: function () {
    this.next1();
  },
});

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
  height: 310px;
  background-color: #f7f7f7;
  background-size: 390px 253px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  font-family: Arial;
  position: relative;
}
.box5 {
  width: 390px;
  height: 53px;
  background-color: #f7f7f7;
  background-size: 390px 253px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  font-family: Arial;
  position: absolute;
}
.text1 {
  padding-left: 10px;
  margin:10px;
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
  left: 110px;
  top: px;
  bottom: 80px;
  width: 150px;
  height: 130px;
  position: relative;
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
.p3 {
  top: 20px;
  left: px;
  right: 130px;
  bottom: px;
  width: 50px;
  height: 50px;
  position: absolute;
}

.num1 {
  left: 220px;
  top: 40px;
  width: 67px;
  height: 64px;
  color: rgba(252, 202, 0, 1);
  font-size: 80px;
  text-align: right;
  font-family: ZKQingKeHuangYou-regular;
  position: absolute;
}

.r {
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 3px;
  padding-right: 10px;
  margin-left: 20px;
  margin-top: px;
  /* float: left; */
}
.r {
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 3px;
  padding-right: 10px;
  margin-left: 20px;
  margin-top: px;
  /* float: left; */
}
.r1 {
  right: 10px;
  padding-top: 5px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;
  /* float: left; */
}

.one {
  bottom: 0;
  top: px;
  right: px;
  font-size: 20px;
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
  padding-left: 16px;
  padding-right: 10px;
  float: left;
  margin: 10px;
}
.return {
  left: 4px;
  top: 6px;
  bottom: px;
  width: 40px;
  height: 40px;
  position: absolute;
}
</style>

