import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from './router';
// 引入store
import store from './store';
import less from 'less';

Vue.use(ElementUI);
Vue.use(less)
Vue.config.productionTip = false

new Vue({
  //挂载 
  router,
  store,
  render: h => h(App),
}).$mount('#app')
