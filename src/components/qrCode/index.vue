<template>
    <div class="qr-code-box">
        <div class="qr">
            <div class="qr-code-left">
                <img src="../../images/xuke.jpg" alt="" class="qr-code">
                <p class="q-text">微信关注 ONOXUKE</p>
            </div>
            <div class="qr-code-right">
                <img src="../../images/ono.png" alt="" class="qr-code">
                <p class="q-text">DAPP下载</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.qr-code-box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    .qr {
        width: 4.96rem;
        height: 2.59rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .qr-code-left, .qr-code-right {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .qr-code {
                width: 2.08rem;
                height: 2.11rem;
                border: 1px solid #ffffff;
            }
            .q-text {
                font-size: 0.18rem;
                color: #ffffff;
            }
        }
    }
}
</style>
