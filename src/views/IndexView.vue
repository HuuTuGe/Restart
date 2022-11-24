<template>
    <div id="background">
        <div class="upper_list">
            <img src="@/assets/sound.png" class="sound">
            <img src="@/assets/change.png" class="sound">
            <router-link to="/Success">
                <img src="@/assets/prize.jpg" class="prize">
            </router-link>
        </div>
        <div class="test_list">
            <h1 class="word">成就</h1>
        </div>

        <img src="@/assets/RESTART@1x.png" class='restart' />
        <img src='@/assets/线条@1x.png' class='line' />
        <img src="@/assets/福大人生@1x.png" class='life' />
        <router-link to="/Choice">
            <img src="@/assets/play.png" class="play">
        </router-link>

        <index></index>
    </div>
</template>
<script lang="ts">
export default {
    name: 'app',
    data() {
        return {
            English_name: 'RESTART',
            Chinese_name: '福大人生',
        }
    }

}
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

.test_list {
    width: 390px;
    height: 10px;
}

body {
    font-family: ”Microsoft YaHei”, Arial, Helvetica, sans-serif, ”宋体”;
}

.prize {
    padding-left: 150px;
    padding-top: 15px;
    width: 108px;
    height: 85px;
    float: left;
}

.sound {
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
    padding-top: 110px;
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
  
  