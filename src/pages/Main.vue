<template>
  <div>
    <el-container>
      <el-header>
        <NavBar v-if="isLogin"/>
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
  name: 'Main',
  components: {
    NavBar
  },
  // 响应式获取isLogin，当isLogin更新，会自动更新ui
  // 将isLogin存入store
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  created() {
    if (!this.isLogin) {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.el-header{
    padding: 0;
}

</style>