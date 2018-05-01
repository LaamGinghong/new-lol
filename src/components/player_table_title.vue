<template>
  <div id="player_table_title" class="container">
    <span class="text-center">选手排行榜</span>
  </div>
</template>

<script>
  export default {
    name: "player_table_title"
  }
</script>

<style>
  #player_table_title > span {
    display: inline-block;
    height: 41px;
    background: #373737;
    width: 100%;
    line-height: 41px;
    font-size: 18px;
    font-weight: bold;
    color: #ded5c3;
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    #player_table_title > span {
      margin-top: 0;
    }
  }
</style>
