<template>
  <div id="game_echarts_team1" class="container" style="clear: both;height: 400px">
    <game_echarts_team1_demage v-bind:message="message"></game_echarts_team1_demage>
    <game_echarts_team1_money v-bind:message="message"></game_echarts_team1_money>
  </div>
</template>

<script>
  import game_echarts_team1_money from '@/components/game_echarts_team1_money';
  import game_echarts_team1_demage from '@/components/game_echarts_team1_demage';

  export default {
    name: "game_echarts_team1",
    props: ['message'],
    components: {game_echarts_team1_money,game_echarts_team1_demage}
  }
</script>

<style>

</style>
