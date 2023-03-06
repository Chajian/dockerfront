<template>
	<div class="top">
		<el-image @click="toPersonalPage()" style="width: 50px; height: 50px;border-radius: 25px;" :src="url" fit="fill"/>
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
			<el-menu-item v-if="isAdmin" index="5">管理员页面</el-menu-item>
		</el-menu>
	</div>
	<!-- 路由出口 -->
	<!-- 路由匹配到的组件将渲染在这里 -->
	<router-view class="main"></router-view>
</template>

<script>
export default{
	data(){
		return{
			url: '/src/assets/img/v2_rfar59.jpg',
			isAdmin: true
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
		},
		toPersonalPage(){
			this.$router.push('/personal')
		}
	}
	
}
</script>

<style lang="less" scoped>
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