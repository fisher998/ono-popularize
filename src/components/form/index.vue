<template>
    <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="mobile" :error="registerErrors.mobile">
                <el-input type="text" v-model.number="ruleForm.mobile" placeholder="请输入您的手机号"></el-input>
            </el-form-item>
            <div class="yzm-box">
                <el-form-item prop="vfCode" :error="registerErrors.vfCode">
                    <el-input class="vfCode" type="number" v-model="ruleForm.vfCode" placeholder="输入验证码"></el-input>
                </el-form-item>
                <div class="btnBox">
                    <button class="vfBtn" :disabled="time !== 0" @click.prevent="sendCode">{{ time === 0 ? '发送验证码' : `重发验证码(${ time < 10 ? '0' + time : time })` }}</button>
                </div>
            </div>
            <el-form-item prop="ivCode" :error="registerErrors.ivCode">
                <el-input type="text" v-model="ruleForm.ivCode" placeholder="输入邀请码(选填)"></el-input>
            </el-form-item>
            <div class="protocol-box">
                <el-form-item prop="protocol">
                    <el-checkbox v-model="ruleForm.protocol">
                    </el-checkbox>
                </el-form-item>
                <div class="text">
                    注册即表示您已阅读并同意<a href="https://www.ono.chat/ono/programme/index.html">《ONO社交网络共同纲领》</a>与<a href="https://www.ono.chat/ono/protocol/index.html">《ONO用户协议》</a>
                </div>
            </div>
        </el-form>
        <button class="regBtn" @click.prevent="register">注册并领取ONOT</button>
    </div>
</template>

<script>
import { reCode } from '../../assets/js/errorCode.js'
import { mobileReg } from '../../assets/js/validate.js';
import { register, sendVerifyCode } from '../../api/register.js';
export default {
    data () {
        var validateMobile = (rule, value, callback) => {
            if (!value) {
                callback(new Error('手机号不能为空'));
            } else if (!mobileReg.test(value)) {
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
        var validateVfCode = (rule, value, callback) => {
            if (!value) {
                callback(new Error('验证码不能为空'));
            } else if (value.length !== 4) {
                callback(new Error('请输入4位验证码'));
            } else {
                callback();
            }
        }
        var validateivCode = (rule, value, callback) => {
            if (value && value.length !== 4) {
                callback(new Error('请输入4位邀请码'));
            } else {
                callback();
            }
        }
        var validateProtocol = (rule, value, callback) => {
            if (value) {
                callback();
            } else {
                callback(new Error('请阅读并同意协议'));
            }
        }
        return {
            send: true,
            startTime: 60,
            time: 0,
            ruleForm: {
                mobile: null,
                vfCode: null,
                ivCode: null,
                protocol: true
            },
            registerErrors: {
                mobile: '',
                vfCode: '',
                ivCode: ''
            },
            rules: {
                mobile: [
                    { validator: validateMobile, trigger: 'blur' }
                ],
                vfCode: [
                    { validator: validateVfCode, trigger: 'blur' }
                ],
                ivCode: [
                    { validator: validateivCode, trigger: 'blur' }
                ],
                protocol: [
                    { validator: validateProtocol, trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        startBegin () {
            this.time = this.startTime;
            this.timer();
        },
        timer () {
            this.time--;
            if (this.time > 0) {
                setTimeout(() => {
                    this.timer();
                }, 1000);
            }
        },
        sendCode () {
            this.$refs['ruleForm'].validateField('mobile', error => {
                if (!error) {
                    this.registerErrors.mobile = '';
                    sendVerifyCode({ 'account': '86' + this.ruleForm.mobile }).then(res => {
                        console.log(res);
                        console.log(res.data.status.code)
                        switch (res.data.status.code) {
                            case 200:
                                this.startBegin();
                                break;
                            case 515:
                                this.registerErrors.mobile = '手机号已经注册';
                                this.$emit('alreadyRegister');
                                break;
                            default:
                                break;
                        }
                    })
                } else {
                    return false;
                }
            });
            
        },
        register () {
            this.$refs['ruleForm'].validate(valid => {
                if (valid) {
                    this.registerErrors.vfCode = '';
                    this.registerErrors.ivCode = '';
                    register({ 'code': this.ruleForm.vfCode, 'account': '86' + this.ruleForm.mobile, 'invite': this.ruleForm.ivCode }).then(res => {
                        console.log(res)
                        console.log(res.data.status.code)
                        switch (res.data.status.code) {
                            case 200:
                                this.$emit('registerSuccess');
                                break;
                            case 520:
                                this.registerErrors.ivCode = '邀请码错误';
                                break;
                            case 504:
                                this.registerErrors.vfCode = '手机验证码错误';
                                break;
                            case 515:
                                this.registerErrors.mobile = '账号已经存在';
                                this.$emit('alreadyRegister', 515);
                                break;
                            case 519:
                                this.registerErrors.ivCode = '邀请码使用次数不足';
                                break;
                            case 220:
                                this.registerErrors.ivCode = '邀请码错误';
                                break;
                            case 219:
                                this.registerErrors.ivCode = '邀请码数量不足';
                                break;
                            case 322:
                                this.registerErrors.mobile = '未在活动时间内注册';
                                break;
                            default:
                                break;
                        }
                    }).catch(error => {
                        
                    });
                } else {
                    console.log('error submit!!!');
                    return false;
                }
            })
            
        }
    }
}
</script>

<style lang="less" scoped>
.form {
    width: 6.29rem;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .yzm-box {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .el-form-item {
            width: 4.30rem!important;
            .vfCode {
                // width: 4.16rem;
                width: 100%;
            }
        }
        .btnBox {
            width: 2.12rem;
            height: 1.44rem;
            position: relative;
            .vfBtn {
                position: absolute;
                bottom: 0rem;
                left: -0.13rem;
                z-index: 5;
                width: 2.18rem;
                height: 0.88rem;
                border: none;
                outline: none;
                border-radius: 0.08rem;
                border: none;
                padding: 0;
                margin-bottom: 0.06rem;
                background-image: linear-gradient(90deg, #ee4f91 0%, #5666e9 100%), linear-gradient(#0091cd, #0091cd);
                color: #ffffff;
                font-size: 0.24rem;
            }
        }
    }
    .protocol-box {
        width: 100%;
        font-size: 0.24rem;
        height: 0.33rem;
        position: relative;
        .el-form-item {

            /deep/.el-form-item__content {
                line-height: 0rem!important;
            }
            .el-checkbox {
                .is-checked {
                    background: red;
                }
                .el-checkbox__label {
                    width: 100%;
                }
            }
        }
        .text {
            width: 6.00rem;
            padding-left: 0.4rem;
            text-align: left;
            color: #ffffff;
            position: absolute;
            top: -0.02rem;
            a {
                color: #ea5093;
                text-decoration: none;
                letter-spacing: 0;
            }
        }
    }
    .regBtn {
        width: 3.65rem;
        height: 0.7rem;
        border: none;
        outline: none;
        background-image: linear-gradient(90deg, #ee4f91 0%, #5666e9 100%), linear-gradient(#0091cd, #0091cd);
        background-blend-mode: normal, normal;
        border-radius: 0.08rem;
        font-size: 0.32rem;
        color: #ffffff;
        // margin-top: 0.52rem;
        margin: 0.82rem auto 0 auto;
        box-shadow: 0 0 0.25rem 0 #d5d5d5;
    }
}
</style>
