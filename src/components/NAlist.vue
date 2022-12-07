<template>
  <span class="cbox1" :style="Dstyle">
    {{ msg }}
  </span>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NAlist",
  props: {
    msg: String,
    colorId: String,
  },
  data() {
    return {
      Dstyle: {
        background: "red",
      },
    };
  },
  methods: {
    Change_Color() {
      if (this.colorId == "普通") {
        this.Dstyle.background = "rgb(250, 251, 251)";//white
      } else if (this.colorId == "稀有") {
        this.Dstyle.background = "rgb(67,142,219)";  //blue
      } else if (this.colorId == "史诗") {
        this.Dstyle.background = "rgb(106,76,180)";  //purple
      } else if (this.colorId == "传说") {
        this.Dstyle.background = "red";  
      }
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
  background-color: rgb(253, 251, 251);
  text-align: center;
  font-size: 20px;
  border: 1px solid rgba(187, 187, 187, 1);
  border: 1px solid #000;
  border-radius: 5px 5px 5px 5px;
}
</style>