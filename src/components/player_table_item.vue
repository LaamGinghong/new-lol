<template>
  <div id="player_table_item" class="container">
    <span class="text-center">排名</span>
    <span class="text-center">选手</span>
    <span class="text-center">位置</span>
    <span class="text-center">出场次数</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.kill}">总击杀</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.assist}">总助攻</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.death}">总死亡</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.kda}">KDA</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.money}">场均经济</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.CS}">场均补刀</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.eyes}">场均插眼</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.killeyes}">场均排眼</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.teamfight}">场均参团率</span>
    <span class="text-center" v-bind:class="{legends_table_item_active:item.MVP}">MVP次数</span>
  </div>
</template>

<script>
  export default {
    name: "player_table_item",
    props: ['message'],
    data() {
      return {
        item: {
          kill: true,
          death: false,
          assist: false,
          kda: false,
          money: false,
          CS: false,
          eyes: false,
          killeyes: false,
          teamfight: false,
          MVP: false
        }
      }
    },
    methods: {
      change() {
        if (this.message == 'kill') {
          this.item.kill = true;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'death') {
          this.item.kill = false;
          this.item.death = true;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'assist') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = true;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'kda') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = true;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'money') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = true;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'CS') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = true;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'eyes') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = true;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'killeyes') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = true;
          this.item.teamfight = false;
          this.item.MVP = false;
        } else if (this.message == 'teamfight') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = true;
          this.item.MVP = false;
        } else if (this.message == 'MVP') {
          this.item.kill = false;
          this.item.death = false;
          this.item.assist = false;
          this.item.kda = false;
          this.item.money = false;
          this.item.CS = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.teamfight = false;
          this.item.MVP = true;
        }
      }
    },
    created() {
      this.$watch("message", function (newVal, oldVal) {
        this.change(newVal);
      })
    }

  }
</script>

<style>
  #player_table_item > span {
    float: left;
    width: 7.14285714%;
    display: inline-block;
    height: 60px;
    background: #3b3b3b;
    line-height: 60px;
    color: #c7beae;
    font-weight: bold;
    font-size: 15px;
    overflow: auto;
  }

  .legends_table_item_active {
    color: #c49f58 !important;
  }
</style>
