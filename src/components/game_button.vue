<template>
  <div id="game_button" style="clear: both;width: 557px;margin: 0 auto;">
    <span class="game_button text-center" v-bind:class="{game_button_click:status.s1}"
          v-on:click="change(1),changeTable(status.s1)">赛后综述</span>
    <span class="game_button text-center" v-bind:class="{game_button_click:status.s2}"
          v-on:click="change(2),changeTable(status.s1)">比赛分析</span>
  </div>
</template>

<script>
  export default {
    name: "game_button",
    data() {
      return {
        status: {
          s1: true,
          s2: false,
        }
      }
    },
    methods: {
      change(index) {
        if (index == 1) {
          this.status.s1 = true;
          this.status.s2 = false;
          document.getElementById('game').style.height='1800px';
        } else {
          this.status.s1 = false;
          this.status.s2 = true;
          document.getElementById('game').style.height='3000px';
        }
      },
      changeTable(tab){
        this.$emit('table',tab);
      }
    }
  }
</script>

<style>
  @import url(../assets/App.css);
</style>
