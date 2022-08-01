<template>
<div class="login">
	<div class="login-top">
		
	</div>
	<div class="login-bottom">
		<div class="login-view-card">
			<span>{{welcome}}</span>
			<input />
			<input />
			<el-button>
				登陆
			</el-button>
		</div>
	</div>
</div>
</template>

<script>
export default{
	data(){
		return{
			welcome: '欢迎来到xxx'
		}
	}
}
</script>

<style lang="less" scoped>
.login{
	background-color: #ffffff;
	.login-top{
		background-color: #4074e2;
		height: 50px;
	}
	.login-bottom{
		.login-view-card{
			align-items: center;
			width: 323px;
			height:340px;
			border-radius: 20px;
			text-align: center;
			background-color: #4074e2;
			margin: 300px auto;
			span{
				display: inline-block;
				margin: 10% auto;
				color: #ffffff;
			}
			input{
				display: block;
				border-radius: 20px;
				margin: 5% auto;
			}
			button{
				display: block;
				margin: 10% auto;
			}
		}
	}
}
</style>