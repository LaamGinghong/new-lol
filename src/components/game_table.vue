<template>
  <div id="game_table" class="container" style="position: relative">
    <ul>
      <li class="col-1 text-center game_table_title">选手</li>
      <li class="col-1 text-center game_table_title">英雄</li>
      <li class="col-2 text-center game_table_title">击杀/死亡/助攻</li>
      <li class="col-1 text-center game_table_title">金钱</li>
      <li class="col-1 text-center game_table_title">补刀</li>
      <li class="col-1 text-center game_table_title">补刀</li>
      <li class="col-1 text-center game_table_title">金钱</li>
      <li class="col-2 text-center game_table_title">击杀/死亡/助攻</li>
      <li class="col-1 text-center game_table_title">英雄</li>
      <li class="col-1 text-center game_table_title">选手</li>
    </ul>
    <game_table_item v-bind:msg="message"></game_table_item>
    <ul style="clear: both;position: absolute;top: 80px;left: 50%;margin-left: -17px">
      <li class="game_table_icon"><img src="static/img/top.png" alt="上单"></li>
      <li class="game_table_icon"><img src="static/img/jungle.png" alt="打野"></li>
      <li class="game_table_icon"><img src="static/img/mid.png" alt="中单"></li>
      <li class="game_table_icon"><img src="static/img/ADC.png" alt="ADC"></li>
      <li class="game_table_icon"><img src="static/img/support.png" alt="辅助"></li>
    </ul>
  </div>
</template>

<script>
  import game_table_item from '@/components/game_table_item';

  export default {
    components: {game_table_item},
    name: "game_table",
    props:['message'],
  }
</script>

<style>
  @import url(../assets/App.css);

</style>
