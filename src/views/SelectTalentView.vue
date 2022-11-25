<template>
  <div id="largestborder">
    <return_box  from="/"></return_box>
    <div class="result">


      您被分配到<span id="blue">{{ msg1 }}</span>，请自行分配属性(共25点)

    </div>
    <div class="medium">
      <!--<div class="ml"   @click.capture="getindex" index="0"><div class="shuxing">智力</div><add_reduce  v-if="countamout[0]" :count="countamout[0]" @reducechangedata="reducechild" @addchangedata="addchild" ></add_reduce></div>

         <div class="ml" @click.capture="getindex" index="1"><div class="shuxing">体质</div><add_reduce  v-if="countamout[1]" :count="countamout[1]" @reducechangedata="reducechild" @addchangedata="addchild" ></add_reduce></div>
         
         <div class="ml" @click.capture="getindex" index="2"><div class="shuxing">魅力</div><add_reduce  v-if="countamout[2]" :count="countamout[3]" @reducechangedata="reducechild" @addchangedata="addchild" ></add_reduce></div>

         
         <div class="ml" @click.capture="getindex" index="3"><div class="shuxing">运气</div><add_reduce  v-if="countamout[3]" :count="countamout[3]" @reducechangedata="reducechild" @addchangedata="addchild" ></add_reduce></div>


         <div class="ml" @click.capture="getindex" index="4"><div class="shuxing">家境</div><add_reduce v-if="countamout[4]" :count="countamout[4]" @reducechangedata="reducechild" @addchangedata="addchild" ></add_reduce></div>
         -->
      <div class="ml" v-for="(item, index) in countamout" :index="index">
        <div class="shuxing">{{ item.shuxing }}</div>
        <add_reduce :count="item.count" @reducechangedata="reducechild(index)" @addchangedata="addchild(index)">
        </add_reduce>
      </div>

    </div>
    <div class="Randombutton" @click="randomassign">随机分配属性</div>
    <div class="talentchoose">请选择两个天赋</div>

    <div class="talentone" v-if="flag1" @click="chooseone" :style="Dstyleone">{{ m1 }}</div>
    <div class="talenttwo" v-if="flag2" @click="choosetwo" :style="Dstyletwo">{{ m2 }}</div>
    <div class="talentthree" v-if="flag3" @click="choosethree" :style="Dstylethree">{{ m3 }}</div>
    <router-link to="/Play">
      <button class="sure" @click="givenext">确认</button>
    
    </router-link>


  </div>
</template>

<script lang="js" >
import Vue, { defineComponent } from 'vue';
import add_reduce from '@/components/add_reduce.vue';

import return_box from '@/components/return_box.vue';

