<template>
  <div>
    <el-container>
      <el-header v-show="islogin()">
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
    components:{
      NavBar
    },
    methods:{
      islogin(){
      // const username = JSON.parse(localStorage.getItem("name"))
      // if(username == null){
      //   this.$router.push('/login')
      //   return false;
      // }else{
      //   return true;
      // }

      return true
       
    },
    }
}
</script>

<style scoped>
.el-header{
    padding: 0;
}

</style>