<template>
  <div id="team">
    <team_top v-bind:win="win" v-bind:kill="kill" v-bind:baron="baron"></team_top>
    <team_table v-bind:msg="message" v-on:btn="change"></team_table>
  </div>
</template>

<script>
  import axios from 'axios';
  import team_top from '@/components/team_top';
  import team_table from '@/components/team_data_table';

  export default {
    name: "team",
    components: {team_top, team_table},
    data() {
      return {
        teams: [],
        win: {},
        kill: {},
        baron: {},
        message: []
      }
    },
    created() {
      const vm = this;
      axios.get('http://39.108.118.110/team')
        .then(function (data) {
          vm.teams = data.data.data;
          vm.win = vm.teams.sort(vm.compare('l_win_percent'))[0];
          vm.kill = vm.teams.sort(vm.compare('l_avgkill'))[0];
          vm.baron = vm.teams.sort(vm.compare('l_baron'))[0];
          vm.message = vm.teams.sort(vm.compare('l_winpercent'));
        })
        .catch(function (err) {
          console.error(err);
        });
    },
    methods: {
      compare(props) {
        return function (a, b) {
          const value1 = a[props];
          const value2 = b[props];
          return value2 - value1;
        }
      },
      change(index) {
        this.message = this.teams.sort(this.compare('l_' + index ));
      }
    }
  }
</script>

<style>
  @import url(../assets/App.css);
</style>
