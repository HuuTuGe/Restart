<template>
  <div class="app">
    <div class="header">
      <div class="head">
        <!-- <div class="back"></div> -->
        <return_box></return_box>
        <div class="light"><img src="../assets/light.jpg" alt=""></div>
        <h1 class="term">学期</h1>
        <div class="shu">
          <p class="head_p" style="color:white">属性值</p>
          <hr noshade="true" style="color: white;">
          <div class="tab">
            <table>
              <tr>
                <!-- <td>智力：<span>6</span></td> -->
                <td>
                  <pro_item prop_name="智力" num=2></pro_item>
                </td>
                <!-- <td>体质：<span>6</span></td> -->
                <td>
                  <pro_item prop_name="体质" num="6"></pro_item>
                </td>
              </tr>
              <tr>
                <!-- <td>魅力：<span>6</span></td>
                  <td>财富：<span>6</span></td> -->
                <td>
                  <pro_item prop_name="魅力" num="2"></pro_item>
                </td>
                <td>
                  <pro_item prop_name="财富" num="6"></pro_item>
                </td>
              </tr>
              <tr>
                <!-- <td>运气：<span>6</span></td>
                  <td>心情：<span>6</span></td> -->
                <td>
                  <pro_item prop_name="运气" num="1"></pro_item>
                </td>
                <td>
                  <pro_item prop_name="心情" num="6"></pro_item>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <pro_item prop_name="已收集成就" num="6"></pro_item>
                </td>
              </tr>
            </table>
            <!-- <span class="ach_p">已收集成就:</span>
              <span class="ach_p">6</span> -->
          </div>

        </div>
      </div>
    </div>
    <div class="con" @click="print_div">
      <event_box></event_box>
      <ach_box></ach_box>
      <event_box></event_box>
      <event_box></event_box>
    </div>

  </div>
</template>

<script>
import { provide } from 'vue';
import return_box from '../components/return_box.vue'
import pro_item from '../components/pro_item.vue'
import event_box from '../components/event_box.vue'
import ach_box from '../components/ach_box.vue'

export default {
  name: 'play',
  components: {
    provide,
    return_box,
    pro_item,
    event_box,
    ach_box
  }
}
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

.con {
  position: absolute;
  background-color: white;
  top: 330px;
  width: 390px;
  height: 400px;
  overflow: scroll;
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