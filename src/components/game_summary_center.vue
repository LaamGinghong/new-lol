<template>
  <div id="game_summary_center">
    <ul>
      <li class="col-4 text-right game_summary_center" style="color: #eb3200;font-size: 70px;font-weight: 600">{{message.rg_team1_kill}}</li>
      <li class="col-4 text-center game_summary_center">
        <img src="static/img/fight.png" style="margin-top: 10px">
      </li>
      <li class="col-4 text-left game_summary_center"  style="color: #4594ee;font-size: 70px;font-weight: 600">{{message.rg_team2_kill}}</li>
      <li class="col-12 text-center game_summary_center" style="font-size: 26px;height: 40px;line-height: 40px;font-weight: 700;color: #fff">BAN</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "game_summary_center",
    props:['message']
  }
</script>

<style>
.game_summary_center{
  height: 60px;
  line-height: 60px;
  margin: 44px 0;
}
</style>
