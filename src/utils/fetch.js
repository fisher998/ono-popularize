import axios from '_axios@0.18.0@axios';
import config from './config';
const {
    BASE_DEV,
    BASE_PRO
} = config;
let baseURL = process.env.NODE_ENV === 'development' ? BASE_DEV : BASE_PRO;
console.log(process.env.NODE_ENV);
const fetch = axios.create({
    baseURL,
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