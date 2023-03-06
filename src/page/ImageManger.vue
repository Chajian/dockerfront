<template>
<div class="images">
	<div class="image-top">
		<span>我的docker容器</span>
	</div>
	<div class="image-content">
		<el-button type="primary">新建</el-button>
		<el-button type="primary">开机</el-button>
		<el-button type="primary">关机</el-button>
		<el-button type="primary">重启</el-button>
	</div>
	<div  class="image-bottom">
		<ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
			<el-row class="infinite-list-item" :gutter="20">
			    <el-col v-for="i in dockers" :key="i"  :span="8">
					<CardItem :fTitle='i.title' :fcontext='i.context' :fcontext2='i.context2' :fcontext3='i.context3' :fbottom='i.bottom'>
					
					</CardItem>
				</el-col>
			</el-row>
			<!-- <li class="infinite-list-item"> -->
				
				<!-- <CardItem :fTitle=i.title></CardItem> -->
			<!-- </li> -->
		</ul>
	</div>
</div>

</template>

<script>
import CardItem from '/src/components/CardItem.vue'
export default{
	data(){
		return{
			dockers:[
				{
					title: '我的世界java',
					context: 'cpu:1核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},
				{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},
				{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},{
					title: '我的世界java',
					context: 'cpu:1核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},
				{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},
				{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				},{
					title: '我的世界java1',
					context: 'cpu:2核',
					context2: '内存:4g',
					context3: '硬盘:40g',
					bottom: 'RUNNING'
				}
			]
		}
	},
	components:{
		CardItem
	},
	methods: {
		load () {
			// this.dockers.push({
			// 	title: '我的世界java1',
			// 	context: 'cpu:2核',
			// 	context2: '内存:4g',
			// 	context3: '硬盘:40g',
			// 	bottom: 'RUNNING'
			// })
		}
	}
}
</script>

<style lang="less" scoped>
.images{
	padding-top: 50px;
	padding-left: 40px;
}
.image-top{
	span{
		font-size: large;
		font-weight: 600;
	}
}
.image-content{
	margin-top: 100px;
	button{
		margin-left: 50px;
	}
}
.image-bottom{
	width: 100%;
	CardItem{
		display: inline;
	}
	.el-col{
		margin-top: 50px;
	}
}
</style>