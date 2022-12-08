<template>
  <div>
    <div class="left">
      <div class="app">
        <router-view></router-view>
      </div>
    </div>>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
  components: {
  }
}
</script>
  
<style scoped lang="scss">
.app {
  display: inline-block;
  width: 390px;
  height: 722px;
  text-align: center;
  margin: 0 auto;
  opacity: .9;

  box-shadow: 0 0px 3px 4px rgba(215, 217, 222, 0.767);
  -webkit-box-shadow: 0 0px 3px 4px rgba(215, 217, 222, 0.767); //Google Chrome
  -moz-box-shadow: 0 0px 3px 4px rgba(215, 217, 222, 0.767); //Firefix
  -o-box-shadow: 0 0px 3px 4px rgba(215, 217, 222, 0.767); //opera
  -ms-box-shadow: 0 0px 3px 4px rgba(215, 217, 222, 0.767); //IE

  -webkit-transition: all .25s linear;
  -moz-transition: all .25s linear;
  -ms-transition: all .25s linear;
  -o-transition: all .25s linear;
  transition: all .25s linear;
}



.left {
  display: flex;
  height: 800px;
  background: url(./assets/allbackground.PNG);
}
</style>
  
  