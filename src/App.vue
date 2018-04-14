<template>
  <div id="app" v-on:click="hide()">
    <div id="nav">
      <nav class="container">
        <left v-bind:message="drop" v-on:status="show"></left>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import left from '@/components/nav_left';

  export default {
    name: 'App',
    components: {
      left
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
