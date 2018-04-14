<template>
  <div id="team_table_details">
    <table class="container">
      <tr v-for="(value,index) in message">
        <td class="col-1 text-center"><span>{{index+1}}</span></td>
        <td class="col-1 text-center">{{value.l_shortname}}</td>
        <td class="col-1 text-center">{{value.l_stage}}</td>
        <td class="col-1 text-center">{{value.l_win}}/{{value.l_lose}}</td>
        <td class="col-1 text-center">{{value.l_winpercent}}</td>
        <td class="col-1 text-center">{{value.l_kill}}({{value.l_avgkill}})</td>
        <td class="col-1 text-center">{{value.l_death}}({{value.l_avgdeath}})</td>
        <td class="col-1 text-center">{{value.l_eyes}}</td>
        <td class="col-1 text-center">{{value.l_killeyes}}</td>
        <td class="col-1 text-center">{{value.l_earn}}</td>
        <td class="col-1 text-center">{{value.l_dragon}}</td>
        <td class="col-1 text-center">{{value.l_baron}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "team_table_details",
    props: ['message']
  }
</script>

<style>
  #team_table_details > table {
    border-collapse: collapse;
    box-sizing: border-box;
  }

  #team_table_details td {
    height: 48px;
    line-height: 48px;
    background: #2f2f2f;
    color: #a0a0a0;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #1c1c1c;
  }

  #team_table_details span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: #181818;
    border-radius: 50%;
    color: #c49f58;
  }
</style>
