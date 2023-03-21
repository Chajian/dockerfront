<template>
  <div class="nav">
    <div class="logo">LOGO</div>
    <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">容器管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">容器管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">容器管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">容器管理</a>
        </li>
      </ul>
      <img class="avator" src="../assets/navbar/avator.png" alt="">
      <!-- <img class="avator" src="../assets/navbar/avator.png"></img> -->
      <!-- <div>
        <img src="../assets/logo.png" alt="">
      </div> -->
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
    .nav{
        /* display: flex; */
        /* justify-content: space-between; */
        /* 任务栏 */
        position: absolute;
        display: flex;
        width: 100%;
        height: 54px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 970px;
        background: rgb(252, 252, 252);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                
    }
    /* logo样式 */
    .logo{
        margin:auto 0;
        margin-left: 15px;
        flex-grow:8;
        font-family: Noto Sans SC;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
    }
    .navbar-nav{
        display: flex;
        margin-right: 200rpx;
        width: 100%;
        flex-grow:1;
    }
    /* 响应式未调整完毕 */
    .nav-item{
        float: right;
        padding: 0 20px;
    }
    li, a{
        list-style: none;
        text-decoration: none;
        color: #383737;
    }
  
    .navbar-nav{
        width: 30%;
    }
    /* 用户头像 */
    .avator{
        display: block;
        margin:auto 0;
        width: 42x;
        height: 42px;
        margin-right: 20px;
    }
</style>