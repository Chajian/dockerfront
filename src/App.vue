<script>
export default{
	data(){
		return{
			url: '/src/assets/img/v2_rfar59.jpg'
		}
	},
	methods:{
		handleSelect(index,path){
			switch(index){
				case '1':
				this.$router.push('/resource/manager')
				break;
				
				case '2':
				this.$router.push('/personal')
				break;
				
				case '3':
				this.$router.push('/container/create')
				break;
				
				case '4':
				this.$router.push('/images')
				break;
			}
		}
	},
	
}
</script>

<template>
	<div id="app">
		<div class="top">
			<el-image  style="width: 50px; height: 50px;border-radius: 25px;" :src="url" fit="fill"/>
		</div>
	    <div>
			<el-menu
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			>
				<el-menu-item index="1">资源管理</el-menu-item>
				<el-menu-item index="2">个人页面</el-menu-item>
				<el-menu-item index="3">容器创建</el-menu-item>
				<el-menu-item index="4">我的镜像</el-menu-item>
			</el-menu>
		</div>
	  <!-- 路由出口 -->
	  <!-- 路由匹配到的组件将渲染在这里 -->
	  <router-view class="main"></router-view>
	</div>
	<!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
		
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  background-color: rgb(227 228 238);
}
.main{
	margin-top: 20px;
	margin-left: 15px;
	margin-right: 15px;
	height: 100%;
	background-color: #ffffff;
}
.top{
	background-color: rgb(64 116 226);
	width: 100%;
	height: 50px;
}
</style>
