<template>
    <div class="download-box">
        <div class="download">
            <button class="downloadBtn" @click="downloadONO">下载ONO DAPP</button>
            <div class="p-box" v-if="status !== 515">
                <p class="download-text1">已为你解锁100个邀请名额</p>
                <p class="download-text2">完成邀请，最多可得<span class="num">10000</span>个ONOT</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: Number,
            default: null
        }
    },
    data () {
        return {
            
        }
    },
    methods: {
        downloadONO () {
            window.open('https://www.ono.chat/download/?v=1', '_blank');
        }
    }
}
</script>

<style lang="less" scoped>
.download-box {
    .download {
        display: flex;
        flex-direction: column;
        align-items: center;
        .downloadBtn {
            width: 3.65rem;
            height: 0.7rem;
            background-image: linear-gradient(90deg, 
                #ee4f91 0%, 
                #5666e9 100%), 
            linear-gradient(
                #0091cd, 
                #0091cd);
            background-blend-mode: normal, 
                normal;
            border-radius: 0.08rem;
            border: none;
            outline: none;
            color: #ffffff;
            font-size: 0.34rem;
            padding: 0;
            box-shadow: 0 0 0.25rem 0 #d5d5d5;
        }
        .p-box {
            width: 100%;
            height: 0.96rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 0.67rem;
            .download-text1, .download-text2 {
                font-size: 0.28rem;
                color: #ffffff;
                .num {
                    font-size: 0.48rem;
                }
            }
            .download-text1 {

            }
        }
        
    }
}
</style>
