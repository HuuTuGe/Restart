<template>
    <button class="profession_box">
        <div class="test_center">{{ msg }}</div>
    </button>
</template>
<script lang="ts">
export default {
    name: 'app',
    props: {
        msg: String,
    },
}
</script>
  
<style scoped lang="scss">
.profession_box {
    width: 269px;
    height: 99px;
    padding: 2px;
    border-radius: 10px;
    background-image: linear-gradient(white), linear-gradient(45deg, #0083e8, #051d46, #0083e8);
    background-clip: content-box, padding-box;
    font-size: 36px;
}
</style>
  
  