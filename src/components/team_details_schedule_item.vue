<template>
  <div id="team_details_schedule_item" class="container">
    <ul>
      <li class="col-2 text-center team_details_schedule_status">{{message.s_status}}</li>
      <li class="col-2 text-center team_details_schedule_time">{{message.s_time}}</li>
      <li class="col-2 text-right team_details_schedule_name">{{message.s_team1}}</li>
      <li class="col-2 text-center">{{message.s_team1win}}:{{message.s_team2win}}</li>
      <li class="col-2 text-left team_details_schedule_name">{{message.s_team2}}</li>
      <li class="col-2 text-center">{{message.s_name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "team_details_schedule_item",
    props: ['message']
  }
</script>

<style scoped>
#team_details_schedule_item li{
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0;
  color: #777;
}
  .team_details_schedule_status{
    color: #999!important;
  }
  .team_details_schedule_time{
    color: #999!important;
    font-weight: 400!important;
  }
  .team_details_schedule_name{
    color: #666!important;
  }
</style>
