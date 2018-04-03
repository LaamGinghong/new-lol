<template>
  <div id="game_table_item">
    <ul>
      <li>
        <ul>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team1_topplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team1}}{{msg.rg_team1_top_id}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team1_toppick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team1_topkill}}</span>/{{msg.rg_team1_topdeath}}/{{msg.rg_team1_topassists}}
          </li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team1_topearn}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team1_topcs}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team2_topcs}}</li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team2_topearn}}</li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team2_topkill}}</span>/{{msg.rg_team2_topdeath}}/{{msg.rg_team2_topassists}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team2_toppick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team2_topplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team2}}{{msg.rg_team2_top_id}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team1_jungleplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team1}}{{msg.rg_team1_jungle_id}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team1_junglepick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team1_junglekill}}</span>/{{msg.rg_team1_jungledeath}}/{{msg.rg_team1_jungleassists}}
          </li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team1_jungleearn}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team1_junglecs}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team2_junglecs}}</li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team2_jungleearn}}</li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team2_junglekill}}</span>/{{msg.rg_team2_jungledeath}}/{{msg.rg_team2_jungleassists}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team2_junglepick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team2_jungleplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team2}}{{msg.rg_team2_jungle_id}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team1_midplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team1}}{{msg.rg_team1_mid_id}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team1_midpick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team1_midkill}}</span>/{{msg.rg_team1_middeath}}/{{msg.rg_team1_midassists}}
          </li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team1_midearn}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team1_midcs}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team2_midcs}}</li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team2_midearn}}</li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team2_midkill}}</span>/{{msg.rg_team2_middeath}}/{{msg.rg_team2_midassists}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team2_midpick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team2_midplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team2}}{{msg.rg_team2_mid_id}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team1_ADCplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team1}}{{msg.rg_team1_ADC_id}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team1_ADCpick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team1_ADCkill}}</span>/{{msg.rg_team1_ADCdeath}}/{{msg.rg_team1_ADCassists}}
          </li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team1_ADCearn}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team1_ADCcs}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team2_ADCcs}}</li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team2_ADCearn}}</li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team2_ADCkill}}</span>/{{msg.rg_team2_ADCdeath}}/{{msg.rg_team2_ADCassists}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team2_ADCpick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team2_ADCplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team2}}{{msg.rg_team2_ADC_id}}
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team1_supportplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team1}}{{msg.rg_team1_support_id}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team1_supportpick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team1_supportkill}}</span>/{{msg.rg_team1_supportdeath}}/{{msg.rg_team1_supportassists}}
          </li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team1_supportearn}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team1_supportcs}}</li>
          <li class="col-1 text-center game_table_item game_table_item_cs">{{msg.rg_team2_supportcs}}</li>
          <li class="col-1 text-center game_table_item">{{msg.rg_team2_supportearn}}</li>
          <li class="col-2 text-center game_table_item">
            <span style="font-size: 20px;font-weight: 800;color: #cea04a;">{{msg.rg_team2_supportkill}}</span>/{{msg.rg_team2_supportdeath}}/{{msg.rg_team2_supportassists}}
          </li>
          <li class="col-1 text-center game_table_item">
            <img v-bind:src="msg.rg_team2_supportpick" width="50px" class="game_table_item_pick">
          </li>
          <li class="col-1 text-center game_table_item game_table_item_player">
            <img v-bind:src="msg.rg_team2_supportplayer" width="60px" style="margin-top: 20px">
            <br/>{{msg.rg_team2}}{{msg.rg_team2_support_id}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "game_table_item",
    props: ['msg'],
  }
</script>

<style>
  @import url('../assets/App.css');

</style>
