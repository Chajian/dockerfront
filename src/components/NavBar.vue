<template>
  <div class="nav" v-show="show">
    <div class="logo">LOGO</div>
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1">套餐购买</el-menu-item>
      <el-menu-item index="2">硬件选择</el-menu-item>
			<el-menu-item index="3">资源管理</el-menu-item>
			<el-menu-item index="4">我的镜像</el-menu-item>
			<el-menu-item index="5">容器创建</el-menu-item>
			<el-menu-item index="6">个人页面</el-menu-item>
			<el-menu-item index="7">管理员页面</el-menu-item>
		</el-menu>
      <el-dropdown size="mini" >
        <span class="el-dropdown-link">
          <img class="avator" @click="islogin"  src="../assets/navbar/avator.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user" @click="goPersonInfo">用户：{{ this.$store.state.username }}</el-dropdown-item>
            <el-dropdown-item icon="el-icon-help">套餐有效期：{{ expiration }}</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-s-promotion">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
		return{
			url: '/src/assets/img/v2_rfar59.jpg',
      username:'',
      expiration:'2024-05-23',
      show:true
		}
	},
	methods:{
      //判断是否已经登录状态
    islogin(){
      const isLogin = this.$store.state.isLogin
      console.log(isLogin);
      if(isLogin){
        console.log("你已经登录，无需再次登录")
      }else{
        this.$router.push('/login');
      }
    },
    goPersonInfo(){
      this.$router.push('/PersonInfo');
    },
    
		handleSelect(index,path){
			switch(index){
				case '1':
				this.$router.push('/package')
				break;
				
				case '2':
				this.$router.push('/hardware')
				break;
				
				case '3':
				this.$router.push('/resourceManagement')
				break;
				
				case '4':
				this.$router.push('/images')
				break;

        case '5':
				this.$router.push('/containerCreation')
				break;

        case '6':
				this.$router.push('/personalInfo')
				break;

        case '7':
				this.$router.push('/images')
				break;
			}
		},
		toPersonalPage(){
			this.$router.push('/personal')
		}

    }
	
}
</script>

<style scoped>
    .nav{
        position: absolute;
        display: flex;
        width: 100%;
        height: 59px;
        /* left: 0;
        right: 0;
        top: 0;
        bottom: 970px; */
        /* background: rgb(252, 252, 252); */
        box-shadow: 0px 2px 10px #0000001a;
                
    }
    /* logo样式 */
    .logo{
        margin:auto 0;
        margin-left: 15px;
        flex-grow:8;
        font-family: Noto Sans SC;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
    }
    /* 用户头像 */
.avator{
    display: block;
    margin:auto 0;
    width: 42x;
    height: 42px;
    margin-right: 20px;
    padding-top: 8px;
}
.el-dropdown-item:hover{
    cursor: pointer;
    color: #f4ca41;
  }
  .el-icon-arrow-down {
    font-size: 8px;
    line-height: 8px;
  }
</style>