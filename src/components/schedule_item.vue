<template>
  <div id="schedule_item" class="container">
    <ul>
      <li class="col-1 text-center schedule_item"><span class="schedule_status" v-bind:style="background(message.s_status)">{{message.s_status}}</span></li>
      <li class="col-1 text-center schedule_item">{{message.s_name}}</li>
      <li class="col-2 text-center schedule_item">{{message.s_stage}}</li>
      <li class="col-2 text-center schedule_item">{{message.s_time}}</li>
      <router-link v-bind:to="'/game/'+message.s_id">
        <li class="col-1 text-center schedule_item"><img
          v-bind:src="'/static/'+message.s_team1+'/'+message.s_team1+'.png'" width="40px" style="padding-top: 20px"></li>
        <li class="col-1 text-center schedule_item">{{message.s_team1}}</li>
        <li class="col-1 text-center schedule_item"><span class="schedule_team" v-bind:style="color(message.s_team1win)">{{message.s_team1win}}</span></li>
        <li class="col-1 text-center schedule_item"><span class="schedule_team" v-bind:style="color(message.s_team2win)">{{message.s_team2win}}</span></li>
        <li class="col-1 text-center schedule_item">{{message.s_team2}}</li>
        <li class="col-1 text-center schedule_item"><img
          v-bind:src="'/static/'+message.s_team2+'/'+message.s_team2+'.png'" width="40px" style="padding-top: 20px"></li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "schedule_item",
    props: ['message'],
    methods:{
      color(num){
        if (num==2){
          return {'color':'#0eebc1'};
        }
      },
      background(status){
        if (status=='未开始'){
          return {'background':'#cfa14a'};
        }
      }
    }
  }
</script>

<style>
  @import url(../assets/App.css);
</style>
