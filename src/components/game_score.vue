<template>
  <div id="game_score" style="width: 941px;margin: 0 auto;padding-top: 80px">
    <span class="text-center game_score_team">
      <img v-bind:src="'/static/'+message.s_team1+'/'+message.s_team1+'.png'" width="130px">
      <br/>
      {{message.s_team1}}
    </span>
    <span class="text-center game_score">
      <span class="text-center game_score_item game_score_score" v-bind:style="color(message.s_team1win)">{{message.s_team1win}}</span>
      <span class="text-center game_score_item game_score_colon">:</span>
      <span class="text-center game_score_item game_score_score" v-bind:style="color(message.s_team2win)">{{message.s_team2win}}</span>
      <span class="text-center game_score_item game_score_time">{{message.s_time}}</span>
      <span class="text-center game_score_item game_score_status">{{message.s_status}}</span>
    </span>
    <span class="text-center game_score_team">
      <img v-bind:src="'/static/'+message.s_team2+'/'+message.s_team2+'.png'" width="130px">
      <br/>
      {{message.s_team2}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "game_score",
    props: ['message'],
    methods:{
      color(index){
        if (index==2){
          return {'color':'#0febc1'}
        }
      }
    }
  }
</script>

<style>
  @import url('../assets/App.css');

</style>
