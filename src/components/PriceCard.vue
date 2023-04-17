<template>
  <div >
    <div class="card">
        <div class="a">
        <span class="type">{{ packageData.type  }}</span>
        <span class="price">日常价格：￥{{packageData.money}}/12月</span>
        </div>
        <div class="content">
            <p class="description">{{ packageData.description }}</p>
            <p>{{ packageData.created_at }}</p>
            <p>{{ packageData.update_at }}</p>
            <p>{{ packageData.money}}</p>
        </div>
        <!-- <span class="addCart">加入购物车</span> -->
        <button><el-button  class="btn-purchase"  type="text" @click="open">立即购买</el-button></button>
    </div>
  </div>
</template>

<script>
export default {
    name:'PriceCard',
    data() {
        return {
        }
    },
    props: {
      packageData: {
        type: Object,
        required: true
    }
  },
    methods: {
      open() {
        this.$confirm('确定购买此套餐', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 弹窗提示
          this.$message({
            type: 'success',
            message: '购买成功!'
          });
          // 本地存储数据
            localStorage.setItem("packageData",JSON.stringify(this.packageData));
            // 存入Vuex
            this.$store.commit('packageAdd',this.packageData)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消购买'
          });          
          // console.log("catch",this.packageData);
        });
      }
      
    },

}
</script>

<style scoped>
   
.card{
    /* 矩形 1 */
    width: 339px;
    height: 164px;
    margin:30px 20px;
    background: rgb(255, 255, 255);
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}
.type{
    color: #333;
    font-size: 14px;
    margin: 8px 0px 0px 30px;
    font-weight: bold;
    text-shadow:1px 1px 3px rgb(135, 135, 137);
}
.a{
    padding-top: 8px;
}
.content{
    margin:  7px auto;
    width: 90%;
    /* border-bottom: 1px solid #999;
     */
     border-bottom: 0.20000000298023224px solid rgb(228, 225, 225);;
}

span,p{
    /* -webkit-transform: scale(0.5); */
    margin: 2px 0px 0px 0px;
    /* margin-left: 10px; */
    color: rgb(196, 196, 196);
    font-size: 12px;
}
.price{
    margin-left: 117px;
    font-size: 8px;
}
.addCart{
    font-size:6px;
    margin: 10px 0px 0px 160px;
}

.el-button{
  padding:5px;
  font-size: 12px;
} 

</style>