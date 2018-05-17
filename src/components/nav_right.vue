<template>
  <div id="nav_right">
    <div id="isLogin" v-if="isLogin" v-on:click="logout()">
      <span>{{userName}}</span>
    </div>
    <div id="noLogin" v-else>
      <span v-on:click="login()">登陆</span>
      <span v-on:click="register()">注册</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav_right",
    data() {
      return {
        userName: '',
        isLogin: false
      }
    },
    created() {
      this.getLocal();
    },
    methods: {
      getLocal() {
        this.userName = localStorage.getItem('_userName');
        if (this.userName) {
          this.isLogin = true;
        }
      },
      login(){
        this.$emit('openLoginBox',true);
      },
      register(){
        this.$emit('openRegisterBox',true);
      },
      logout(){
        this.isLogin=false;
        localStorage.removeItem('_userName');
      }
    }
  }
</script>

<style>
#nav_right,#isLogin,#noLogin{
  height: 50px;
  color: #9d9d9d;
}
#isLogin,#noLogin{
  line-height: 50px;
  font-size: 14px;
}
  #noLogin span{
    float: right;
    padding: 0 15px;
    cursor: pointer;
    font-weight: 500;
  }
  #noLogin span:hover{
    background: red;
    color: #FFFFFF;
  }
  #isLogin{
    float:right;
    cursor:pointer;
    padding:0 15px;
    font-weight:500;
  }
  #isLogin:hover{
    color:#FFFFFF;
  }
</style>