export default defineComponent({
  name: 'selecttalent',
  components: {
    add_reduce,
    return_box

  },
  computed: {
    getindex(ev) {

      this.indexvalue = ev.target.index;

    }
  },

  methods: {

    givenext(){
      
    },
    Change_Colorone() {
      
        switch(this.Dstyleone.rarity){
          case 1:this.Dstyleone.background = 'white';break;
          case 2:this.Dstyleone.background = 'blue';this.Dstyleone.color = 'white';break;
          case 3:this.Dstyleone.background = 'purple';this.Dstyleone.color = 'white';break;
          case 4:this.Dstyleone.background = 'orange';this.Dstyleone.color = 'white';break;
          default:console.log('none');}
        
      } ,
      Change_Colortwo() {
      
      switch(this.Dstyletwo.rarity){
        case 1:this.Dstyletwo.background = 'white';break;
        case 2:this.Dstyletwo.background = 'blue';this.Dstyletwo.color = 'white';break;
        case 3:this.Dstyletwo.background = 'purple';this.Dstyletwo.color = 'white';break;
        case 4:this.Dstyletwo.background = 'orange';this.Dstyletwo.color = 'white';break;
        default:console.log('none');}
      
    } ,
    Change_Colorthree() {
      
      switch(this.Dstylethree.rarity){
        case 1:this.Dstylethree.background = 'white';;break;
        case 2:this.Dstylethree.background = 'blue';this.Dstylethree.color = 'white';break;
        case 3:this.Dstylethree.background = 'purple';this.Dstylethree.color = 'white';break;
        case 4:this.Dstylethree.background = 'orange';this.Dstylethree.color = 'white';break;
        default:console.log('none');}
      
    } ,
   
   

    reducechild(index) {

      if (this.countamout[index].count > 0)
        this.countamout[index].count -= 1;

    },
    addchild(index) {
      let acount = this.countamout[0].count + this.countamout[1].count + this.countamout[2].count + this.countamout[3].count + this.countamout[4].count;

      if (acount < 20) {
        this.countamout[index].count += 1;
      }},


    reducechild(index) {

      if (this.countamout[index].count > 0)
        this.countamout[index].count -= 1;

    },
    addchild(index) {
      let acount = this.countamout[0].count + this.countamout[1].count + this.countamout[2].count + this.countamout[3].count + this.countamout[4].count;

      if (acount < 20) {
        this.countamout[index].count += 1;


      }

    },
    randomassign() {
      let a1 = Math.floor(Math.random() * (25 - 0));
      let a2 = Math.floor(Math.random() * (25 - a1));
      let a3 = Math.floor(Math.random() * (25 - a1 - a2));
      let a4 = Math.floor(Math.random() * (25 - a1 - a2 - a3));
      let a5 = 25 - a1 - a2 - a3 - a4;
      this.countamout[0].count = a1;
      this.countamout[1].count = a2;
      this.countamout[2].count = a3;
      this.countamout[3].count = a4;
      this.countamout[4].count = a5;

    },
    chooseone() {
      this.flag1 = false;
    },
    choosetwo() {
      this.flag2 = false;
    },
    choosethree() {
      this.flag3 = false;
    }

  },
  data() {
    return {
      msg1: '计算机科学与技术学院',
      countamout: [{ shuxing: '智力', count: 1 }, { shuxing: '体质', count: 1 },
      { shuxing: '魅力', count: 1 }, { shuxing: '运气', count: 1 }, { shuxing: '家境', count: 1 }],

      resultamout: [{ shuxing: '智力', count: 0 }, { shuxing: '体质', count: 0 },
      { shuxing: '魅力', count: 0 }, { shuxing: '运气', count: 0 }, { shuxing: '家境', count: 0 }],

      flag1: true,
      flag2: true,
      flag3: true,
      m1: '',
      m2: '',
      m3: '',
      Dstyleone: {
        background: "white",
        rarity:4,
        property_change_talent:[0,0,0,0,0,0],
      },
      Dstyletwo: {
        background: "white",
        rarity:2,
        property_change_talent:[0,0,0,0,0,0],
      },
      Dstylethree: {
        background: "white",
        rarity:3,
        prop_change:[0,0,0,0,0,0],
      },
      
      

    }
  },
  mounted() {
    this.Change_Colorone();
    this.Change_Colortwo();
    this.Change_Colorthree();
  },
  created(){
  let _this=this;
  Promise.all([
      new Promise((resolve) =>{
        axios({
          methods:'get',
          // url:"/talentchoice",
          url:"https://mock.apifox.cn/m1/1984536-0-default/talentchoice"
          
        }).then((res)=>{
          
          _this.m1=res.data.array[0].name
          _this.m2=res.data.array[1].name
          _this.m3=res.data.array[2].name
          _this.Dstyleone.rarity=res.data.array[0].rarity
          _this.Dstyletwo.rarity=res.data.array[1].rarity
          _this.Dstylethree.rarity=res.data.array[2].rarity
          _this.Dstyleone.prop_change=res.data.array[0].prop_change
          _this.Dstyletwo.prop_change=res.data.array[1].prop_change
          _this.Dstylethree.pro_change=res.data.array[2].prop_change

         
        })

      }),


  ]);
}

      
 

});

</script >

<style scoped>
#largestborder {
  height: 722px;
  width: 390px;
  background-color: #efefef;
  margin: 0 auto;


}



.result {
  float: left;
  margin-top: 5px;
  margin-left: 33px;
  margin-right: 32px;
  width: 325px;
  height: px;

  font-size: 20px;

}

#blue {
  color: #0f40f5;

}

.medium {
  height: 249px;

}

.ml {
  float: right;
  margin-right: 62px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;


}

.shuxing {



  height: 18px;
  width: 128px;
  background-color: rgba(255, 255, 255, 0);
  text-align: center;


}

.Randombutton {

  width: 157px;
  height: 47px;
  line-height: 29px;
  border-radius: 10px 10px 15px 10px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  margin-left: 118px;
  margin-top: 0px;
  line-height: 47px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
}

.talentchoose {
  margin-top: 15px;
  margin-left: 21px;
  width: 325px;
  height: 67px;
  color: rgba(16, 16, 16, 1);
  font-size: 28px;
  text-align: left;
  font-family: PingFangSC-regular;

}

.talentone {
  margin-left: 21px;
  margin-top: 0px;
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
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.talentone:hover,
.talentone:focus,
.talentone:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.talenttwo {
  margin-left: 21px;
  margin-top: 20px;
  width: 348px;
  height: 44px;
  line-height: 29px;
  border-radius: 15px 15px 15px 15px;

  background-color: rgba(255, 255, 255, 255);
  color: black;

  background-color: rgba(89, 27, 183, 1);
  color: rgba(255, 255, 255, 1);

  font-size: 20px;
  line-height: 44px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(187, 187, 187, 1);
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.talenttwo:hover,
.talenttwo:focus,
.talenttwo:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.talentthree {
  margin-left: 21px;
  margin-top: 20px;
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
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.talentthree:hover,
.talentthree:focus,
.talentthree:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.sure {
  margin-top: 18px;
  margin-left: 0px;
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

