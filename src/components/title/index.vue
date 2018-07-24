<template>
    <div class="title">
        <p :class="size">
            <slot></slot>
        </p>
        
        <div class="icon"></div>
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
.title {
    width: auto;
    height: auto;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .icon {
	    width: 1rem;
        height: 0.04rem;
        background-color: #ea5093;
        border-radius: 0rem;
        margin-top: 0.1rem;
    }
    .normal {
        font-size: 0.24rem;
    }
    .large {
        font-size: 0.36rem;
    }
}
</style>
