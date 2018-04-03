<template>
  <div id="game_number" class="container">
    <div v-if="show(message.s_team1win+message.s_team2win)">
      <ul>
        <li class="text-center col-4 game_number" v-bind:class="{game_number_click:cur.first}" v-on:click="change(1),changeGame(1)">
          第一局
        </li>
        <li class="text-center col-4 game_number" v-bind:class="{game_number_click:cur.second}" v-on:click="change(2),changeGame(2)">
          第二局
        </li>
        <li class="text-center col-4 game_number" v-bind:class="{game_number_click:cur.third}" v-on:click="change(3),changeGame(3)">
          第三局
        </li>
      </ul>
    </div>
    <div v-else>
      <li class="text-center col-6 game_number" v-bind:class="{game_number_click:cur.first}" v-on:click="change(1),changeGame(1)">
        第一局
      </li>
      <li class="text-center col-6 game_number" v-bind:class="{game_number_click:cur.second}" v-on:click="change(2),changeGame(2)">
        第二局
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "game_number",
    props: ['message'],
    data() {
      return {
        cur: {
          first: true,
          second: false,
          third: false
        }
      }
    },
    methods: {
      show(num) {
        if (num == 3) {
          return true;
        }
      },
      change(index) {
        if (index == 1) {
          this.cur.first = true;
          this.cur.second = false;
          this.cur.third = false;
        } else {
          if (index == 2) {
            this.cur.first = false;
            this.cur.second = true;
            this.cur.third = false;
          } else {
            this.cur.first = false;
            this.cur.second = false;
            this.cur.third = true;
          }
        }
      },
      changeGame(index){
        this.$emit('num',index)
      }
    }
  }
</script>

<style>
  @import url('../assets/App.css');
</style>
