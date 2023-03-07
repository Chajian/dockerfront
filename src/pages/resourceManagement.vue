<template>
    <div>
        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span></span>
                    <el-button  style="float: right;" type="primary" icon="el-icon-edit" circle></el-button>

                </div>
                <div class="text item">
                    CPU:<span v-show="!tool">{{date.cpu}} </span><br/>
                    xxx:<span v-show="!tool">{{date.xxx}} </span>
                    <el-input v-show="tool" :value="date.cpu"></el-input>
                    <el-input v-show="tool" :value="date.xxx"></el-input>

                    <el-button v-show="tool" style="float: right;" type="primary" size="mini">主要按钮</el-button>

                </div>
            </el-card>
        </div>
        <div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            tool:true,
            date:{
                cpu:'i7',
                xxx:'hz'
            }
        }
    }


}
</script>
<style >
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
     /*垂直居中 */
     vertical-align: middle;
    /*水平居中*/
     text-align: center;
     border-top: 1px solid;
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
    width: 480px;
  }
</style>