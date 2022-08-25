import axios from 'axios'

const request = axios.create({
    baseURL: 'http://192.168.0.107:8888',
    timeout: 6000,
    headers:{
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization,X-Request-With'
    }
})



//统一异常处理
const err = (error) => {
    if (error.response) {
        const data = error.response.data
        if (error.response.status === 403) {
            console.log('403'+data.message|| data.msg);
        }
        if (error.response.status === 401) {
            console.log('你没有权限访问');
            localStorage.removeItem('token')
            localStorage.removeItem('isLogin')
        }

    }else {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        if (!window.navigator.onLine) {
            localStorage.setItem('changeNetwork', false);
        } else {
            return Promise.reject(error);
        }
    }

    return Promise.reject(error)
}

// 请求拦截器
// 每次自动将本地缓存中的token添加到Authorization
request.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token){
        config.headers['Authorization'] = token
    }
    return config
},err)

// 响应拦截器
request.interceptors.response.use((response) => {
    const res = response.data
    if (response.status !== 0 && response.status !== 200){
        console.log('效应出错!')
        if (res.msg != 'SUCCESS'){
            console.log('获取的消息出错!')
        }
    }
    else{

        return res;
    }

},err)

export default request