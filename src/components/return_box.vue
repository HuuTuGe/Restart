<template>
    <div class="return_box">
        <router-link :to="from">
            <img src="../assets/antFill-home.svg" class="return_icon" v-if="home">
            <img src="../assets/return_icon.png" class="return_icon" v-if="back">
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'return_box',
    props: {
        from: { required: true, type: String, default: "/" }
    },
    data() {
        return {
            home: false,
            back: false
        }
    },
    mounted() {
        if (this.from == "/") {
            this.home = true
        }
        else {
            this.back = true
        }
    }

}); 
</script>
  
<style scoped lang="scss">
.return_box {
    width: 390px;
    height: 40px;
}

.return_icon {
    padding-left: 10px;
    padding-top: 10px;
    height: 30px;
    width: 30px;
    float: left;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

}

.return_icon:hover,
.return_icon:focus,
.return_icon:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
}
</style>
  
  