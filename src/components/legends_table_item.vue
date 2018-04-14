<template>
  <div id="legends_table_item" class="container">
    <span class="col-2 text-center">排名</span>
    <span class="col-2 text-center">英雄名</span>
    <span class="col-2 text-center">出场次数</span>
    <span class="col-2 text-center" v-bind:class="{legends_table_item_active:item.pick}">pick率</span>
    <span class="col-2 text-center" v-bind:class="{legends_table_item_active:item.ban}">ban率</span>
    <span class="col-2 text-center" v-bind:class="{legends_table_item_active:item.win}">胜率</span>
  </div>
</template>

<script>
  export default {
    name: "legends_table_item",
    props: ['message'],
    data() {
      return {
        item: {
          pick: true,
          ban: false,
          win: false
        }
      }
    },
    methods: {
      change() {
        if (this.message == 'pick') {
          this.item.pick = true;
          this.item.ban = false;
          this.item.win = false
        } else if (this.message == 'ban') {
          this.item.pick = false;
          this.item.ban = true;
          this.item.win = false;
        } else if(this.message=='win') {
          this.item.pick = false;
          this.item.ban = false;
          this.item.win = true;
        }
      }
    },
    created(){
      this.$watch("message",function (newVal,oldVal) {
        this.change(newVal);
      })
    }
  }
</script>

<style>
  #legends_table_item > span {
    display: inline-block;
    height: 60px;
    background: #3b3b3b;
    line-height: 60px;
    color: #c7beae;
    font-weight: bold;
    font-size: 15px;
  }

  .legends_table_item_active {
    color: #c49f58!important;
  }
</style>
