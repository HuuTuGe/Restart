<template>
    <div>
        <Return_box from="/"></Return_box>
        <div class="major_choice">选择专业方向：</div>
        <Profession msg="文" onclick="choice1()"></Profession>
        <div class="major_margin"></div>
        <Profession msg="理" onclick="choice2()"></Profession>
        <div class="major_margin"></div>
        <Profession msg="工" onclick="choice3()"></Profession>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script lang="ts">
import Profession from '../components/profession.vue';
import Return_box from '../components/return_box.vue';
import { defineComponent } from 'vue'
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
        choice1() {
            axios
                .get('/academychoice', {
                    params: {
                        academy_type:'文'
                    }
                })
                .then(function (response:any) {
                    console.log(response);
                })
                .catch(function (error:any) {
                    console.log(error);
                })
        },
        choice2() {
            axios
                .get('/academychoice', {
                    params: {
                        academy_type:'理'
                    }
                })
                .then(function (response: any) {
                    console.log(response);
                })
                .catch(function (error: any) {
                    console.log(error);
                })
        },
        choice3() {
            axios
                .get('/academychoice', {
                    params: {
                        academy_type:'工'
                    }
                })
                .then(function (response: any) {
                    console.log(response);
                })
                .catch(function (error: any) {
                    console.log(error);
                })
        }
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