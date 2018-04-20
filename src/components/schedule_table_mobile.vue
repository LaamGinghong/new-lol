<template>
  <div class="schedule_table_mobile">
    <span class="col-4 text-center"><img v-bind:src="'static/'+message.s_team1+'/'+message.s_team1+'.png'" width="60px"></span>
    <span class="col-4 text-center">VS</span>
    <span class="col-4 text-center"><img v-bind:src="'static/'+message.s_team2+'/'+message.s_team2+'.png'" width="60px"></span>
  </div>
</template>

<script>
  export default {
    name: "schedule_table_mobile",
    props: ['message']
  }
</script>

<style>
  .schedule_table_mobile {
    height: 120px;
  }

  .schedule_table_mobile > span {
    display: inline-block;
    height: 120px;
    background: white;
    line-height: 120px;
    font-size: 30px;
    font-weight: 900;
  }
  .schedule_table_mobile img{
    padding-top: 30px;
  }
</style>
