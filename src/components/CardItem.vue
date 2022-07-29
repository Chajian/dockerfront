#卡片组件
<template>
	<div class="card">
		<div class="card-top">
			<span>{{title}}</span>
			<el-checkbox v-model="checked1" label="" size="large" />
		</div>
		<div class="context">
			<span>{{context}}</span>
			<span>{{context2}}</span>
			<span>{{context3}}</span>
		</div>
		<div class="card-bottom">
			<span>{{bottom}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"card-item",
		props:{
			fTitle: String,
			fcontext: String,
			fcontext2: String,
			fcontext3: String,
			fbottom: String
		},
		data(){
			return{
				title:this.fTitle,
				context: this.fcontext,
				context2: this.fcontext2,
				context3: this.fcontext3,
				bottom: this.fbottom
			}
		},
		created() {

		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
.card{
	width: 400px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	background-color: #ffffff;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	.card-top{
		span{
			font-size: large;
			font-weight: 700;
		}
	}
	.context{
		display: flex;
		margin: 0 auto;
		justify-content: space-around;
		span{
			margin-left: 10px;
		}
	}
	.card-bottom{
		span{
			color: rgb(162 239 77);
		}
	}
}
</style>