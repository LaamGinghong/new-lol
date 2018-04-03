<template>
  <div id="game_summary" class="container">
    <ul>
      <li class="col-4 game_summary">
        <game_summary_team1_resource v-bind:message="message"></game_summary_team1_resource>
      </li>
      <li class="col-4 game_summary">
        <game_summary_center v-bind:message="message"></game_summary_center>
      </li>
      <li class="col-4 game_summary">
        <game_summary_team2_resource v-bind:message="message"></game_summary_team2_resource>
      </li>
    </ul>
  </div>
</template>

<script>
  import game_summary_team1_resource from '@/components/game_summary_team1_resource';
  import game_summary_team2_resource from '@/components/game_summary_team2_resource';
  import game_summary_center from '@/components/game_summary_center';

  export default {
    name: "game_summary",
    props: ['message'],
    components: {game_summary_team1_resource, game_summary_team2_resource,game_summary_center}
  }
</script>

<style>
  .game_summary {
    height: 280px;
    background: #323232;
    border-top: 1px solid #191919;
    border-bottom: 1px solid #505050;
    padding-bottom: 40px;
  }
</style>
