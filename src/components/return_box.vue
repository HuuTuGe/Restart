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
        from: {required: true, type: String, default: "/"}
    },
    data() {
        return {
            home: false,
            back: false
        }
    },
    mounted() {
        if (this.from == "/" ) {
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
}
</style>
  
  