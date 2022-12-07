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
  border: 1px solid #000;
  text-align: center;
  margin: 0 auto;
}

.left {
  display: flex;
  height: 800px;
  background: url(./assets/allbackground.PNG);
}
</style>
  
  