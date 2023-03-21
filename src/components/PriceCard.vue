<template>
  <div >
    <div class="card">
       <div class="a">
        <span class="type">套餐一</span>
        <span class="price">日常价格：￥720.00/12月</span>
        <div class="content">
            <p>50GB高校云盘，限峰值带宽3M</p>
            <p>类型:服务器实例</p>
            <p>类型：一年</p>
            <p>购买数量：1</p>
        </div>
    </div>
        <span class="addCart">加入购物车</span>
        <span class="btn-purchase">立即购买</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'PriceCard'

}
</script>

<style scoped>
.card{
    /* 矩形 1 */
    width: 339px;
    height: 144px;
    margin:100px;
    background: rgb(255, 255, 255);
    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
}
.type{
    color: #333;
    font-size: 14px;
    /* margin: 8px 0px 0px 20px; */
    font-weight: bold;
}
span,p{
    /* margin: 4px 0px 4px 20px; */
    margin-left: 20px;
    color: rgb(196, 196, 196);
    font-size: 8px;
}
.price{
    margin-left: 117px;
}
.addCart{
    font-size:6px;
}

.btn-purchase{
    width: 32px;
    height: 12px;
    margin-left: 9px;
    padding: 3px 19px;
    box-sizing: border-box;
    border: 0.5px solid rgb(232, 122, 44);
    border-radius: 6px;
    color: rgb(232, 122, 44);
}

</style>