<template>
  <div id="team_details_data_item" class="container">
    <ul>
      <li class="col-1 text-center team_details_data_item_small">LPL</li>
      <li class="col-1 text-center team_details_data_item_small">春季赛常规赛</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_stage}}</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_win}}/{{message.l_lose}}</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_winpercent}}%</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_kill}}({{message.l_avgkill}})</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_death}}({{message.l_avgdeath}})</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_eyes}}</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_killeyes}}</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_earn}}</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_dragon}}</li>
      <li class="col-1 text-center team_details_data_item">{{message.l_baron}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "team_details_data_item",
    props:['message']
  }
</script>

<style>
</style>
