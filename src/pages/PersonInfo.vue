<template>
    <div class="container">
       <div class="info">
        <div class="title">个人信息</div>
        <img :src="head_img" class="avator">
        <ul>
        <li class="content-item">用户名称：{{ username }}</li>
        <li class="content-item">用户ID:{{ userId }}</li>
        <li class="content-item">最后登录时间：{{ last_ip }}</li>
        </ul>
        <!-- 按钮 -->
        <button  @click="goModifyPassword">修改个人信息</button>
        <button  @click="goModifyPassword">修改密码</button>
       </div>
        <div class="packageInfo">
            <div class="title">套餐信息</div>
            <ul>
                <li class="content-item">已选购套餐:{{ packageData.type }}</li>
                <li class="content-item">套餐信息:{{ packageData.description }}</li>
                <li class="content-item">套餐购买时间:{{ packageData.created_at }}</li>
                <li class="content-item">套餐有效期:{{ packageData.update_at }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
   name:'PersonInfo',
   data() {
  	return {
  	    	head_img:require('@/assets/img/userAvator.jpg'),
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
    computed:{
        ...mapState(['packageData']),
     },

}
</script>

<style lang="less" scoped>
/* contain样式 */
.container{
    display: flex;
    justify-content: space-around;
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
.avator{
    display: block;
    width: 60px;
    height: 60px;
    border-radius:8px;
    margin-left: 5px;
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