import fetch from '../utils/fetch';

/*
@fun            方法 ‘user_register_china’
@account        电话号码 ‘86111111’
@invite         邀请码 'xxxx'
@channl         途径 ‘1’
*/
export function register ({ fun = 'user_register_china', code, account = '8613458401504', invite = 'AAAAA', channl = '1' }) {
    const data = {
        fun,
        account,
        invite,
        channl,
        code
    };
    return fetch({
        method: 'post',
        data
    });
}
/*
@type           1手机号 2邮箱
@account        86手机号
@fun            send_verify_code
*/
export function sendVerifyCode ({ fun = 'send_verify_code', account, type = '1', country_code = 'CN' }) {
    const data = {
        fun,
        account,
        type,
        country_code
    };
    return fetch({
       method: 'post',
       data 
    });
}