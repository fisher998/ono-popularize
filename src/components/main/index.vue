<template>
    <div class="ono">
        <div class="ono-main1">
            <Header :type="bgType" />
            <title-content></title-content>
            <o-form v-if="isRegisterSuccess" @registerSuccess="registerSuccess" @alreadyRegister="alreadyRegister"></o-form>
        </div>
        <div class="ono-main2">
            <Title size="large">{{ isRegisterSuccess ? '妙笔生金，价值只属于你' : 'ONO 发布会『万人大空投』' }}</Title>
            <o-text size="normal">
                {{
                    isRegisterSuccess ?
                    `你可以仅通过生产内容，直接获得收益。ONO是基于区块链技术的新型
                    社交网络，用户可以自由地分享和获取有价值的内容。为了保护内容原创
                    者的知识产权，所创造的优质内容将获得匹配的价值通证作为激励。` : `ONO 
                    发布会将于七月26日14时隆重开启，届时史上最大规模的『ONOT 空投行
                    动』也将于发布会时间同步开启，精彩不容错过，错过再等一年！`
                }}
            </o-text>
        </div>
        <div class="ono-main3">
            <Title size="large">{{ isRegisterSuccess ? '用户至上，始终如一' : '参与方法' }}</Title>
            <o-text size="normal">
                {{
                    isRegisterSuccess ? 
                    `你并非一件商品。用户是ONO社交网络最宝贵的财富，在这里，每一位个体都将被珍惜。ONO
                    社交网络的全体开发组成员宣誓，这里将没有商业公司的独裁垄断，也没有破坏任意个体体验
                    的利益手段。ONO的发展将通过众人支持，保持平等价值观永不改变。` : `下载 ONO DAPP-
                    完成登录-首页空投入口参与`
                }}
            </o-text>
        </div>
        <div class="ono-main4" :class="isRegisterSuccess ? 'pd1' : 'pd2'">
            <qr-code v-if="isRegisterSuccess"></qr-code>
            <Download v-else></Download>
        </div>
    </div>
</template>

<script>
import Header from '../header';
import Title from '../title';
import TitleContent from '../titleContent';
import OForm from '../form';
import OText from '../oText';
import QrCode from '../qrCode';
import Download from '../download';
export default {
    data () {
        return {
            bgType: 'bg1',
            isRegisterSuccess: true
        }
    },
    components: {
        Header,
        Title,
        TitleContent,
        OForm,
        OText,
        QrCode,
        Download
    },
    methods: {
        registerSuccess () {
            this.bgType = 'bg3';
            this.isRegisterSuccess = false;
        },
        alreadyRegister () {
            this.bgType = 'bg2';
            this.isRegisterSuccess = false;
        }
    }
}
</script>

<style lang="less" scoped>
.ono {
    width: 100%;
    background-color: #0e2033;
    .ono-main1 {
        width: 100%;
        background-image: url(../../images/guang.png), url(../../images/map.png);
        background-size: 100% auto, 6rem 3rem;
        background-repeat: no-repeat, no-repeat;
        background-position: 0 -0.1rem, center 7.6rem;
    }
    .ono-main2 {
        width: 100%;
        background-image: url(../../images/pigcion.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: 0 0;
        padding-top: 6rem;
    }
    .ono-main3 {
        width: 100%;
        background-image: url(../../images/boxcoin.png);
        background-size: 1.79rem 2.01rem;
        background-repeat: no-repeat;
        background-position: center 0.53rem;
        padding-top: 3.03rem;
    }
    .ono-main4 {
        width: 100%;
        padding-bottom: 3.1rem;
        background-image: url(../../images/bgfoot.png);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center bottom;
    }
    .pd1 {
        padding-top: 1.65rem;
    }
    .pd2 {
        padding-top: 1.01rem;
    }
}

</style>
