<template>
  <div id="player_table_details">
    <table class="container">
      <tr v-for="(value,index) in message" v-show="turn(index)">
        <td class="text-center"><span>{{index+1}}</span></td>
        <td class="text-center">{{value.p_userid}}</td>
        <td class="text-center">{{value.p_character}}</td>
        <td class="text-center">{{value.p_stage}}</td>
        <td class="text-center">{{value.p_kill}}</td>
        <td class="text-center">{{value.p_assist}}</td>
        <td class="text-center">{{value.p_death}}</td>
        <td class="text-center">{{value.p_kda}}</td>
        <td class="text-center">{{value.p_earn}}</td>
        <td class="text-center">{{value.p_CS}}</td>
        <td class="text-center">{{value.p_eyes}}</td>
        <td class="text-center">{{value.p_killeyes}}</td>
        <td class="text-center">{{value.p_teamfight}}</td>
        <td class="text-center">{{value.p_MVP}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "player_table_details",
    props: ['message', 'number'],
    methods: {
      turn(index) {
        if (this.number == 1) {
          return index >= 0 && index < 10;
        }
        if (this.number == 2) {
          return index >= 10 && index < 20;
        }
        if (this.number == 3) {
          return index >= 20 && index < 30;
        }
        if (this.number == 4) {
          return index >= 30 && index < 40;
        }
        if (this.number == 5) {
          return index >= 40 && index < 50;
        }
        if (this.number == 6) {
          return index >= 50 && index < 60;
        }
        if (this.number == 7) {
          return index >= 60 && index < 70;
        }
        if (this.number == 8) {
          return index >= 70 && index < 80;
        }
        if (this.number == 9) {
          return index >= 80 && index < 90;
        }
        if (this.number == 10) {
          return index >= 90 && index < 100;
        }
        if (this.number == 11) {
          return index >= 100 && index < 110;
        }
        if (this.number == 12) {
          return index >= 110;
        }
      }
    },
    data() {
      return {
        status: 'index>=0&&index<10;'
      }
    },
    created() {
      this.$watch("number", function (newVal, oldVal) {
        this.turn(newVal)
      })
    }
  }
</script>

<style>
  #player_table_details > table {
    border-collapse: collapse;
    box-sizing: border-box;
  }

  #player_table_details td {
    width: 7.14285714%;
    float: left;
    height: 48px;
    line-height: 48px;
    background: #2f2f2f;
    color: #a0a0a0;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #1c1c1c;
  }

  #player_table_details span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: #181818;
    border-radius: 50%;
    color: #c49f58;
  }
</style>
