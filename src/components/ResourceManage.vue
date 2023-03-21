<template>
    <div class="container">
        <div class="title">CONTAINER</div>
        <!-- 绑定v-for循环即可 -->
        <div class="content-item">CPU: 4 Cores Intel Xeon Gold 6248R</div>
        <div class="content-item">RAM: 1G</div>
        <div class="content-item">Space: 20G SSD</div>
        <div class="content-item">Bandwidth: 1G</div>
        <div class="content-item">Port: 4078 8088 2040</div>
        <div class="content-item">Status: running</div>
        <!-- 按钮 -->
        <span class="btn config">config</span>
        <span class="btn close">close</span>
    </div>
</template>

<script>
export default {
   name:'ResourceManage'
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

/* 容器详细信息 */
.content-item{
    width: 100%;
    height: 19px;
    margin-bottom:8px ;
    color: rgb(124, 128, 136);
    font-family: Microsoft YaHei;
    font-size: 14px;
    font-weight: 290;
    line-height: 19px;
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
    /* margin-right: 30px ; */
}
.close{
    background: rgb(232, 122, 44);
}

</style>