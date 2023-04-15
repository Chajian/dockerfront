<template>
    <div class="container">
       <div class="info">
        <div class="title">个人信息</div>
        <img :src="{head_img}" alt="">
        <ul>
        <li class="content-item">用户名称：{{ username }}</li>
        <li class="content-item">用户ID:{{ userId }}</li>
        <li class="content-item">最后登录时间：{{ last_ip }}</li>
        </ul>
        <!-- 按钮 -->
        <button  @click="goModifyPassword">修改密码</button>
       </div>
        <div class="packageInfo">
            套餐信息
            <ul>
                <li class="content-item">已选购套餐:{{ packageinfo }}</li>
                <li class="content-item">套餐有效期:{{ expiration }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
   name:'PersonalInfo',
   data() {
  	return {
  	    	head_img:'./assets/navbar/avator.png',
            username:'听风言语声',
            userId:'US12313',
            packageinfo:'100G 50M',
            expiration:'2024-05-23',
            last_ip:'123XXXX',
  	    }
	},
    methods: {
        goModifyPassword(){
            this.$router.push('/modifyPassword')
        }
    },
}
</script>

<style scoped>
/* contain样式 */
.container{
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
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
.info{

}
/* 容器详细信息 */
ul .content-item{
    width: 100%;
    height: 19px;
    margin-bottom:8px ;
    color: rgb(124, 128, 136);
    font-size: 14px;
    font-weight: 330;
    line-height: 19px;
    list-style: none;
    letter-spacing: 1px;
}
</style>