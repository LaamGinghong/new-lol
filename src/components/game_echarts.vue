<template>
  <div id="game_echarts" class="container" style="clear: both;height: 1000px">
    <game_echarts_main v-bind:message="message"></game_echarts_main>
    <game_echarts_team1 v-bind:message="message"></game_echarts_team1>
    <game_echarts_team2 v-bind:message="message"></game_echarts_team2>
  </div>
</template>

<script>
  import game_echarts_main from '@/components/game_echarts_main';
  import game_echarts_team1 from '@/components/game_echarts_team1';
  import game_echarts_team2 from '@/components/game_echarts_team2';

  export default {
    name: "game_echarts",
    components: {game_echarts_main, game_echarts_team1,game_echarts_team2},
    props: ['message'],
  }
</script>

<style>
  @import url(../assets/App.css);
</style>
