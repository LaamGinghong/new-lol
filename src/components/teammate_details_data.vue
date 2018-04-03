<template>
  <div id="teammate_details_data" class="container">
    <h1 class="team_details_h1">个人数据</h1>
    <ul>
      <li class="col-1 text-center teammate_details_data_title">赛事名称</li>
      <li class="col-1 text-center teammate_details_data_title">出场次数</li>
      <li class="col-1 text-center teammate_details_data_title teammate_details_data_title_double">总击杀<br/>(场均击杀)</li>
      <li class="col-1 text-center teammate_details_data_title teammate_details_data_title_double">总死亡<br/>(场均死亡)</li>
      <li class="col-1 text-center teammate_details_data_title teammate_details_data_title_double">总助攻<br/>(场均助攻)</li>
      <li class="col-1 text-center teammate_details_data_title">KDA</li>
      <li class="col-1 text-center teammate_details_data_title">场均经济</li>
      <li class="col-1 text-center teammate_details_data_title">场均补刀</li>
      <li class="col-1 text-center teammate_details_data_title">场均插眼</li>
      <li class="col-1 text-center teammate_details_data_title">场均排眼</li>
      <li class="col-1 text-center teammate_details_data_title">场均参团率</li>
      <li class="col-1 text-center teammate_details_data_title">MVP次数</li>
    </ul>
    <div class="container teammate_details_data_table">
      <ul>
        <li class="col-1 text-center teammate_details_data">LPL</li>
        <li class="col-1 text-center teammate_details_data">{{message.p_stage}}</li>
        <li class="col-1 text-center teammate_details_data" style="line-height: 10px">
          <div style="margin-top: 16px;font-size: 20px;color: #555;font-weight: 700;transition: .5s">
            {{message.p_kill}}
          </div>
          <br/><span>{{message.p_avgkill}}</span>
        </li>
        <li class="col-1 text-center teammate_details_data" style="line-height: 10px">
          <div style="margin-top: 16px;font-size: 20px;color: #555;font-weight: 700;transition: .5s">
            {{message.p_death}}
          </div>
          <br/><span>{{message.p_avgdeath}}</span></li>
        <li class="col-1 text-center teammate_details_data" style="line-height: 10px">
          <div style="margin-top: 16px;font-size: 20px;color: #555;font-weight: 700;transition: .5s">
            {{message.p_assist}}
          </div>
          <br/><span>{{message.p_avgassist}}</span></li>
        <li class="col-1 text-center teammate_details_data">{{message.p_kda}}</li>
        <li class="col-1 text-center teammate_details_data">{{message.p_earn}}</li>
        <li class="col-1 text-center teammate_details_data">{{message.p_CS}}</li>
        <li class="col-1 text-center teammate_details_data">{{message.p_eyes}}</li>
        <li class="col-1 text-center teammate_details_data">{{message.p_killeyes}}</li>
        <li class="col-1 text-center teammate_details_data">{{message.p_teamfight}}</li>
        <li class="col-1 text-center teammate_details_data">{{message.p_MVP}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "teammate_details_data",
    props: ['message'],
  }
</script>

<style>

</style>
