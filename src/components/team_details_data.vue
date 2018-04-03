<template>
  <div id="team_details_data" class="container">
    <h1 class="team_details_h1">队伍数据</h1>
    <ul>
      <li class="col-1 team_details_data_title text-center">赛事名称</li>
      <li class="col-1 team_details_data_title text-center">赛事阶段</li>
      <li class="col-1 team_details_data_title text-center">出场次数</li>
      <li class="col-1 team_details_data_title text-center">胜/负</li>
      <li class="col-1 team_details_data_title text-center">胜率</li>
      <li class="col-1 team_details_data_title text-center">总击杀(场均)</li>
      <li class="col-1 team_details_data_title text-center">总死亡(场均)</li>
      <li class="col-1 team_details_data_title text-center">场均插眼</li>
      <li class="col-1 team_details_data_title text-center">场均排眼</li>
      <li class="col-1 team_details_data_title text-center">场均经济</li>
      <li class="col-1 team_details_data_title text-center">场均小龙</li>
      <li class="col-1 team_details_data_title text-center">场均大龙</li>
    </ul>
    <team_details_data_item v-bind:message="msg"></team_details_data_item>
  </div>
</template>

<script>
  import axios from 'axios';
  import team_details_data_item from '@/components/team_details_data_item';

  export default {
    name: 'team_details_data',
    components: {team_details_data_item},
    data() {
      return {
        msg: [{
          l_stage: '',
          l_win:'',
          l_lose:'',
          l_winpercent:'',
          l_kill:'',
          l_avgkill:'',
          l_death:'',
          l_avgdeath:'',
          l_eyes:'',
          l_killeyes:'',
          l_earn:'',
          l_dragon:'',
          l_baron:''
        }]
      }
    },
    created() {
      let vm = this;
      axios.get('http://localhost:3000/teamdetails?team_id=' + this.$route.params.id)
        .then(function (data) {
          vm.msg = data.data.data[0];
        })
        .catch(function (err) {
          console.error(err);
        })
    }
  }
</script>

<style>

</style>
