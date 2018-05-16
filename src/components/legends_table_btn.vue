<template>
  <div id="legends_table_btn" class="container">
      <span class="col-4 text-center" v-on:click="change('pick')" v-bind:class="{legends_table_btn_click:button.pick}">
        <img src="/static/img/PICK.png">
        <br/>PICK
      </span>
    <span class="col-4 text-center" v-on:click="change('ban')" v-bind:class="{legends_table_btn_click:button.ban}">
        <img src="/static/img/BAN.png">
        <br/>BAN
      </span>
    <span class="col-4 text-center" v-on:click="change('win')" v-bind:class="{legends_table_btn_click:button.win}">
        <img src="/static/img/WIN.png">
        <br/>胜率
      </span>
  </div>
</template>

<script>
  export default {
    name: "legends_table_btn",
    methods: {
      change(index) {
        this.$emit('btn', index);
        if (index == 'pick') {
          this.button.pick = true;
          this.button.ban = false;
          this.button.win = false;
        } else if (index == 'ban') {
          this.button.ban = true;
          this.button.pick = false;
          this.button.win = false;
        } else {
          this.button.win = true;
          this.button.pick = false;
          this.button.ban = false;
        }
      }
    },
    data() {
      return {
        button: {
          pick: true,
          ban: false,
          win: false
        }
      }
    }
  }
</script>

<style>

  #legends_table_btn > span {
    height: 130px;
    line-height: 30px;
    background: #2c2c2c;
    box-sizing: border-box;
    padding-top: 35px;
    color: #989796;
    cursor: pointer;
    transition: .3s;
  }

  #legends_table_btn > span > img {
    height: 30px;
    width: auto;
  }

  #legends_table_btn > span:hover {
    background: #262626;
    border-top: 3px solid #d0b159;
    padding-top: 32px;
  }

  .legends_table_btn_click {
    background: #262626;
    border-top: 3px solid #d0b159;
  }
</style>
