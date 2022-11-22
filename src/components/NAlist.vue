<template>
  <span class="cbox1" :style="Dstyle">
    {{ msg }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "NAlist",
  props: {
    msg: String,
  },
  data() {
    return {
      Dstyle: {
        background: "red",
        id: 1,
        achievement: 0,
      },
    };
  },
  methods: {
    Change_Color() {
      if (this.Dstyle.achievement == 1) {
        switch(this.Dstyle.id){
          case 1:this.Dstyle.background = 'white';break;
          case 2:this.Dstyle.background = 'blue';break;
          case 3:this.Dstyle.background = 'green';break;
          case 4:this.Dstyle.background = 'red';break;
          default:console.log('none');}
        // if (this.Dstyle.id == 1) {
        //   this.Dstyle.background = "white";
        // } else if (this.Dstyle.id == 2) {
        //   this.Dstyle.background = "blue";
        // } else if (this.Dstyle.id == 3) {
        //   this.Dstyle.background = "purple";
        // } else if (this.Dstyle.id == 4) {
        //   this.Dstyle.background = "red"; }
      } else {
        this.Dstyle.background = "gray";
      }
      console.log(this.Dstyle.id);
      console.log(this.Dstyle.background);
    },
  },
  mounted() {
    this.Change_Color();
  },
});
</script>

<style>
.cbox1 {
  width: 145px;
  height: 35px;
  line-height: 40px;
  background-color: rgb(190, 183, 183);
  text-align: center;
  font-size: 20px;
  border: 1px solid rgba(187, 187, 187, 1);
  border: 1px solid #000;
  border-radius: 5px 5px 5px 5px;
}
</style>