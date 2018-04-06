<template>
  <div id="game_echarts_team2" class="container" style="clear: both;height: 400px">
    <game_echarts_team2_demage v-bind:message="message"></game_echarts_team2_demage>
    <game_echarts_team2_money v-bind:message="message"></game_echarts_team2_money>
  </div>
</template>

<script>
  import game_echarts_team2_demage from '@/components/game_echarts_team2_demage';
  import game_echarts_team2_money from '@/components/game_echarts_team2_money';

  export default {
    name: "game_echarts_team2",
    props: ['message'],
    components: {game_echarts_team2_demage,game_echarts_team2_money}
  }
</script>

<style>

</style>
