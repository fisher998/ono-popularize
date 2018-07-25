<template>
    <div class="titleContent-box">
        <div class="titleContent">
            <!-- <p class="content1">
                币友福利，最高领 10万 ONOT
            </p>
            <p class="content2">
                注册领100 ONOT,邀请最高再领10万
            </p> -->
            <Title size="normal">注册属于你的 ONO ID</Title>
        </div>
    </div>
</template>

<script>
import Title from '../title';
export default {
    data () {
        return {

        }
    },
    components: {
        Title
    }
}
</script>

<style lang="less" scoped>
.titleContent-box {
    width: 100%;
    .titleContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        .content1 {
            font-size: 0.4rem;
        }
        .content2 {
            font-size: 0.24rem;
            margin-top: 0.36rem;
            margin-bottom: 1.06rem;
        }
    }
}
</style>
