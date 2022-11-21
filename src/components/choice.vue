<template>
    <div>
        <Return_box></Return_box>
        <div class="major_choice">选择专业方向：</div>
        <Profession msg="文" onclick="choice1()"></Profession>
        <div class="major_margin"></div>
        <Profession msg="理" onclick="choice2()"></Profession>
        <div class="major_margin"></div>
        <Profession msg="工" onclick="choice3()"></Profession>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
import Profession from './profession.vue';
import Return_box from './return_box.vue';

export default {
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
                        id: 1
                    }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        choice2() {
            axios
                .get('/academychoice', {
                    params: {
                        ID: 2
                    }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        choice3() {
            axios
                .get('/academychoice', {
                    params: {
                        ID: 3
                    }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
}
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