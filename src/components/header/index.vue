<template>
<div class="header-box">
    <div class="header">
        <div class="header-bg" :class="'header-' + type">
            <div class="airplane"></div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="less" scoped>
.header-box {
    width: 100%;
    min-height: 5.8rem;
    // height: 6.3rem;
    .header {
        margin: 0 auto;
        width: 100%;
        height: 5.8rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        &-bg {
            // margin-top: 0.4rem;
            width: 6.59rem;
            height: 5.99rem;
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
            .airplane {
                width: 1rem;
                height: 1rem;
                background-image: url(../../images/helicopter.png);
                background-size: 1rem 1rem;
                position: absolute;
                top: 1rem;
                right: 0rem;
                z-index: 1;
            }
        }
        &-bg1 {
            background-image: url(../../images/banner1.png);
            background-size: 100% 100%;
        }
        &-bg2 {
            background-image: url(../../images/banner2.png);
            background-size: 100% 100%;
            margin-top: 0.6rem;
        }
        &-bg3 {
            background-image: url(../../images/banner3.png);
            background-size: 100% 100%;
            margin-top: 0.6rem;
        }
    }
}

</style>
