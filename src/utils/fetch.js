import axios from '_axios@0.18.0@axios';

const fetch = axios.create({
    baseURL: 'http://47.93.241.33:8001/invite',
    timeout: 5 * 1000,
    headers: {
        'Accept': 'application/json, text/javascript, *!/!*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
// 请求拦截
fetch.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// 访问拦截
fetch.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

export default fetch;