const errorCode = {
    '200': '注册成功',
    '501': '手机号格式错误',
    '515': '手机号已经注册',
    '219': '邀请码数量不足',
    '220': '邀请码错误',
    '321': '用户未注册',
    '322': '未在活动时间内注册',
    '323': '登录错误'
};
export function reCode (code) {
    return errorCode[code];
};
