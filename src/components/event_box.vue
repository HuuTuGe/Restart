<template>
  <div class="event_box">
      <div class="term">{{mon}}</div>
      <hr class="d_line">
      <div class="con"><span class="con_in">{{Con_In}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'event_box',
  data(){
    return{
      mon:'初始化',
      Con_In:'初始化'
    }
  },
  // methods:{
  //   print_MON(){
  //     this.con_id=1;
  //     this.contant="八月上";
  //     if(this.con_id==1){
  //       this.mon=this.contant;
  //     }
  //   },
  //   print_In(){
  //     this.con_id=1;
  //     this.con_='123456';
  //     if(this.con_id==1){
  //       this.Con_In=this.con_;
  //     }
  //   }
  // },
  mounted:function(){
    // this.print_MON();
    // this.print_In();
  }

}
</script>

<style scoped>
.event_box{
  width: 357px;
  height: 75px;
  border-style: solid;
  border-color: #0050B3;
  position: relative;
  left: 15px;
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