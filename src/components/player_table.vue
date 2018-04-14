<template>
  <div id="player_table" class="container-flued">
    <player_table_title></player_table_title>
    <player_table_btn v-on:btn="change"></player_table_btn>
    <player_table_item v-bind:message="index"></player_table_item>
    <player_table_details v-bind:message="msg" v-bind:number="num"></player_table_details>
    <player_table_nav v-on:num="turn"></player_table_nav>
  </div>
</template>

<script>
  import axios from 'axios';
  import player_table_title from '@/components/player_table_title';
  import player_table_btn from '@/components/player_table_btn';
  import player_table_item from '@/components/player_table_item';
  import player_table_details from '@/components/player_table_details';
  import player_table_nav from '@/components/player_table_nav';

  export default {
    name: "player_table",
    components: {player_table_title, player_table_btn, player_table_item, player_table_details, player_table_nav},
    props: ['msg'],
    data() {
      return {
        index: '',
        num: 1,
      }
    },
    methods: {
      change(index) {
        this.index = index;
      },
      turn(index) {
        this.num = index;
      }
    },
    created() {
      this.$watch("index", function (newVal, oldVal) {
        this.$emit("btn", newVal);
      })
    }
  }
</script>

<style>
  #player_table {
    height: 1100px;
    background: url("../../static/img/data_bg.jpg");
  }
</style>
