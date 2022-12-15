<template>
  <div class="ach_box" :style="Dstyle">
      <div class="get_ach" :style="aColor">达成成就</div>
      <hr class="d_line">
      <div class="achCon" :style="aColor">{{x}}</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend( {
  name: 'ach_box',
  props:['lifeData'],
  data(){
    return{
      Dstyle:{
        background:'',
      },
      aColor:{
        color:''
      },
      x:'',
      color_id:'普通',
      lifedatas:this.lifeData
    }
  },
  methods:{
   print(){
      this.x=this.lifedatas.achievement.name//需要修改
      this.color_id=this.lifedatas.achievement.rarity
      if(this.color_id=='普通'){
        this.Dstyle.background = "gray";
        this.aColor.color="black"
      }else if(this.color_id=='稀有'){
         this.Dstyle.background = "#0050B3";
      }else if(this.color_id=='史诗'){
         this.Dstyle.background = "#591BB7";
      }else if(this.color_id=='传说'){
         this.Dstyle.background = "#E99D42";
      }
   }

  },
  mounted:function(){
    this.print();
  }
  
})
</script>

<style scoped>
.ach_box{
  width: 365px;
  height: 80px;
  background-color: #0050B3;
  position: relative;
  left: 10px;
  margin-top: 15px;
}
.get_ach{
  position: relative;
  width: 45px;
  height: 45px;
  font-size: 20px;
  background-color: rgba(0,0,0,0);/*可修改为rgba(0,0,0,0) */
  float: left;
  left:15px ;
  top:13px;
  font-size: 20px;
  color: white;
}
.achCon{
  position: relative;
  float: left;
  width: 284px;
  height: 75px;
  background-color:rgba(0,0,0,0);/*可修改为rgba(0,0,0,0) */
  top: 20px;
  left: 28px;
  color: white;
  font-size: 28px;
}
.d_line{
  position: relative;
  float: left;
  height: 75px;
  border: none;
  border-left: 4px dotted white;
  top:-5px;
  left: 28px;
}
</style>

