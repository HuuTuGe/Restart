<template>
    <div>
        <div>
            <Return_box from="/"></Return_box>
        </div>
        <div class="accomplishment_box">
            <div class="accomplishment_blankbox"></div>

            <div class="accomplishment_text">
                <h1 class="summary_title">总结</h1>
            </div>
            <div class="accomplishment_linking">
                <router-link to="/AchievementList">
                    <img src="@/assets/prize.jpg" class="accomplishment_prize">
                    <h1 class="word">成就</h1>
                </router-link>
            </div>
        </div>
        <div class="blue_background">
            <comment
                :comments="(msg0 + msg1 + comment1 + msg2 + comment2 + msg3 + comment3 + msg4 + comment4 + msg5 + comment5)">
            </comment>
            <div class="summary_end">
                <router-link to="/Anniversary">
                    <button class="summary_circle">进入纪念册</button>
                </router-link>
                <button class="summary_circle" @click="restart">立即重开</button>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import Return_box from '../components/return_box.vue';
import comment from '../components/comment.vue';
import { useLifeStore, useUserStore } from '@/state/store'
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia';

export default defineComponent({
    name: "app",
    setup() {
        const propStore = useLifeStore()
        const userStore = useUserStore()
        const {restartNum} = storeToRefs(userStore)
        return { propStore,restartNum }
    },
    data() {
        return {
            msg0: '这一路福大人生，',
            msg1: '关于你的脑子，',
            comment1: '',
            msg2: '那体质健康呢，',
            comment2: '',
            msg3: '再谈谈你的个人魅力吧，',
            comment3: '',
            msg4: '那你有钱嘛？',
            comment4: '',
            msg5: '最后，关于你大学四年的心理状态呢。',
            comment5: '',
        }
    },
    components: {
        Return_box,
        comment
    },
    created() {
        //智力
        if (this.propStore.props[0] <= 12)
            this.comment1 = '你的智力水平是最稳的，一直保持低水平，偶尔会吃吃意大利面拌四十二号混凝土。'
        else if (13 <= this.propStore.props[0] && this.propStore.props[0] <= 27) {
            this.comment1 = '你的小脑袋瓜还算聪明，但也没有很聪明，时常载着理发店是很正常的事情。'
        }
        else if (28 <= this.propStore.props[0]) {
            this.comment1 = '你的小脑袋瓜还算聪明，但也没有很聪明，时常载着理发店是很正常的事情。'
        }
        // 体质
        if (this.propStore.props[1] <= 12)
            this.comment2 = '程女士说得对，你的身体素质好像一直都不太行，细狗。'
        else if (13 <= this.propStore.props[1] && this.propStore.props[1] <= 28) {
            this.comment2 = '你的身体素质勉勉强强过得去，平平无奇，但也不至于随时毙命。'
        }
        else if (28 <= this.propStore.props[1]) {
            this.comment2 = '你是个纯爱战神，完美的身材甚至会吸引同性喜欢。'
        }
        // 魅力
        if (this.propStore.props[2] <= 12)
            this.comment3 = '说你的外貌像张飞一样，并不过分。'
        else if (13 <= this.propStore.props[2] && this.propStore.props[2] <= 28) {
            this.comment3 = '你泯然众人矣，王菲回头在人群中看你一眼也看不见你。'
        }
        else if (28 <= this.propStore.props[2]) {
            this.comment3 = '你的言行举止就透露着一个词，那就是“优雅”。'
        }
        // 财富
        if (this.propStore.props[3] <= 12)
            this.comment4 = '有上顿没下顿的日子，充斥再你的大学生活里。'
        else if (13 <= this.propStore.props[3] && this.propStore.props[3] <= 28) {
            this.comment4 = '你的大学只是勉勉强强的温饱生活,偶尔星期四也会去迟迟肯德基。'
        }
        else if (28 <= this.propStore.props[3]) {
            this.comment4 = '马内对于你来说只是身外之物，校园卡里面都有好'
        }
        // 心情
        if (this.propStore.props[4] <= 12)
            this.comment5 = '你的心情时常起起起又跌跌跌跌跌跌跌.....'
        else if (13 <= this.propStore.props[4] && this.propStore.props[4] <= 28) {
            this.comment5 = '心理状态还算平稳，但也无法面对较大的困难。'
        }
        else if (28 <= this.propStore.props[4]) {
            this.comment5 = '你的快乐阈值非常低，无论做什么你都会很开心。'
        }
    },
    methods: {
        restart() {
            this.restartNum ++
            this.$router.push('/')
            //TODO 向后端保存用户状态
        }
    }
})
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Pacifico);

@keyframes shining {
    from {
        text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
            0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
            0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
            0 0 54px rgba(15, 115, 223, 0.9);
    }

    to {
        text-shadow: 0 0 6px rgba(182, 211, 207, 1),
            0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
            0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
            0 0 60px rgba(15, 115, 223, 1);
    }
}

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
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;

}

.accomplishment_linking:hover,
.accomplishment_linking:focus,
.accomplishment_linking:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
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
    width: 390px;
}

.summary_end {
    width: 390px;
    height: 88px;
}


.summary_circle {
    border-radius: 150px/50px;
    border: 1px white solid;
    background-color: rgba(255, 255, 255, 0.2);
    width: 150px;
    height: 68px;
    margin-top: 8px;
    font-size: 24px;
    margin-left: 30px;
    text-align: center;
    font-family: Arial;
    line-height: 68px;
    color: #cce7f8;
    float: left;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    text-transform: uppercase;
    animation: shining 0.1s alternate infinite;
}

.summary_circle:hover,
.summary_circle:focus,
.summary_circle:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
}
</style>


