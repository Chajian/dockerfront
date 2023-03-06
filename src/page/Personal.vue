<template>
<div class="personal">
	<div class="person-top">
		<text>
			基本信息
		</text>
		<div>
			<el-row>
				<el-col class="top-left" :span="11">
					<span>昵称:{{name}}</span>
					<span>账号id:{{account}}</span>
					<span>注册时间:{{created_time}}</span>
				</el-col>
				<el-col :span="2"></el-col>
				<el-col class="top-right" :span="11">
					<div>
						<span>密码</span>
						<el-button type="primary">修改密码</el-button>
					</div>
					<div>
						<span>邮箱</span>
						<el-button type="primary">修改邮箱</el-button>
					</div>
					<div>
						<span>手机号码</span>
						<el-button type="primary">修改手机</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
	<div class="person-bottom">
		<el-image style="width: 135px; height: 135px" :src="head_img"></el-image>
		<span>昵称:{{name}}</span>
		<span>余额:{{money}}</span>
		<span>上次登入ip:{{last_ip}}</span>
		<span>上次登入时间</span>
		<el-button type="primary">删除帐户</el-button>
	</div>
</div>
</template>

<script>
export default{
	data(){
		return{
			head_img: '/src/assets/img/v2_rfar59.jpg',
			name: '无名之辈',
			account: '99283923',
			created_time: '2022-8-19',
			last_ip: 'xxx.xxx.xxx.x',
			money: 23
		}
	},
	methods:{
		
	},
	mounted() {
		this.http.post('/verification/sendLoginSMS',{'mobile': 13717031250})
	}
	
}
</script>

<style lang="less" scoped>
.personal{
	img{
		width: 135px;
		height: 135px;
		border: 50%;
	}
	background-color: rgb(227 228 238);
	text{
		font-size: large;
		font-weight: 600;
	}
	.person-top{
		margin-top: 40px;
		margin-bottom: 40px;
		background-color: #ffffff;
		.top-left{
			span{
				display: block;
				margin-top: 50px;
				font-size: large;
			}
		}
		.top-right{
			font-size: large;
			div{
				margin-top: 50px;
			}
		}
		button{
			margin-left: 100px;
		}
	}
	.person-bottom{
		margin-bottom: 40px;
		background-color: #ffffff;
		span{
			display: block;
			font-size: large;
			margin-top: 50px;
		}
		button{
			margin-left: 90%;
		}
	}
}
</style>