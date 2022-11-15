<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import index from '@/components/index.vue'
export default {
  name: 'app',
  components: {
    index
  }
}
</script>
  
<style scoped lang="scss">
  .app {
    width: 390px;
    height: 722px;
    border: 1px solid #000;
    text-align: center;
    margin: 0 auto;
  }
</style>
  
  