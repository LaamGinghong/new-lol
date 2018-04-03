<template>
  <div id="teammate_details_summary">
    <div class="container" style="position: relative;height: 521px">
      <ul>
        <li class="col-6 text-center teammate_details_summary_item"><img
          v-bind:src="'/static/'+message.p_team+'/'+message.p_userid+'_large.png'" width="500px"></li>
        <li class="col-6 text-center teammate_details_summary_item">
          <ul>
            <li class="col-12 text-center player_summary_userid">{{message.p_userid}}</li>
            <li class="col-12 text-center player_summary_name">{{message.p_name}}</li>
            <li class="col-12 text-center" style="margin-top: 80px">
              <ul>
                <li class="col-4 text-center player_summary_data">{{message.p_kda}}</li>
                <li class="col-4 text-center player_summary_data">{{message.p_CS}}</li>
                <li class="col-4 text-center player_summary_data">{{message.p_teamfight}}%</li>
              </ul>
              <ul>
                <li class="col-4 text-center"><span class="player_summary_data_title">场均KDA</span></li>
                <li class="col-4 text-center"><span class="player_summary_data_title">场均补刀</span></li>
                <li class="col-4 text-center"><span class="player_summary_data_title">场均参团率</span></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <div style="position: absolute;bottom: 100px;left: -80px">
        <ul style="width: 200px">
          <li class="col-6 text-left"><img v-bind:src="'/static/'+message.p_team+'/'+message.p_team+'.png'"
                                           width="70px"></li>
          <li class="col-6 text-left"
              style="color: #f2f4f7;font-size: 44px;font-weight: 700;height: 70px;line-height: 70px">
            {{message.p_character}}
          </li>
          <li class="col-12 text-left" style="color: #f2f4f7;font-size: 18px;font-weight: 500">{{message.l_name}}</li>
        </ul>
      </div>
    </div>
    <div style="clear: both;height: 100px">
      <span class="container-flued hidebar"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "teammate_details_summary",
    props: ['message']
  }
</script>

<style>

</style>
