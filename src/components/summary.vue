<template>
    <div>
        <Return_box></Return_box>
        <div class="accomplishment_box">
            <div class="accomplishment_blankbox"></div>

            <div class="accomplishment_text">
                <h1 class="summary_title">总结</h1>
            </div>
            <div class="accomplishment_linking">
                <img src="@/assets/prize.jpg" class="accomplishment_prize">
                <h1 class="word">成就</h1>
            </div>
        </div>
        <div class="blue_background">
            <comment
                comments="和大部分大学牲一样，体质下降了；每学期在各方面大起大落，还好有惊无险，整体还算努力，顺利考研，走上人生巅峰。个人魅力获得提升，不久后应该会获得对象一枚。钱包不小心空空了，在运用自己的财产方面还需进步哦。">
            </comment>
            <div class="summary_end">
                <button class="summary_circle">进入纪念册</button>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import Return_box from './return_box.vue';
import comment from './comment.vue';

export default {
    name: "app",
    data() {
        return {
        }
    },
    components: {
        Return_box,
        comment
    }
}
</script>

<style scoped lang="scss">
.accomplishment_box {
    background: url("@/assets/summary_background.png");
    width: 390px;
    height: 295px;
}

.accomplishment_blankbox {
    height: 160px;
}

.accomplishment_prize {
    padding-left: 150px;
    padding-top: 5px;
    width: 100px;
    height: 85px;
    float: right;
}

.accomplishment_linking {
    height: 135px;
    width: 120px;
    float: left;
}

.accomplishment_text {
    width: 270px;
    height: 135px;

    float: left;
}

.word {
    padding-top: 0px;
    padding-left: 50px;
    font-size: 20px;
    color: white;
    float: left;
}

.summary_title {
    padding-top: 40px;
    padding-left: 140px;
    font-size: 48px;
    color: rgba(141, 161, 43, 1);
    float: left;
    font-family: YouYuan;
    font-weight: bold;
}

.blue_background {
    background: url("@/assets/blue_background.png");
    height: 387px;
}

.summary_end {
    width: 390px;
    height: 88px;
}

.summary_circle {
    border-radius: 150px/50px;
    border: 1px white solid;
    background-color: rgba(255, 255, 255, 0.2);
    width: 246px;
    height: 68px;
    margin-left: 72px;
    margin-top: 8px;
    font-size: 28px;
    text-align: center;
    font-family: Arial;
    line-height: 68px;
    color: #FFFFFF;
}
</style>

