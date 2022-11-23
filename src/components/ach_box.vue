<template>
  <div class="ach_box" :style="Dstyle">
      <div class="get_ach" :style="{color:aColor}">达成成就</div>
      <hr class="d_line">
      <div class="ach_con">{{x}}</div>
  </div>
</template>

<script>
export default {
  name: 'ach_box',
  data(){
    return{
      // Dstyle:{},
      Dstyle:{
        background:'red'
      },
      x:'初始化'
    }
  },
  methods:{
    activeColor(){
      this.id=2;
      if(this.id==1){
        // this.Dstyle=this.R_one;
        this.Dstyle.background = "bule";
      }else if(this.id==2){
        // this.Dstyle=this.B_one;
        this.Dstyle.background = "black";
      }
    },
    printX(){
      this.con_flag=1;
      this.con='123456';
      if(this.con_flag==1){
        this.x=this.con;
      }
    }
      
    },
  mounted:function(){
    this.activeColor();
    this.printX();
  }
  
}
</script>

<style scoped>
.ach_box{
  width: 363px;
  height: 80px;
  background-color: #0050B3;
  position: relative;
  left: 15px;
  margin-top: 15px;
}
.get_ach{
  position: relative;
  display: inline-block;
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
.ach_con{
  position: relative;
  display: inline-block;
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
  display: inline-block;
  float: left;
  height: 75px;
  border: none;
  border-left: 4px dotted white;
  top:-5px;
  left: 28px;
}
</style>

