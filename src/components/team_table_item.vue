<template>
  <div id="team_table_item" class="container">
    <span class="col-1 text-center">排名</span>
    <span class="col-1 text-center">战队</span>
    <span class="col-1 text-center">出场次数</span>
    <span class="col-1 text-center">胜/负</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.win}">胜率</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.kill}">总击杀(场均)</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.death}">总死亡(场均)</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.eyes}">场均插眼</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.killeyes}">场均排眼</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.money}">场均经济</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.dragon}">场均小龙</span>
    <span class="col-1 text-center" v-bind:class="{legends_table_item_active:item.baron}">场均大龙</span>
  </div>
</template>

<script>
  export default {
    name: "team_table_item",
    props: ['message'],
    data() {
      return {
        item: {
          win: true,
          kill: false,
          death: false,
          eyes: false,
          killeyes: false,
          money: false,
          drgaon: false,
          baron: false,
        }
      }
    },
    methods: {
      change() {
        if (this.message == 'win') {
          this.item.win = true;
          this.item.kill = false;
          this.item.death = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.money = false;
          this.item.dragon = false;
          this.item.baron = false;
        } else if (this.message == 'kill') {
          this.item.win = false;
          this.item.kill = true;
          this.item.death = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.money = false;
          this.item.dragon = false;
          this.item.baron = false;
        } else if (this.message == 'death') {
          this.item.win = false;
          this.item.kill = false;
          this.item.death = true;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.money = false;
          this.item.dragon = false;
          this.item.baron = false;
        } else if (this.message == 'eyes') {
          this.item.win = false;
          this.item.kill = false;
          this.item.death = false;
          this.item.eyes = true;
          this.item.killeyes = false;
          this.item.money = false;
          this.item.dragon = false;
          this.item.baron = false;
        } else if (this.message == 'killeyes') {
          this.item.win = false;
          this.item.kill = false;
          this.item.death = false;
          this.item.eyes = false;
          this.item.killeyes = true;
          this.item.money = false;
          this.item.dragon = false;
          this.item.baron = false;
        } else if (this.message == 'money') {
          this.item.win = false;
          this.item.kill = false;
          this.item.death = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.money = true;
          this.item.dragon = false;
          this.item.baron = false;
        } else if (this.message == 'dragon') {
          this.item.win = false;
          this.item.kill = false;
          this.item.death = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.money = false;
          this.item.dragon = true;
          this.item.baron = false;
        } else if (this.message == 'baron') {
          this.item.win = false;
          this.item.kill = false;
          this.item.death = false;
          this.item.eyes = false;
          this.item.killeyes = false;
          this.item.money = false;
          this.item.dragon = false;
          this.item.baron = true;
        }
      }
    },
    created(){
      this.$watch('message',function (newVal,oldVal) {
        this.change(newVal);
      })
    }
  }
</script>

<style>
  #team_table_item > span {
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
