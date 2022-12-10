<template>
  <div class="app">
    <div class="box1">
      <return_box from="'/success'"></return_box>
      <p class="text1">{{achievementType}}</p>
      <img src="../assets/普通成就.jpg" alt="" class="p1" />
      <p class="text2">Achievement list</p>
    </div>
    <div class="box2">
      <p class="text3">成就</p>
      <p class="text4">收集进度</p>

      <span class="num1">{{ userCommonAchievementsNum }}</span>
      <span class="num2">/</span>
      <span class="num3">{{ commonAchievementsNum }}</span>
    </div>

    <div class="box3">
      <span class="gr"> {{ "<<" }} </span>
      <span class="p2">成就详情</span>
      <span class="gr"> >> </span>
    </div>
    <!-- :colorId="item.id" -->

    <div class="box4">
      <NAlist
        class="cont1"
        :msg="item.name"
        v-for="(item, index) in items"
        :value="item.name"
        :key="index"
        :style="applyStyle(item.rarity)"
      ></NAlist>
    </div>

    <div class="box5">
      <input type="button" value="上一页" class="r" @click="changebefore" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="one">{{ nowPage }} </span>
      <span class="one">/</span>
      <span class="one"> {{ pageNum }}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="下一页" class="r1" @click="changelast" />
    </div>
  </div>
</template>

<script lang="ts">
import NAlist from "../components/NAlist.vue";
import { defineComponent } from "vue";
import return_box from "../components/return_box.vue";
import { api, catchError } from "@/api/api";
import { AchievementsParam, AchievementType } from "@/api/inputInterface";
import { StyleValue } from "vue/types/jsx";
import { storeToRefs } from "pinia";
import { useSourceStore, useUserStore } from '@/state/store';
import { AchievementData } from "@/api/outputInterface";

interface Data {
  achievementType: AchievementType,
  nowPage: number,
  pageNum: number,
  items: Array<AchievementData>,
}

export default defineComponent({
  name: "app",
  components: {
    NAlist,
    return_box,
  },
  setup() {
    const sourceStore = useSourceStore()
    const userStore = useUserStore()
    const {userCommonAchievementsNum} = storeToRefs(userStore)
    const {commonAchievementsNum} = storeToRefs(sourceStore)
    return {sourceStore,commonAchievementsNum,userCommonAchievementsNum}
  },
  data() {
    return {
      achievementType: AchievementType.common,
      nowPage: 1,
      pageNum: 1,
      items: [],
    } as Data;
  },
  watch: {
    nowPage: "sendRequest", //绑定函数
  },
  methods: {
    setPageNum(){
        this.pageNum = Math.floor(this.sourceStore.commonAchievementsNum as number / 10)+1;
    },
    applyStyle(rarity: string): StyleValue {
      if (rarity == "传说") {
        return {
          background: "#E99D42",
          color: "black",
        };
      } else if (rarity == "史诗") {
        return {
          background: "#0050B3",
          color: "white",
        };
      } else if (rarity == "稀有") {
        return {
          background: "#591BB7",
          color: "white",
        };
      } else {
        return {
          background: "white",
          color: "black",
        };
      }
    },
    sendRequest() {
      api
        .getAchievementsData({
          page: this.nowPage,
          limit: 10,
          type: this.achievementType,
          ids: new Set()
        } as AchievementsParam)
        .then((data) => {
          this.items = data;
        })
        .catch((error) => catchError(error));
    },
    //上一页
    changebefore() {
      if (this.nowPage > 1) this.nowPage--;
    },
    //下一页
    changelast() {
      if (this.nowPage < this.pageNum) this.nowPage++;
    },
  },
  //页面加载时自动调用
  mounted: function () {
    this.sendRequest();  
    this.setPageNum();
  },
});
</script scoped>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
  margin: 10px;
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
  left: 105px;
  top: px;
  bottom: 70px;
  width: 130px;
  height: 90px;
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
  padding-left: 16px;
  padding-right: 10px;
  float: left;
  margin: 10px;
  background-color: rgb(255, 255, 255);
  width: 145px;
  height: 35px;
  line-height: 40px;
  /* background-color: rgb(253, 251, 251); */
  text-align: center;
  font-size: 20px;
  border: 1px solid rgba(187, 187, 187, 1);
  border: 1px solid #000;
  border-radius: 5px 5px 5px 5px;
}
/* .cont2 {
  padding-left: 10px;
  padding-right: 10px;
  float: right;
  margin: 6px;
} */
.return {
  left: 4px;
  top: 6px;
  bottom: px;
  width: 40px;
  height: 40px;
  position: absolute;
}
/* .active{background-color: gray;} */
</style>

