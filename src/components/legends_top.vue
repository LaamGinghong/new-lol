<template>
  <div id="legends_top" class="container" style="height: 480px;">
    <ul class="top_msg">
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/legends/'+pick.l_name_en+'.jpg'" width="155px"><i></i></li>
          <li>
            <span class="top_name"><span>英雄名：{{pick.l_name}}</span></span>
            <span class="top_percent">Pick率：{{pick.l_pick_percent}}%</span>
          </li>
        </ul>
      </li>
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/legends/'+ban.l_name_en+'.jpg'" width="155px"><i></i></li>
          <li>
            <span class="top_name"><span>英雄名：{{ban.l_name}}</span></span>
            <span class="top_percent">Ban率：{{ban.l_ban_percent}}%</span>
          </li>
        </ul>
      </li>
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/legends/'+win.l_name_en+'.jpg'" width="155px"><i></i></li>
          <li>
            <span class="top_name"><span>英雄名：{{win.l_name}}</span></span>
            <span class="top_percent">胜率：{{win.l_win_percent}}%</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="top_title">
      <li class="col-4"><span>Pick最多</span></li>
      <li class="col-4"><span>Ban最多</span></li>
      <li class="col-4"><span>胜率最高</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "legends_top",
    props: ['pick', 'ban', 'win']
  }
</script>

<style>
  @import url(../assets/App.css);
</style>
