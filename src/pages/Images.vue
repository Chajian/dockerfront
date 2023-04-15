<template>
    <div class="control">
        <el-row>
            <!-- <el-button type="primary" plain>创建</el-button>
            <el-button type="success" plain>开启</el-button>
            <el-button type="warning" plain>重启</el-button>
            <el-button type="danger" plain>关机</el-button> -->
            <button class="create">创建</button>
            <button class="on">开启</button>
            <button class="restrain">重启</button>
            <button class="off">关机</button>
        </el-row>

        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>镜像1</span>
    <el-button style="float: right; padding: 5px 5px" icon="el-icon-video-play"></el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
    </div>
        
</template>


<script>
export default {
    name:'Images'

}
</script>

<style lang="less" scoped>
button{
    padding: 10px 20px;
}
.create{
    
}
.on{
    color: #67C23A;
}
.restrain{
color: #E6A23C;
}
.off{
    color:#F56C6C;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 250px;
    margin: 20px;
  }
</style>