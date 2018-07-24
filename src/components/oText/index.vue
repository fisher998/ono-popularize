<template>
    <div class="text-box">
        <p class="text" :class="size">
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        size: {
            type: String,
            default: 'normal'
        }
    }
}
</script>

<style lang="less" scoped>
.text-box {
    width: 100%;
    height: auto;
    margin-top: 0.35rem;
    .text {
        text-align: center;
        padding: 0 0.3rem;
        color: #ffffff;
    }
}
.normal {
    font-size: 0.28rem;
}
</style>
