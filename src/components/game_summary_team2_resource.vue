<template>
  <div id="game_summary_team2_resource">
    <ul>
      <li class="col-9 text-right" style="margin-left: 4.15555555555%;margin-top: 30px;height: 55px">
        <span class="game_summary_team">{{message.rg_team2}}</span>
      </li>
      <li class="col-2 text-left" style="margin-top: 30px">
        <img v-bind:src="'static/'+message.rg_team2+'/'+message.rg_team2+'.png'" width="55px">
      </li>
    </ul>
    <ul>
      <li class="text-center col-3 game_summary_resource_title">经济</li>
      <li class="text-center col-3 game_summary_resource_title">防御塔</li>
      <li class="text-center col-3 game_summary_resource_title">小龙数</li>
      <li class="text-center col-3 game_summary_resource_title">大龙数</li>
    </ul>
    <ul>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/money.png" alt="经济">{{message.rg_team2_earn}}
      </li>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/tower.png" alt="防御塔">{{message.rg_team2_towers}}
      </li>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/dragon.png" alt="小龙数">{{message.rg_team2_dragons}}
      </li>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/baron.png" alt="大龙数">{{message.rg_team2_barons}}
      </li>
    </ul>
    <ul>
      <li class="game_summary_ban" style="margin-left: 120px">
        <img v-bind:src="message.rg_team2_firstban" alt="firstBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team2_secondban" alt="secondBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team2_thirdban" alt="thirdBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team2_forthban" alt="forthBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team2_lastban" alt="lastBan">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "game_summary_team2_resource",
    props: ['message']
  }
</script>

<style scoped>

</style>
