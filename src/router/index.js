import VueRouter from "vue-router";
import rm from '../pages/resourceManagement.vue'

const router = new VueRouter({
 
    routes:[
        {
            path:'/',
            component:rm
        }
    ]
})