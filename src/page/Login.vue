<template>
<div class="login">
	<div class="login-top">
		
	</div>
	<div class="login-bottom">
		<div class="login-view-card">
			<span>{{welcome}}</span>
			<input v-model="account" />
			<input v-model="password"/>
			<el-button @click="test">
				登陆
			</el-button>
		</div>
	</div>
</div>
</template>

<script>
import api from '../assets/js/api.js'
import { JSEncrypt } from 'jsencrypt'
export default{
	data(){
		return{
			welcome: '欢迎来到xxx',
			account: '',
			password: ''
		}
	},
	mounted() {
		// this.test()
	},
	methods:{
		test(){
			
			var that = this;
			
			var key = api.verify.getPublicKey().then(res=>{
				if(res.code==200){
					const encrypt = new JSEncrypt();
					encrypt.setPublicKey(res.data);
					var realpassword = encrypt.encrypt(that.password);// 加密后的字符串
					console.log("密钥:"+res.data+"\n密码"+realpassword)
					api.verify.login(that.account,realpassword).then(res=>{
						if(res.code==200){
							localStorage.setItem('token',res.data)
							console.log("登录成功!")
							this.$router.push('/')
						}
					})
				}
			})
			
		}
	},
	
	 
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
				border-radius: 20px;
				margin: 10% auto;
			}
		}
	}
}
</style>