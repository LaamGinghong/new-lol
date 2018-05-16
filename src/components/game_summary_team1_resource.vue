<template>
  <div id="game_summary_team1_resource">
    <ul>
      <li class="col-2 text-right" style="margin-left: 4.15555555555%;margin-top: 30px;height: 55px">
        <img v-bind:src="'static/'+message.rg_team1+'/'+message.rg_team1+'.png'" width="55px">
      </li>
      <li class="col-9 text-left" style="margin-top: 30px"><span
        class="game_summary_team">{{message.rg_team1}}</span></li>
    </ul>
    <ul>
      <li class="text-center col-3 game_summary_resource_title">大龙数</li>
      <li class="text-center col-3 game_summary_resource_title">小龙数</li>
      <li class="text-center col-3 game_summary_resource_title">防御塔</li>
      <li class="text-center col-3 game_summary_resource_title">经济</li>
    </ul>
    <ul>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/baron.png" alt="大龙数">{{message.rg_team1_barons}}
      </li>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/dragon.png" alt="小龙数">{{message.rg_team1_dragons}}
      </li>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/tower.png" alt="防御塔">{{message.rg_team1_towers}}
      </li>
      <li class="text-center col-3 game_summary_resource_item">
        <img src="static/img/money.png" alt="经济">{{message.rg_team1_earn}}
      </li>
    </ul>
    <ul>
      <li class="game_summary_ban" style="margin-left: 26px">
        <img v-bind:src="message.rg_team1_firstban" alt="firstBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team1_secondban" alt="secondBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team1_thirdban" alt="thirdBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team1_forthban" alt="forthBan">
      </li>
      <li class="game_summary_ban">
        <img v-bind:src="message.rg_team1_lastban" alt="lastBan">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "game_summary_team1_resource",
    props:['message']
  }
</script>

<style>
  .game_summary_team {
    margin-left: 10px;
    margin-right: 10px;
    color: #d5d4d4;
    font-weight: 700;
    height: 55px;
    display: inline-block;
    line-height: 55px;
    font-size: 42px;
  }

  .game_summary_resource_title {
    color: gray;
    font-size: 14px;
    margin-top: 16px;
  }

  .game_summary_resource_item {
    height: 30px;
    padding-top: 16px;
    font-size: 18px;
    font-weight: 700;
    color: #c49f58;
  }

  .game_summary_ban {
    height: 40px;
    float: left;
    margin: 30px 5px;
    border: 1px solid #111;
  }

  .game_summary_ban > img {
    width: 40px;
  }
</style>
