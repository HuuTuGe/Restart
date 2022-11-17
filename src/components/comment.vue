<template>
    <div>
        <div class="summary_text">
            <div class="summary_content">
                <p> {{ comments }}</p>
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
        comments: String,
    },
}
</script>

<style scoped lang="scss">
.summary_text {
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 31px;
    padding-right: 46px;
    padding-left: 46px;
    font-weight: bold;
    color: white;
    background:
        linear-gradient(to top, rgb(186, 186, 186), #FFFFFF 2px, transparent 2px),
        linear-gradient(to right, rgb(186, 186, 186), #FFFFFF 2px, transparent 2px),
        linear-gradient(to bottom, rgb(186, 186, 186), #FFFFFF 2px, transparent 2px),
        linear-gradient(to left, rgb(186, 186, 186), #FFFFFF 2px, transparent 2px);
    background-color: rgba(255, 255, 255, 0.2);
}

.summary_content {
    height: 250px;
    width: 250px;
    color: rgba(251, 247, 247, 1);
    font-size: 18px;
    text-align: left;
    font-family: PingFangSC-regular;
}
</style>

