<template>
  <div id="legends_table_details"  class="container">
    <table class="container-flued">
      <tr v-for="(value,index) in message" v-show="turn(index)">
        <td class="col-2 text-center"><span>{{index+1}}</span></td>
        <td class="col-2 text-center">{{value.l_title}}</td>
        <td class="col-2 text-center">{{value.l_pick}}</td>
        <td class="col-2 text-center">{{value.l_pick_percent}}</td>
        <td class="col-2 text-center">{{value.l_ban_percent}}</td>
        <td class="col-2 text-center">{{value.l_win_percent}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "legends_table_details",
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
          return index >= 70;
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
  #legends_table_details table {
    border-collapse: collapse;
    box-sizing: border-box;
  }

  #legends_table_details td {
    height: 48px;
    line-height: 48px;
    background: #2f2f2f;
    color: #a0a0a0;
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #1c1c1c;
    overflow: hidden;
  }

  #legends_table_details span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: #181818;
    border-radius: 50%;
    color: #c49f58;
  }
</style>
