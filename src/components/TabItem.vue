<!-- 标签组件 -->
<template>
	<view class="tab" v-if="isVisible">
		<text class="h5-text">
			{{tab}}
			<span class="h5-span" @click="removeTab()">
				x
			</span>
		</text>
		

		
	</view>
</template>

<script>
	export default{
		name:"tab-item",
		props:{
			fTab: String,
			fId: Number
		},
		data(){
			return{
				tab:"",
				id:null,
				isVisible: true
			}
		},
		created() {
			this.tab = this.fTab
			this.id = this.fId
			console.log(this.tab)
		},
		methods:{
			//点击删除标签，并且触发父组件的delTab方法，并且把这个标签的id发给父组件
			removeTab() {
				this.isVisible=false
				this.$emit('delTab',this.id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab{
		display: flex;
		.h5-text{
			color: #409eff;
			font-size: 22upx;
			border: 1px solid #d9ecff;
			background-color: #ecf5ff;
			border-radius: 23upx;
			padding: 3upx 7upx 3upx 15upx;
			.h5-span{
				padding-left: 5upx;
				font-size: 22upx;
				color: #409eff;
				display: inline-block;
			}
		}
	}
	
	
</style>
