<template>
	<div class="res-manager">
		<div class="res-left">
			<text>
				简单信息
			</text>
			<svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: none;"><path d="M 0 0.5 L 1000 0.5" stroke="rgba(187,187,187,1)" stroke-width="1px" stroke-dasharray=""></path><path d="M 0 0.5 L 347 0.5" stroke="transparent" stroke-width="10" style="pointer-events: auto;"></path></svg>
			<span>容器id:</span>
			<span>容器名称:</span>
			<span>容器状态:</span>
			<span>cpu:</span>
			<span style="margin-bottom: 40px;">内存:</span>
			<span style="display: inline;">硬盘:</span>
			<el-button type="primary">暂停</el-button>
			<span style="margin-bottom: 40px;">带宽:</span>
			<span style="display: inline;">端口:</span>
			<el-button type="primary">运行</el-button>
			
		</div>
		<div class="res-right">
			<text>
				简单信息
			</text>
			
			<span>内存占用</span>
			<svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: none;"><path d="M 0 0.5 L 1000 0.5" stroke="rgba(187,187,187,1)" stroke-width="1px" stroke-dasharray=""></path><path d="M 0 0.5 L 347 0.5" stroke="transparent" stroke-width="10" style="pointer-events: auto;"></path></svg>
			
			<span>cpu占用</span>
			<svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible; filter: none;"><path d="M 0 0.5 L 1000 0.5" stroke="rgba(187,187,187,1)" stroke-width="1px" stroke-dasharray=""></path><path d="M 0 0.5 L 347 0.5" stroke="transparent" stroke-width="10" style="pointer-events: auto;"></path></svg>
			
			
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
.res-manager{
	background-color: rgb(227 228 238);
	text{
		display: block;
		margin-top: 50px;
		margin-bottom: 50px;
		font-weight: 600;
		font-size: large;
	}
	display: flex;
	justify-content: space-between;
	.res-left{
		width: 1000px;
		background-color: #ffffff;
		margin-left: 40px;
		margin-top: 40px;
		margin-bottom: 50px;
		svg{
			display: block;
		}
		span{
			font-size: large;
			margin-top: 50px;
			display: block;
		}
		button{
			margin-left: 400px;
		}
	}
	.res-right{
		width: 1000px;
		margin-top: 40px;
		margin-bottom: 50px;
		background-color: #ffffff;
		svg{
			display: block;
		}
		span{
			font-size: large;
			margin-top: 40px;
			display: block;
		}
	}
}
	
</style>