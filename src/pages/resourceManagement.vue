<template>
    <div style="height: 100%; float: left;">
        <div style="margin-top: 20px; height: 70%; float: left;">
            <el-card class="box-card" style="height: 200px; float: left; margin-left: 20%;">
                <div slot="header" class="clearfix">
                    <el-button v-show="!tool" size="mini" style="float: right;" type="primary" icon="el-icon-edit"
                        @click="handleEdit('a1')"></el-button>

                </div>
                <div class="text item">
                    <span v-show="!tool"> CPU:{{ date.cpu }} </span><br />
                    <span v-show="!tool"> xxx:{{ date.xxx }} </span>
                    <input type="text" class="form_input" v-show="tool" :value="date.cpu" ref="cpu" />
                    <input type="text" class="form_input" v-show="tool" :value="date.xxx" ref="xxx" />

                    <el-button v-show="tool" style="float: right;  margin-top: 10px;" type="primary" size="mini"
                        @click="handleCheck('a2')">确认修改</el-button>
                    <el-button v-show="tool" type="info" size="mini" style="float: right;  margin-top: 10px;"
                        @click="handlecancel('a3')">取消</el-button>

                </div>
            </el-card>

            <el-card class="box-card" style="height: 200px; float:right; margin-right:  20%;">
                <div slot="header" class="clearfix">
                    <el-button v-show="!tool2" size="mini" style="float: right;" type="primary" icon="el-icon-edit"
                        @click="handleEdit('b1')"></el-button>
                </div>
                <div class="text item">
                    <span v-show="!tool2"></span><br />
                    <span v-show="!tool2"> 内存：{{ date.ram }} </span><br />
                    <input type="text" class="form_input" v-show="tool2" :value="date.ram" ref="ram" />
                    <el-button v-show="tool2" style="float: right; margin-top: 10px;" type="primary" size="mini"
                        @click="handleCheck('b2')">确认修改</el-button>
                    <el-button v-show="tool2" type="info" size="mini" style="float: right; margin-top: 10px;"
                        @click="handlecancel('b3')">取消</el-button>

                </div>
            </el-card>

            <el-card class="box-card" style="height: 200px; float: left; margin-left: 20%; margin-top: 10px;;">
                <div slot="header" class="clearfix">
                    <el-button v-show="!tool3" size="mini" style="float: right;" type="primary" icon="el-icon-edit"
                        @click="handleEdit('c1')"></el-button>
                </div>
                <div class="text item">
                    <span v-show="!tool3"></span><br />
                    <span v-show="!tool3"> 硬盘:{{ date.SSD }} G</span><br />
                    <input type="text" class="form_input" v-show="tool3" :value="date.SSD" ref="SSD" />
                    <el-button v-show="tool3" style="float: right; margin-top: 10px;" type="primary" size="mini"
                        @click="handleCheck('c2')">确认修改</el-button>
                    <el-button v-show="tool3" type="info" size="mini" style="float: right; margin-top: 10px;"
                        @click="handlecancel('c3')">取消</el-button>

                </div>
            </el-card>

            <el-card class="box-card" style="height: 200px; float: right; margin-right:  20%; margin-top: 10px;;">
                <div slot="header" class="clearfix">
                    <el-button v-show="!tool4" size="mini" style="float: right;" type="primary" icon="el-icon-edit"
                        @click="handleEdit('d1')"></el-button>
                       <div style="width: 100%;" v-show="tool4">
                       <span>服务端口:</span> <el-input v-model="input" placeholder="请输入内容" style="width: 25%; " size="mini"></el-input>
                       <span>客户端口:</span> <el-input v-model="input" placeholder="请输入内容" style="width: 25%; " size="mini"></el-input>
                       <el-button type="primary" round size="mini" style="float: right; margin-top: 5px;" >添加</el-button>
                       </div>

                </div>
                <div class="text item" style="overflow-y:auto">
                    <span v-show="!tool4">端口</span><br />
                    <el-button v-show="tool4" style="float: right; margin-top: 10px;" type="primary" size="mini"
                        @click="handleCheck('d2')">确认修改</el-button>
                    <el-button v-show="tool4" type="info" size="mini" style="float: right; margin-top: 10px;"
                        @click="handlecancel('d3')">取消</el-button>

                </div>
            </el-card>

        </div>



        <div style="height: 25%; width: 100%; float: left; margin-top: 10PX;">
            <div class="block" style="width: 60%; margin-left: 20%;">
                <span class="demonstration">服务器带宽:{{tapeWidth}}m</span>
                <el-slider v-model="tapeWidth"></el-slider>
            </div>
            <div class="block" style="width: 100%;" v-if="!status">
                <el-button class="el-icon-video-play" style="font-size: 100px; margin-left: 45%;" @click="StatusMethod()"></el-button>
            <h2 style="margin-left: 44%;">运行状态：暂停</h2>
            </div>
            <div class="block" style="width: 100%;" v-if="status">
                <el-button class="el-icon-video-pause" style="font-size: 100px; margin-left: 45%;" @click="StatusMethod()"></el-button>
            <h2 style="margin-left: 44%;">运行状态：启动</h2>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tool: false,
            tool2: false,
            tool3: false,
            tool4: false,
            status: false,
            tapeWidth: 50,
            date: {
                cpu: '8',
                xxx: 'hz',
                ram: 1,
                SSD: 50,
                port: []
            }
        }
    },
    methods: {
        handleEdit(mark) {
            if (mark == "a1") {
                this.tool = true
            } else if (mark == "b1") {
                this.tool2 = true
            }
            else if (mark == "c1") {
                this.tool3 = true
            }else{
                this.tool4 = true
            }
        },
        handleCheck(mark) {
            if (mark == "a2") {
                this.tool = false

                this.date.cpu = this.$refs.cpu.value
                this.date.xxx = this.$refs.xxx.value
            } else if (mark == "b2") {
                this.tool2 = false

                this.date.ram = this.$refs.ram.value
            } else if (mark == "c2") {
                this.tool3 = false

                this.date.SSD = this.$refs.SSD.value
            }

        },
        handlecancel(mark) {
            if (mark == "a3") {
                console.log(11);
                this.tool = false
            } else if (mark == "b3") {
                this.tool2 = false
            } else if (mark == "c3") {
                this.tool3 = false
            }else{
                this.tool4 = false
            }

        },
        StatusMethod(){
           this.status=!this.status
        }


    },


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
    border-top: 1px beige;

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
    width: 400px;
}

input {

    font-size: 12px;
    /* 设置输入框中字体的大小 */

    height: 30px;
    /* 设置输入框的高度 */
    width: 90%;

    border-radius: 4px;
    /* 设置输入框的圆角的大小 */

    border: 1px solid #c8cccf;
    /* 设置输入框边框的粗细和颜色 */

    color: #986655;
    /* 设置输入框中文字的颜色 */

    outline: 0;
    /* 将输入框点击的时候出现的边框去掉 */

    text-align: left;
    /* 设置输入框中文字的位置 */

    padding-left: 10px;

    display: block;
    /* 将输入框设置为块级元素 */

    cursor: pointer;

    box-shadow: 2px 2px 5px 1px #ccc;

}

input::-webkit-input-placeholder {
    color: #986655;
    font-size: 12px;
}
</style>