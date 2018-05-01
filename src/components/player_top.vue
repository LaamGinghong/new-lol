<template>
  <div id="player_top" class="container" style="height: 480px;">
    <ul class="top_msg">
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/'+kill.p_team+'/'+kill.p_userid+'.png'" width="155px"><i></i></li>
          <li>
            <span class="top_name"><span>选手：{{kill.p_userid}}</span></span>
            <span class="top_percent">总击杀：{{kill.p_kill}}</span>
          </li>
        </ul>
      </li>
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/'+mvp.p_team+'/'+mvp.p_userid+'.png'" width="155px"><i></i></li>
          <li>
            <span class="top_name"><span>选手：{{mvp.p_userid}}</span></span>
            <span class="top_percent">MVP数：{{mvp.p_MVP}}</span>
          </li>
        </ul>
      </li>
      <li class="col-4">
        <ul>
          <li><img v-bind:src="'static/'+kda.p_team+'/'+kda.p_userid+'.png'" width="155px"><i></i></li>
          <li>
            <span class="top_name"><span>选手：{{kda.p_userid}}</span></span>
            <span class="top_percent">KDA：{{kda.p_kda}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="top_title">
      <li class="col-4"><span>击杀最多</span></li>
      <li class="col-4"><span>MVP最多</span></li>
      <li class="col-4"><span>KDA最高</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "player_top",
    props: ['kill', 'mvp', 'kda']
  }
</script>

<style>
  @import url(../assets/App.css);

  #player_top li {
    position: relative;
    float: left;
    z-index: 10;
  }

  #player_top span {
    display: block;
  }

  #player_top img {
    border-radius: 50%;
    margin-right: 40px;
  }

  #player_top > ul > li > ul > li {
    height: 155px;
    position: relative;
    z-index: 10;
  }

  #player_top i {
    background: url("../../static/img/border.png");
    display: inline-block;
    position: absolute;
    width: 156px;
    height: 211px;
    left: 0;
    top: -24px;
  }

  @media (max-width: 768px) {
    #player_top {
      height: 300px !important;
    }

    #player_top i {
      display: none;
    }

    #player_top img {
      margin-right: 0 !important;
    }

    #player_top > ul > li > ul > li {
      height: 60px!important;
    }
  }
</style>
