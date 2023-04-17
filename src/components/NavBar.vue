<template>
  <div class="nav">
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
      <el-dropdown size="mini" @command="handleCommand" >
        <span class="el-dropdown-link">
          <img class="avator" :src="imageUrl" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user" command="goPersonInfo">用户：{{ this.$store.state.username }}</el-dropdown-item>
            <el-dropdown-item icon="el-icon-help">套餐有效期：{{ expiration }}</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-s-promotion" command="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
export default {
    name:'NavBar',
    data(){
		return{
			imageUrl: require("../assets/img/userAvator.jpg"),
      username:'',
      expiration:'2024-05-23',
		}
	},
	methods:{
    
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
				this.$router.push('/personInfo')
				break;

        case '7':
				this.$router.push('/images')
				break;
			}
		},
    handleCommand(command) {
        if(command == 'goPersonInfo'){
          this.$router.push('/personInfo')
        }else if(command == 'loginOut'){
          console.log("点击了退出");
          this.$store.dispatch('logout');
          localStorage.removeItem('username')
        }
      }

    },

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
.avator {
    display: block;
    margin:auto 0;
    border-radius: 8px;
    width: 42x;
    height: 42px;
    margin-right: 20px;
    margin-top: 8px;
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