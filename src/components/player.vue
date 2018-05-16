<template>
  <div id="player">
    <player_top v-bind:kill="kill_most" v-bind:mvp="mvp_most" v-bind:kda="kda_most"></player_top>
    <player_table v-on:btn="change" v-bind:msg="message"></player_table>
  </div>
</template>

<script>
  import axios from 'axios';
  import player_top from '@/components/player_top';
  import player_table from '@/components/player_table';

  export default {
    name: "player",
    components: {player_top, player_table},
    data() {
      return {
        players: [],
        kill_most: {},
        mvp_most: {},
        kda_most: {},
        message: []
      }
    },
    created() {
      const vm = this;
      axios.get('http://39.108.118.110/player')
        .then(function (data) {
          vm.players = data.data.data;
          vm.kill_most = vm.players.sort(vm.compare('p_kill'))[0];
          vm.mvp_most = vm.players.sort(vm.compare('p_MVP'))[0];
          vm.kda_most = vm.players.sort(vm.compare('p_kda'))[0];
          vm.message = vm.players.sort(vm.compare('p_kill'));
        })
        .catch(function (err) {
          console.error(err);
        })
    },
    methods: {
      compare(props) {
        return function (a, b) {
          const value1 = a[props];
          const value2 = b[props];
          return value2 - value1;
        }
      },
      change(index){
        this.message=this.players.sort(this.compare('p_'+index));
      }
    }
  }
</script>

<style>
  @import url(../assets/App.css);
</style>
