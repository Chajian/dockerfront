<template>
	<div class="create-container">
		<div class="container-left">
			<text>
				docker镜像旋转
			</text>
			<ul class="infinite-list" v-infinite-scroll="load">
				<el-row class="infinite-list-item" :gutter="20">
					<el-col class="left-card"  :span="10" v-for="i in images" :key="i"  >
							<img :src="i.img"/>
							<span>{{i.title}}</span>
					</el-col>
				</el-row>
			</ul>
		</div>
		<div class="container-right">
				<text>
					套餐选择
				</text>
				<ul class="infinite-list" v-infinite-scroll="load">
					<el-row class="infinite-list-item" :gutter="20">
						<el-col :key="i" v-for="i in orderPackage" :span="8">
							<CardItem style="width: 90%;" :fTitle="i.title" :fcontext="'cpu:'+i.cpu+'\n内存:'+i.memory+'\n硬盘:'+i.disk+'\n带宽:'+i.netwrok">
								
							</CardItem>
						</el-col>
						
					</el-row>
				</ul>
				<div>
					<el-row>
						<el-col :span="10">
							<text>
								容器名称
							</text>
						</el-col>
						<el-col :span="10">
							<text>
								端口转发
							</text>
						</el-col>
					</el-row>
					
					<el-row style="margin-top: 30px;">
						<el-col  :span="10">
							<input />
						</el-col>
						<el-col  :span="10">
							<input />
						</el-col>
					</el-row>
					<el-row style="margin-top: 30px;">
						<el-col  :span="10">
							<span style="color: rgb(233 157 66);">总计费用:{{calcul}}</span>
						</el-col>
						<el-col  :span="10">
							<el-button>立即购买</el-button>
						</el-col>
					</el-row>
					
					
				</div>
		</div>
			
	</div>
	
</template>

<script>
import CardItem from '../components/CardItem.vue'
export default{
	// data(){
	// 	return{
	// 		calcul: 0,
	// 	}
	// },
	data(){
		return{
			calcul: 0,
			images:[
				{
					title: 'mysql',
					img: ''
				},{
					title: 'java',
					img: ''
				},{
					title: 'mysql',
					img: ''
				},{
					title: 'java',
					img: ''
				}
			],
			orderPackage:[
				{
					title: '套餐10rmb/月',
					cpu: '4核',
					memory: 4,
					disk: '50G',
					netwrok: '20M'
				},
				{
					title: '套餐10rmb/月',
					cpu: '4核',
					memory: 4,
					disk: '50G',
					netwrok: '20M'
				},{
					title: '套餐10rmb/月',
					cpu: '4核',
					memory: 4,
					disk: '50G',
					netwrok: '20M'
				},
				{
					title: '套餐10rmb/月',
					cpu: '4核',
					memory: 4,
					disk: '50G',
					netwrok: '20M'
				}
			]
		}
	},
	methods:{
		load(){
			
		}
	},
	components:{
		CardItem
	}
	
}	
</script>

<style lang="less" scoped>
.create-container{
	display: flex;
	justify-content: space-between;
	.infinite-list{
		.left-card{
			// text-align: center;
			margin-top: 10px;
			margin-left: 10px;
			height: 70px;
			line-height: 70px;
			box-shadow: 1px 1px 1px 0px #ccc inset,-3px -3px 3px 0px #ccc inset;
			img{
				width: 70px;
				height: 60px;
			}
			span{
				position: absolute;
			}
		}
		
		
	}
	.container-left{
		margin-top: 100px;
		margin-left: 80px;
		width: 50%;
		height: 400px;
	}
	.container-right{
		width: 50%;
		margin-top: 100px;
		margin-left: 20px;
		height: 100%;
		el-row{
			margin-top: 20px;
		}
		ul{
			height: 500px;
		}
	}
	text{
		font-size: large;
		font-weight: 600;
	}
}


	
	
</style>