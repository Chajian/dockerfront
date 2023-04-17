<template>
    <div class="container">
      <div class="title">硬件配置</div>
      <!-- <div class="comboInfo">
          <p class="content-title">VPS Hosting - Combo</p>
          <p class="content-item">4GB RAM</p>
          <p class="content-item">40GB SSD</p>
          <p class="content-item">4 Cores Intel Xeon Gold 6248R</p>
      </div> -->
      <div class=" systemInfo">
          <p class="content-title">Operating System</p>
          <el-select class="select" v-model="value" placeholder="请选择">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-option>
          </el-select>
          <p class="content-title">Configure Server</p>
          <div class="configure-serve">
            <div class="item"> <span class="item-title">CPU类型</span><el-input type="text" v-model="hardwareData.cpu_type"/></div>
            <div class="item"> <span class="item-title">CPU内核</span><el-input type="text" v-model="hardwareData.cpu_core"/></div>
            <div class="item"> <span class="item-title">网络速度</span><el-input type="text" v-model="hardwareData.speed"/></div>
            <div class="item"> <span class="item-title">磁盘大小</span><el-input type="text" v-model="hardwareData.disk"/></div>
             <div class="item"> <span class="item-title">端口号 </span><el-input type="text" v-model="hardwareData.hostname"/></div>
             <div class="item"><span class="item-title">Portforwarding</span><el-input type="text" v-model="port"/></div>
             {{ hardwareData }}
         </div>
          <!-- <p class="content-title">Cost</p>
          <div class="cost">
              <span class="cost-title">Total Due Today:</span>
              <span class="price">{{price}}yuan</span>
          </div> -->
          <button class="btn" @click="submit">> 提交</button>
      </div>
      
    </div>
  </template>
  <!-- hardwareData:[
            {
                title:'CPU类型',
                hardware_id:'',
            },
            {
                title:'CPU类型',
                cpu_type:'',
            },
            {
                title:'CPU内核',
                cpu_core:'',
            },
             {
                title:'网络速度',
                speed:'',
            },
            {
                title:'CPU内核',
                disk:'',
            },
            {
                title:'端口号',
                port:'',
            },
   
          ], -->
  <script>
  export default {
      name:'Hardware',
      data() {
        return {
          num:1,
          price:'4,80',
          hardwareData:{
            hardware_id:'',
            cpu_type:'',
            cpu_core:'',
            speed:'',
            disk:'',
            hostname:'',
            port:'',
       
          },
          options: [{
            value: '选项1',
            label: 'python'
          }, {
            value: '选项2',
            label: 'sql'
          },
          {
            value: '选项2',
            label: 'java'
          }],
          value: ''
        }
      },
      methods: {
        handleChange(value) {
          console.log(value);
        },
        submit(value){
            localStorage.setItem("hardwareData",JSON.stringify(this.hardwareData));
            this.$store.commit('hardwareData',this.hardwareData)
        }
      }
  }
  </script>
  
  <style scoped>
  .title{
      width: 113px;
      padding-left: 90px;
      padding-bottom: 10px;
      color: rgb(0, 0, 0);
      font-family: Microsoft YaHei;
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
  }
  
  p{
      width: 100%;
      height: 19px;
      margin-bottom:7px ;
      margin-left: 20px;
      color: rgb(196, 196, 196);
      font-family: Microsoft YaHei;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
  }
  span{
      font-size: 9px;
      color: rgb(196, 196, 196);
  }
  .content-title{
      padding-bottom: 10px;
      color: rgb(0, 0, 0);
      font-family: Microsoft YaHei;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
  
  
  }
  .container{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
  }
  .comboInfo{
      align-self: center;
      width: 85%;
      height: 144px;
      background: rgb(255, 255, 255);
  }
  .systemInfo{
      align-self: center;
      width: 85%;
  }
  .select{
      width: 97%;
      padding: 15px;
  }
  .configure-serve ,.cost , .comboInfo , .select{
      box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.1);
      border-radius:6px;
  }
  
  .configure-serve {
        display: flex;
        flex-wrap: wrap;
  }
  
  .item-title{
      position: relative;
      right: 36%;
  }
  
  .item{
      margin: 10px 60px;
      float: left;
  }
  
  .item input{
      width: 252px;
      height: 32px;
  }
  
  
  .cost{
      width: 100%;
      height: 60px;
  }
  .cost-title{
      display: inline-block;
      padding: 20px;
      font-size: 12px;
      color: rgb(196, 196, 196);
  }
  .price{
      /* display: inline-block; */
      margin-left:75%; 
      font-weight: bolder;
  }
  
  .btn{
      width: 156px;
      height: 34px;
      margin-left: 85%;
      margin-top:30px;
      display: inline-block;
      text-align: center;
      line-height: 34px;
      font-size: 8px;
  }
  </style>