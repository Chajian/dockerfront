<template>
  <div>
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name:'Main',
    data() {
      return {
        isLogin:false
      }
    },
    components:{
      NavBar
    },
    methods:{
          //判断是否已经登录状态
    islogin(){
      const isLogin = this.$store.state.isLogin
      console.log(isLogin);
      if(isLogin){
        console.log("你已经登录，无需再次登录")
        console.log("当前状态",isLogin);
        return this.isLogin
      }else{
        this.$router.push('/login');
      }
    }
  },
  mounted(){
      this.islogin()
    }
}
</script>

<style scoped>
.el-header{
    padding: 0;
}

</style>