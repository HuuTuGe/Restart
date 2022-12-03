<template>
    <router-link to="/SelectTalent">
        <button class="profession_box">
            <div class="test_center">{{ msg }}</div>
        </button>
    </router-link>
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

.profession_box:hover,
.profession_box :focus,
.profession_box :active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
  
  