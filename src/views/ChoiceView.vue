<template>
    <div>
        <Return_box from="/"></Return_box>
        <div class="major_choice">选择专业方向：</div>
        <Profession msg="文" ></Profession>
        <div class="major_margin"></div>
        <Profession msg="理" ></Profession>
        <div class="major_margin"></div>
        <Profession msg="工" ></Profession>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script lang="ts">
import Profession from '../components/profession.vue';
import Return_box from '../components/return_box.vue';
import { defineComponent } from 'vue'
import { api } from "@/api/api";
import axios from 'axios'


export default defineComponent({
    name: "app",
    data() {
        return {
        };
    },
    components: {
        Profession,
        Return_box
    },
    method: {
        
    }
})
</script>

<style scoped lang="scss">
.major_choice {
    padding-left: 9px;
    padding-top: 23px;
    width: 343px;
    height: 92px;
    color: rgba(16, 16, 16, 1);
    font-size: 36px;
    text-align: left;
    font-family: YouYuan;
    font-weight: bold;
}

.major_margin {
    height: 65px;
}
</style>