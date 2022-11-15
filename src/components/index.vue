<template>
    <div class="app" id="background">
        <div class="upper_list">
            <img src="@/assets/sound.png" class="sound">
            <img src="@/assets/change.png" class="sound">
            <img src="@/assets/prize.jpg" class="prize">
        </div>
        <div class="test_list">
            <h1 class="word">成就</h1>
        </div>

        <div class="restart">{{ English_name }}</div>
        <div class="line"></div>
        <div class="life">{{ Chinese_name }}</div>
        <router-link to="/about">
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
}

.word {
    padding-top: 0px;
    padding-left: 255px;
    font-size: 24px;
}

.restart {
    padding-left: 48px;
    padding-top: 110px;
    padding-bottom: 5px;
    width: 297px;
    height: 77px;
    color: rgba(149, 29, 29, 1);
    font-size: 72px;
    text-align: left;
    font-family: Microsoft YaHei;
}

.line {
    padding-left: 81px;
    width: 310px;
    height: 9px;
    background-color: rgba(149, 29, 29, 1);
}

.life {
    width: 200px;
    height: 74px;
    color: rgba(149, 29, 29, 1);
    font-size: 48px;
    padding-left: 105px;
    padding-top: 5px;
    font-family: YouYuan;
    font-weight: bold
}
</style>
  
  