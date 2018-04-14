<template>
  <div id="team_top" class="container" style="height: 480px;">
    <ul class="top_msg">
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/'+win.l_shortname+'/'+win.l_shortname+'.png'" width="115px"><i></i></li>
          <li>
            <span class="top_name"><span>战队名：{{win.l_shortname}}</span></span>
            <span class="top_percent">胜率：{{win.l_winpercent}}%</span>
          </li>
        </ul>
      </li>
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/'+kill.l_shortname+'/'+kill.l_shortname+'.png'" width="115px"><i></i></li>
          <li>
            <span class="top_name"><span>战队名：：{{kill.l_shortname}}</span></span>
            <span class="top_percent">场均击杀：{{kill.l_avgkill}}</span>
          </li>
        </ul>
      </li>
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/'+baron.l_shortname+'/'+baron.l_shortname+'.png'" width="115px"><i></i></li>
          <li>
            <span class="top_name"><span>战队名：：{{baron.l_shortname}}</span></span>
            <span class="top_percent">场均大龙：{{baron.l_baron}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="top_title">
      <li class="col-4"><span>胜率最高</span></li>
      <li class="col-4"><span>击杀最多</span></li>
      <li class="col-4"><span>大龙最多</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "team_top",
    props: ['win', 'kill', 'baron'],
  }
</script>

<style>
  @import url(../assets/App.css);

  #team_top li {
    float: left;
  }

  #team_top span {
    display: block;
  }

  #team_top img {
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 16px;
    margin-right: 40px;
  }

  #team_top > ul > li > ul > li {
    height: 155px;
    position: relative;
  }

  #team_top i {
    background: url("../../static/img/border.png");
    display: inline-block;
    position: absolute;
    width: 156px;
    height: 211px;
    left: 0;
    top: -24px;
  }
</style>
