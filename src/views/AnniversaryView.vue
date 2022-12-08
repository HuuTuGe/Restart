<template>
    <div>
        <Return_box from="/summary"></Return_box>
        <div class="wrapper">
            <div class="table"></div>
            <div class="content">
                <month months="八月上"></month>
                <month months="八月上"></month>
                <month months="八月上"></month>
                <month months="八月上"></month>
                <month months="八月上"></month>
                <month months="八月上"></month>
                <month months="八月上"></month>
            </div>
        </div>
    </div>
</template>
   

<script lang="ts">
//导入模块

import Return_box from '../components/return_box.vue';
import month from '../components/month.vue';

export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null
        };
    },
    components: {
        Return_box,
        month
    }

}

</script>

<style scoped lang="scss">
// 隐藏滚动条
.el-tab-pane::-webkit-scrollbar {
    width: 0 !important;
    height: 0px !important;
}

.wrapper {
    height: 681px;
    overflow: hidden; // 超出部分隐藏
    overflow-y: scroll; // 设置y轴方向的滚动
    border-top: 1px solid #ffffff;
    box-shadow: darkgrey 10px 10px 30px 5px; //边框阴影

}

.wrapper::-webkit-scrollbar {
    background-color: #f8f8f800;
}

.wrapper::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border-radius: 100px;
}

.wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
}

.wrapper::-webkit-scrollbar-corner {
    background-color: rgba(255, 255, 255, 0);
}

.wrapper::-webkit-scrollbar {
    width: 20px;
    transition: all 2s;
}



.content {
    height: 200px;
    width: 100%;
}
</style>

