<template>
    <div style="width: 60%; margin-left: 20%;">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="容器名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="镜像">
                <el-input v-model="form.image"></el-input>
                <el-button type="primary" @click="open()">选择镜像</el-button>
            </el-form-item>

            <div class="block">
                <span class="demonstration">服务器带宽:{{form.tapeWidth}}m</span>
                <el-slider v-model="form.tapeWidth"></el-slider>
            </div>

            <el-form-item label="端口转发">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>

            <el-form-item label="套餐选择">
                <el-radio-group v-model="form.resource">
                    <el-radio label="套餐一"></el-radio>
                    <el-radio label="套餐二"></el-radio>
                </el-radio-group>
            </el-form-item>

            <span style="margin-left: 47%;">费用{{ form.price }}</span>
            
            <el-form-item style="margin-left: 30%; margin-top: 10px;">
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                image: '',
                resource: '',
                desc: '',
                tapeWidth: 50,
                price: 0,
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '前选择镜像',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
}
</script>
<style></style>