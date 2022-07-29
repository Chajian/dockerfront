import { createApp } from 'vue'
import App from './App.vue'
import Index from './page/Index.vue'
import HelloWorld from './components/HelloWorld.vue'
import * as VueRouter from 'vue-router'
import ElementPlus from 'element-plus'
import ImageManager from './page/ImageManger.vue'
import CreateContainer from './page/CreateContainer.vue'
import ResourceManager from './page/ResourceManager.vue'
import Personal from './page/Personal.vue'
import request from './assets/js/axios.js'
import 'element-plus/dist/index.css'

// router路由
const routes = [
	{ path: '/images', component: ImageManager },
	{ path: '/test', component: HelloWorld },
	{ path: '/container/create',component: CreateContainer},
	{ path: '/resource/manager',component: ResourceManager},
	{ path: '/personal',component: Personal}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})
var app = createApp(App)
app.prop
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.config.globalProperties.http = request