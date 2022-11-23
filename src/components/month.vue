<template>
    <div class="outline">
        <div class="month_text">
            <div class="month_content">
                <div class="useless"></div>
                <div class="line">{{ months }}</div>
            </div>
        </div>
        <div class="photo_text">
            <div class="photo_content">
            </div>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    name: "app",
    data() {
        return
        {

        }
    },
    props: {
        months: String,
    },
}
</script>

<style scoped lang="scss">
.month_text {
    border-left: 8px solid #0050B3;
    height: 171px;
    margin-left: 23px;
    width: 72px;
    float: left;
}

.photo_text {
    float: left;
    width: 256px;
}

.photo_content {
    width: 236px;
    height: 144px;
    border-radius: 6px 6px 10px 10px;
    border: 4px solid rgba(0, 80, 179, 1);
    background-image: url("@/assets/blue_background.png");
}

.line {
    height: px;
    border-bottom: 5px solid #0050B3;
    text-align: center;
}

.useless {
    height: 60px;
}

.outline {
    height: 171px;
}
</style>

