<template>
  <div id="legends_table_title" class="container text-center">
    <span>英雄排行榜</span>
  </div>
</template>

<script>
  export default {
    name: "legends_table_title"
  }
</script>

<style>
  #legends_table_title > span {
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
    #legends_table_title > span {
      margin-top: 0 !important;
    }
  }
</style>
