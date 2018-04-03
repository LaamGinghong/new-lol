<template>
  <div id="nav_left">
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
      }
    }
  }
</script>

<style>
  @import url("../assets/App.css");
</style>
