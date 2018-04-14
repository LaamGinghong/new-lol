<template>
  <div id="nav_left" style="position: relative;">
    <ul>
      <router-link v-bind:to="'/'">
        <li class="nav_item nav_left_item nav_logo"><img src="static/img/logo.png"/></li>
      </router-link>
      <router-link v-bind:to="'/team_table'">
        <li class="nav_item nav_left_item" v-bind:class="navClick('/team_table')">战队</li>
      </router-link>
      <router-link v-bind:to="'/schedule'">
        <li class="nav_item nav_left_item" v-bind:class="navClick('/schedule')">赛程</li>
      </router-link>
      <router-link v-bind:to="'/grade'">
        <li class="nav_item nav_left_item" v-bind:class="navClick('/grade')">战绩</li>
      </router-link>
      <li class="nav_item nav_left_item nav_dropdown" v-on:click.stop="showDrop(message)">
        数据
        <dropdown v-show='message'></dropdown>
      </li>
    </ul>
    <span class="nav_logo" id="nav_logo_mobile"><img src="static/img/logo.png"
                                                                                 alt=""></span>
    <span class="nav_btn" v-on:click="mobileShow()"><i class="fa fa-bars" aria-hidden="true"></i></span>
    <div id="nav_dropdown_mobile" v-show="toggle">
      <router-link v-bind:to="'/team_table'"><span>战队</span></router-link>
      <router-link v-bind:to="'/schedule'"><span>赛程</span></router-link>
      <router-link v-bind:to="'/grade'"><span>战绩</span></router-link>
      <router-link v-bind:to="'/team'"><span>战队数据</span></router-link>
      <router-link v-bind:to="'/player'"><span>选手数据</span></router-link>
      <router-link v-bind:to="'/legends'"><span>英雄数据</span></router-link>
    </div>
  </div>
</template>

<script>
  import dropdown from '@/components/nav_left_dropdown';

  export default {
    name: 'nav_left',
    components: {dropdown},
    props: ['message'],
    methods: {
      showDrop(f) {
        if (f == false) {
          this.$emit('status', true);
        } else {
          this.$emit('status', false);
        }
      },
      navClick(path) {
        if (path == this.$route.path) {
          return 'nav_item_click';
        }
      },
      mobileShow() {
        this.toggle = !this.toggle;
      }
    },
    data() {
      return {
        toggle: false
      }
    }
  }
</script>

<style>
  @import url("../assets/App.css");
  @import url("../assets/font-awesome-4.7.0/css/font-awesome.min.css");

  #nav_dropdown_mobile {
    width: 100%;
  }

  #nav_dropdown_mobile span {
    height: 50px;
    background: #222222;
    color: #c6c8cc;
    padding-left: 20px;
    display: block;
    line-height: 50px;
    position: relative;
    z-index: 80;
  }
</style>
