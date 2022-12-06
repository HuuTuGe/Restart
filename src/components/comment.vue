<template>
    <div>
        <div class="summary_text">
            <div class="summary_content" v-resize-text>
                <p> {{ comments }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "app",
    props: {
        comments: String,
    },
}
</script>

<style scoped lang="scss">
.summary_text {
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 1px;
    padding-right: 25px;
    padding-left: 25px;
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
    height: 280px;
    width: 310px;
    color: rgba(251, 247, 247, 1);
    text-align: left;
    font-family: PingFangSC-regular;
    font-size: 16px
}
</style>

