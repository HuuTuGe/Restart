<template>
    <div id="background">
        <div class="upper_list">
            <img src="@/assets/sound.png" class="sound">
            <img src="@/assets/change.png" class="change">
            <div class="prizeblank"></div>
            <router-link to="/Success">
                <img src="@/assets/prize.jpg" class="prize">
            </router-link>
        </div>
        <div class="voice_list"></div>
        <h1 class="word">成就</h1>

        <img src="@/assets/RESTART@1x.png" class='restart' />
        <img src='@/assets/线条@1x.png' class='line' />
        <img src="@/assets/福大人生@1x.png" class='life' />
        <router-link to="/Choice">
            <img src="@/assets/play.png" class="play">
        </router-link>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useSourceStore } from "@/state/store";
import { api } from '@/api/api'
import router from "@/router";
export default defineComponent({
    name: 'app',
    data() {
        return {
        }
    },
    setup() {
        const gameSource = useSourceStore()
        api.getGameSourceData()
            .then(data => {
                gameSource.init(data)
            })
    },
    watch: {
        '$route': function () {
            if (this.$route.name === 'choice') {
                router.push('/Choice');
            }
        }
    }

})
</script>
  
<style scoped lang="scss">
.line {
    left: 41px;
    top: 360px;
    width: 310px;
    height: NaNpx;
    border: 9px solid rgba(149, 29, 29, 1);
}

.app {
    width: 390px;
    height: 722px;
    border: 1px solid #000;
    text-align: center;
    margin: 0 auto;
    background-color: #f7f7f7;
}

.upper_list {
    width: 390px;
    height: 85px;
}

.voice_list {
    width: 270px;
    height: 85px;
    float: left;
    position: fixed;
}

.test_list {
    width: px;
    height: 10px;
    float: left;
    background-color: #000;
}

body {
    font-family: ”Microsoft YaHei”, Arial, Helvetica, sans-serif, ”宋体”;
}

.prizeblank {
    width: 150px;
    float: left;
    height: 85px;
}

.prize {
    padding-top: 15px;
    width: 108px;
    height: 85px;
    float: left;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}

.prize:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
}

.prize:hover,
.prize:focus,
.prize:active {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    /* move the element up by 5px */
}

.prize:hover:before,
.prize:focus:before,
.prize:active:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}

.sound {
    padding-left: 20px;
    padding-top: 15px;
    width: 40px;
    height: 40px;
    float: left;
}

.change {
    padding-left: 20px;
    padding-top: 15px;
    width: 40px;
    height: 40px;
    float: left;
}


.play {
    text-align: center;
    padding-top: 80px;
    width: 178px;
    height: 72px;
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

.play:hover,
.play:focus,
.play:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.word {
    padding-top: 0px;
    padding-left: 255px;
    font-size: 24px;
}

.restart {
    padding-left: 10px;
    padding-top: 90px;
    padding-bottom: 5px;
    width: 297px;
    height: 77px;
    color: rgba(149, 29, 29, 1);
    font-size: 72px;
    text-align: left;
    font-family: Microsoft YaHei;
}

.life {
    width: 200px;
    height: 74px;
    color: rgba(149, 29, 29, 1);
    font-size: 48px;
    padding-left: 15px;
    padding-top: 5px;
    font-family: YouYuan;
    font-weight: bold
}
</style>
  
  