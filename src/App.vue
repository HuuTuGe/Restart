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

</style>
  
  