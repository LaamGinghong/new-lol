<template>
  <div id="game" class="container-flued">
    <game_score v-bind:message="score"></game_score>
    <game_number v-bind:message="score" v-on:num="changeGame"></game_number>
    <game_summary v-bind:message="msg"></game_summary>
    <game_button></game_button>
    <game_table v-bind:message="msg"></game_table>
  </div>
</template>

<script>
  import axios from 'axios';


  import game_score from '@/components/game_score';
  import game_number from '@/components/game_number';
  import game_summary from '@/components/game_summary';
  import game_button from '@/components/game_button';
  import game_table from '@/components/game_table';

  export default {
    name: "game",
    components: {game_score, game_number, game_summary, game_button,game_table},
    data() {
      return {
        score: {},
        msg: {}
      }
    },
    created() {
      let vm = this;
      axios.get('http://localhost:3000/game?schedule_id=' + this.$route.params.id)
        .then(function (data) {
          vm.score = data.data.data[0];
        })
        .catch(function (err) {
          console.error(err);
        });
      axios.get('http://localhost:3000/game1?game1_id=' + this.$route.params.id)
        .then(function (data) {
          vm.msg = data.data.data[0];
        })
        .catch(function (err) {
          console.error(err);
        })
    },
    methods: {
      changeGame(num) {
        let vm = this;
        axios.get('http://localhost:3000/game' + num + '?game' + num + '_id=' + this.$route.params.id)
          .then(function (data) {
            vm.msg = data.data.data[0];
          })
          .catch(function (err) {
            console.error(err);
          })
      }
    }
  }
</script>

<style>
  @import url('../assets/App.css');
</style>
