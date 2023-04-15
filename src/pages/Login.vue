<template>
   <div class="container">
        <div class="login-wrapper">
            <div class="header">Login</div>
            <div class="form-wrapper">
                <input type="text" v-model="username" placeholder="username" class="input-item">
                <input type="password" v-model="password" placeholder="password" class="input-item">
                <div class="btn" @click="login">Login</div>
            </div>
            <div class="msg">
                Don't have account?
                <!-- <a href="#">Sign up</a>&emsp; -->
                <a href="#">ForgetPassword</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'Login',
    data() {
        return {
            username:'cxx',
            password:'123',
            isLogin:false,
            }
    },
    methods: {
        login(){
            this.isLogin = !this.isLogin
            localStorage.setItem('username', this.username);
            localStorage.setItem('isLogin', this.isLogin);
            this.$store.commit('login',{username:this.username,password:this.password,isLogin:this.isLogin})
            this.$router.push('/')
    }
        
    },
    computed:{
        ...mapState(['username']),
     },

}
</script>

<style scoped>
.container {
    height: 100%;
    background-image: linear-gradient(to right, #40a0ffb3, #67c23ad3);
}
.login-wrapper {
    background-color: #fff;
    width: 358px;
    height: 488px;
    margin-top: 150px;
    border-radius: 15px;
    padding: 0px 50px;
    position: relative;
    left: 50%;
    top: 200px;
    transform: translate(-50%, -50%);
}
.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
}
.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}
.input-item:placeholder {
    text-transform: uppercase;
}
.btn {
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #40a0ffb3, #67c23ad3);
    color: #fff;
}
.msg {
    text-align: center;
    line-height: 88px;
}
a {
    text-decoration-line: none;
    color: #abc1ee;
}

</style>