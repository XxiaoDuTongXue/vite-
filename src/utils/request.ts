// 二次封装：使用请求响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 创建axios实例
const request = axios.create({
    // baseURL: import.meta.env.VITE_APP_BASE_API,
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})

// 使用请求拦截器
request.interceptors.request.use((config) => {
    // console.log(config.headers.Authorization);
    // 返回配置对象
    return config;
})


// 响应拦截器
request.interceptors.response.use((response) => {
    if (response.status === 200) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data)
    }
    // return response.data
}, (error) => {
    // 信息
    let message = ''
    let status = error.response.status


    // http状态码
    switch (status) {
        case 401:
            message = 'token过期'
            break;
        case 403:
            message = '无权访问'
            break;
        case 404:
            message = '请求地址错误'
            break;
        case 500:
            message = '服务器错误'
            break;
        default:
            message = '网络出现问题'
    }
    ElMessage({
        type: error,
        message
    })
    return Promise.reject(error)
})

export default request





