<template>
  <div class="pro_item">
    {{prop_name}}：{{num}}
  </div>
</template>
<script>
export default {
  name: 'pro_item',
  props: {
    prop_name: String,
    num: Number
  }
}
</script>

<style scoped>

</style>