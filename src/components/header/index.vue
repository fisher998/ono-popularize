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
    height: 7.5rem;
    .header {
        margin: 0 auto;
        width: 100%;
        height: 7rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        &-bg {
            width: 6.59rem;
            height: 5.99rem;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: 0 0;
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
        }
        &-bg2 {
            background-image: url(../../images/banner2.png);
        }
        &-bg3 {
            background-image: url(../../images/banner3.png);
        }
    }
}

</style>
