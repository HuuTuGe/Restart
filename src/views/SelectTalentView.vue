<template>
    <div class="largestborder">
      <return_box  from="/"></return_box>
      <div class="result">您被分配到<span id="blue">{{ majorStore.majorName }}</span>，请自行分配属性(共25点)</div>
      <div class="medium">
          <div class="ml" v-for="i in (names.length-1)" :index="(i-1)">
              <div class="shuxing">{{ names[i-1] }}</div>
              <add_reduce :count="props[i-1]" :id="(i-1)" :update="!isRandom"></add_reduce>
          </div>
      </div>
      <div class="Randombutton" @click='randomProps'>随机分配属性</div>
      <div class="talentchoose">请选择两个天赋</div>

      <ol v-for= "item  in talentData">
        <li :id="item.rarity" class="talent" :style='(applyStyle(item.rarity))' @click="choose(item)">{{item.name}}</li>
      </ol>
      <!-- <router-link to="/Play"> -->
        <button class="sure" @click="toPlay">确认</button>
      <!-- </router-link> -->
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import add_reduce from '@/components/add_reduce.vue';
import return_box from '@/components/return_box.vue';
import {api, catchError} from '@/api/api'
import {storeToRefs} from 'pinia'
import {useMajorStore, usePropStore} from '@/state/store'
import { TalentData } from '@/api/outputInterface';
import { StyleValue } from 'vue/types/jsx';

interface Data {
  talentData: Array<TalentData>,
  isRandom: boolean,
  propChangesList: Array<Array<number>>
} 

export default defineComponent({
    name: 'select-talent',
    components: {
        add_reduce,
        return_box
    },
    setup() {
      const majorStore = useMajorStore()
      const propStore = usePropStore()
      propStore.$reset
      const {props,names} = storeToRefs(propStore)
      return{majorStore,propStore,props,names}
    },
    data() {
      return {
        talentData:[],
        isRandom: false,
        propChangesList: []
      } as Data
    },
    async created() {
      await api.getTalentsData().then( (res) => {
        this.talentData = res
      }).catch( (error) => catchError(error))
    },
    methods: {
      applyStyle(rarity: string): StyleValue{
        if (rarity == "传说") {
          return {
            background: "orange",
            color:'white',
          }
        } 
        else if(rarity == "史诗") {
          return {
            background: "purple",
            color:'white',
          }
        }
        else if(rarity == "稀有") {
          return {
            background: "blue",
            color:'white',
          }
        }
        else {
          return {
            background: "black",
            color:'white',
          }
        }
      },
      choose(item: TalentData) {
        if(this.talentData.length > 1){
          this.talentData.splice(this.talentData.indexOf(item),1)
          // this.propStore.apdateProps(item.propChanges)
          this.propChangesList.push(item.propChanges)
        }
        
      },
      randomProps() {
        if(!this.isRandom){
          this.propStore.randomProps()
          this.isRandom = true
        }
      },
      toPlay() {
        if(this.propChangesList.length > 1 && this.propStore.getPropsSum() == 25){
          for(let i=0; i<this.propChangesList.length; i++){
            this.propStore.apdateProps(this.propChangesList[i])
          }
          this.$router.push('/Play')
        }
        
      }
    }
})
</script>

<style scoped>
.largestborder {
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

.shuxing {
height: 18px;
width: 128px;
background-color: rgba(255, 255, 255, 0);
text-align: center;
}

#blue {
  color: #0f40f5;
}

.talent {
  margin-right: 100px;
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

.medium {
  height: 249px;
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
.ml {
  float: right;
  margin-right: 62px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>