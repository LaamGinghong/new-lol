<template>
  <div id="game_button" style="clear: both;width: 557px;margin: 0 auto;">
    <span class="game_button text-center" v-bind:class="{game_button_click:status.s1}"
          v-on:click="change(1)">赛后综述</span>
    <span class="game_button text-center" v-bind:class="{game_button_click:status.s2}"
          v-on:click="change(2)">比赛分析</span>
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
        } else {
          this.status.s1 = false;
          this.status.s2 = true;
        }
      }
    }
  }
</script>

<style>
  .game_button {
    width: 210px;
    height: 60px;
    line-height: 60px;
    background: none;
    color: #c49f58;
    border: 3px solid #c49f58;
    border-radius: 40px;
    font-size: 18px;
    cursor: pointer;
    transition: .3s;
    margin: 50px 30px;
    display: inline-block;
  }

  .game_button:hover {
    background: #c49f58;
    color: white;
    font-weight: 500;
  }

  .game_button_click {
    background: #c49f58;
    color: white;
    font-weight: 500;
  }
</style>
