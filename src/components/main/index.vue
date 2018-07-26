<template>
    <div class="ono">
        <div class="ono-main1">
            <Header :type="bgType" />
            <title-content v-if="isRegisterSuccess" ></title-content>
            <o-form v-if="isRegisterSuccess" @registerSuccess="registerSuccess" @alreadyRegister="alreadyRegister"></o-form>
            <p v-if="!isRegisterSuccess" class="ono-main1-title">史上最大规模的撒币活动即将开始！</p>
        </div>
        <div class="ono-main2" :class="{ 'ono-main2-bg': isRegisterSuccess }">
            <Title size="large">{{ isRegisterSuccess ? '妙笔生金，价值只属于你' : 'ONO 发布会『万人大空投』' }}</Title>
            <o-text size="normal">
                {{
                    isRegisterSuccess ?
                    `你可以仅通过生产内容，直接获得收益。ONO是基于区块链技术的新型社交网络，用户可以自由地分享和获取有价值的内容。为了保护内容原创者的知识产权，所创造的优质内容将获得匹配的价值通证作为激励。` : `ONO发布会将于七月26日14时隆重开启，届时史上最大规模的『ONOT 空投行动』也将于发布会时间同步开启，精彩不容错过，错过再等一年!`
                }}
            </o-text>
        </div>
        <div class="ono-main3">
            <Title size="large">{{ isRegisterSuccess ? '用户至上，始终如一' : '参与方法' }}</Title>
            <o-text size="normal">
                {{
                    isRegisterSuccess ? 
                    `你并非一件商品。用户是ONO社交网络最宝贵的财富，在这里，每一位个体都将被珍惜。ONO社交网络的全体开发组成员宣誓，这里将没有商业公司的独裁垄断，也没有破坏任意个体体验的利益手段。ONO的发展将通过众人支持，保持平等价值观永不改变。` : `下载 ONO DAPP-完成登录-首页空投入口参与`
                }}
            </o-text>
        </div>
        <div class="ono-main4" :class="isRegisterSuccess ? 'pd1' : 'pd2'">
            <qr-code v-if="isRegisterSuccess"></qr-code>
            <Download v-else :status="status"></Download>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import wx from 'weixin-js-sdk';
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
            isRegisterSuccess: true,
            status: null
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
            window.scrollTo(0, 0)
        },
        alreadyRegister (status) {
            this.status = status;
            this.bgType = 'bg2';
            this.isRegisterSuccess = false;
            window.scrollTo(0, 0)
        },
        wxShare () {
            const getShareToken = {
            url: 'https://api.ono.chat/api/v1/share/get_token',
            type: 'post'
            }
            axios({
                method: 'post',
                url: getShareToken.url,
                params: {
                    url: window.location.href
                }
            }).then((res, req) => {
                let data = res.data;
                console.log(res.data)
                if(data.status.code === 0) {
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: 'wxadd1f08bb1406b3e', // 必填，公众号的唯一标识
                        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.data.noncestr, // 必填，生成签名的随机串
                        signature: data.data.signature, // 必填，签名
                        // jsApiList: [] // 必填，需要使用的JS接口列表
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'onMenuShareQZone'
                        ]
                    })

                    wx.ready(() => {
                        let options = {
                            title: 'ONO注册领海量ONOT福利',
                            desc: '邀你共建去中心化社交网络。注册领100 ONOT, 邀请最高再领10000 ONOT。',
                            link: 'https://www.joinono.com/ono/ono-exchange',
                            imgUrl: 'https://www.ono.chat/static/public/img/default_share_icon.png',
                            trigger: function (res) {},
                            success: function (res) {},
                            cancel: function (res) {},
                            fail: function (res) {}
                        }
                        wx.onMenuShareTimeline(options) // 分享到朋友圈
                        wx.onMenuShareAppMessage(options) // 分享给朋友
                        wx.onMenuShareQQ(options) // 分享给qq
                        wx.onMenuShareWeibo(options) // 分享给微博
                        wx.onMenuShareQZone(options) // 分享给空间
                    })
                }
            })

        }
    },
    created () {
        this.wxShare();
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
        background-position: 0 -0.5rem, center 7.6rem;
         .ono-main1-title {
            font-size: 0.44rem;
            text-align: center;
            color: #ffffff;
            padding: 1.00rem 0 0.86rem 0;
        }
    }
    .ono-main2 {
        width: 100%;
    }
    .ono-main2-bg {
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
