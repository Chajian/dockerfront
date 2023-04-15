<template>
    <div class="container">
        <div class="title">CONTAINER</div>
        <ul>
        <li class="content-item" v-for="(value, key) in containerInfo">
		  {{ key }}: {{ value }}
		</li>
        </ul>
        <!-- 按钮 -->
        <div class="btn config">config</div>
        <span class="btn close">close</span>
    </div>
</template>

<script>
export default {
   name:'ResourceManage',
   data() {
  	return {
	    containerInfo: {
  	    	cpu:'4 Cores Intel Xeon Gold 6248R',
            ram:'1G',
            space:'20G SSD',
            bandwidth:'1G',
            poty:'4078 8088 2040',
            status:'running'
    	}
  	}
	}
}
</script>

<style scoped>
/* contain样式 */
.container{
    margin: 100px auto;
    padding: 0 23px;
    width: 956px;
    height: 318px;
    background: rgb(255, 255, 255);
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}
.title{
    padding: 20px 0px;
}
ul{
    margin-left:-35px ;
}
/* 容器详细信息 */
ul .content-item{
    width: 100%;
    height: 19px;
    margin-bottom:8px ;
    color: rgb(124, 128, 136);
    font-family: Microsoft YaHei;
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
    list-style: none;
}

.btn{
    width: 156px;
    height: 34px;
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 8px;
    color: white;
    border-radius: 6px;
}
.config{
    background: rgb(70, 203, 48);
    margin:  30px 30px 0px 60%;
    margin-right: 30px ;
}
.config:before{
    content: url(../assets/resourceManage/setting.png);
    display: block;
    /* height: 10px;*/
    width: 10px;
    height: 10px;

}
.close{
    background: rgb(232, 122, 44);
}

</style>