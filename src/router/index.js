import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Hardware from '@/pages/Hardware'
import Order from '@/pages/Order'
import Images from '@/pages/Images'
import Package from '@/pages/Package'
import PersonalInfo from '@/pages/PersonalInfo'
import resourceManagement from '@/pages/resourceManagement'

Vue.use(VueRouter)
// 1.创建组件
// 2.将路由与组件进行映射
// 3.创建router实例

const routes = [
    {
        path:'/',
        component:Main,
        redirect:'/home',
        children:[
            // 子路由
            {path:'home',component:Home,meta:{isLogin:false}},
            {path:'login',component:Login},
            {path:'hardware',component:Hardware},
            {path:'order',component:Order},
            {path:'images',component:Images},
            {path:'package',component:Package},
            {path:'personalInfo',component:PersonalInfo},
            {path:'resourceManagement',component:resourceManagement},
        ]
    },
]

const router = new VueRouter({
    routes//缩写相当于routes:routes
})
// router.beforeEach((to, from, next) => {
//     // 如果访问的是登录界面则直接放行
//     if (to.path === '/login') return next()
//     //获取用户页面token信息
//     let token = window.localStorage.getItem('username')
//     //如果token数据为null则跳转到指定路径
//     if (!token) return next("/login")
//     next()
//   })

router.beforeEach( (to, from, next) => {
    const _to = localStorage.getItem('isLogin');
    //不需要登录的直接放行
    if (to.meta.isLogin === false) {
      next()
      //如果页面需要登录，且登录失效，进入登录页面
    } else if (!_to && to.path !== '/login') {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  
  })
export default router

