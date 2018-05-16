<template>
  <div id="app" v-on:click="hide()" v-bind:style="isOpenBox()">
    <div id="nav" style="position: relative">
      <nav class="container">
        <left v-bind:message="drop" v-on:status="show"></left>
        <right v-on:openLoginBox="openLoginBox" v-on:openRegisterBox="openRegisterBox"></right>
        <login v-show="loginBox" v-on:closeLoginBox="closeLoginBox"></login>
        <regeist v-show="registerBox" v-on:closeRegeistBox="closeRegeistBox"></regeist>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import left from "@/components/nav_left";
import right from "@/components/nav_right";
import login from "@/components/login";
import regeist from "@/components/regeist";

export default {
  name: "App",
  components: { left, right, login, regeist },
  data() {
    return {
      drop: false,
      loginBox: false,
      registerBox: false
    };
  },
  methods: {
    hide() {
      this.drop = false;
    },
    show(index) {
      this.drop = index;
    },
    openLoginBox(e) {
      this.loginBox = e;
    },
    openRegisterBox(e) {
      this.registerBox = e;
    },
    isOpenBox() {
      if(this.loginBox || this.registerBox){
        return "overflow:hidden";
      }else{
        return "overflow:auto";
      }
    },
    closeLoginBox(e) {
      this.loginBox = e;
    },
    closeRegeistBox(e) {
      this.registerBox = e;
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
@import url("assets/App.css");
</style>
