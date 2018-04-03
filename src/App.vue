<template>
  <div id="app" v-on:click="hide()">
    <div id="nav">
      <nav class="container">
        <left v-bind:message="drop" v-on:status="show"></left>
        <right></right>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import left from '@/components/nav_left';
  import right from '@/components/nav_right';

  export default {
    name: 'App',
    components: {
      left,
      right
    },
    data() {
      return {
        drop: false
      }
    },
    methods: {
      hide() {
        this.drop = false;
      },
      show(index) {
        this.drop = index;
      }
    }
  }
</script>

<style>
  @import url("assets/App.css");
</style>
