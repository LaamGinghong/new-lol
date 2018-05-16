<template>
  <div id="team_details_schedule" class="container">
    <h1 class="team_details_h1">最近战绩</h1>
    <ul>
      <li class="col-2 text-center team_details_schedule_title">状态</li>
      <li class="col-2 text-center team_details_schedule_title">时间</li>
      <li class="col-6 text-center team_details_schedule_title">胜负</li>
      <li class="col-2 text-center team_details_schedule_title">赛事</li>
    </ul>
    <team_details_schedule_item v-bind:message="values" v-for="values in msg" v-bind:key="values.s_id"></team_details_schedule_item>
  </div>
</template>

<script>
  import axios from 'axios';
  import team_details_schedule_item from '@/components/team_details_schedule_item';
  export default {
    namt: 'team_details_schedule',
    components:{team_details_schedule_item},
    data() {
      return {
        msg: [{
          s_status:'',
          s_time:'',
          s_time1:'',
          s_team1win:'',
          s_team2:'',
          s_team2win:'',
          s_name:'',
          s_id:''
        }]
      }
    },
    created() {
      let vm = this;
      axios.get('http://39.108.118.110/team_schedule?team_id1=' + this.$route.params.id + '&team_id2=' + this.$route.params.id)
        .then(function (data) {
          vm.msg = data.data.data;
        })
        .catch(function (err) {
          console.error(err);
        })
    }
  }
</script>

<style>

</style>
