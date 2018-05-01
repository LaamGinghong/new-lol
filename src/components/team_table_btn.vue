<template>
  <div id="team_table_btn" class="container">
    <span class="text-center" v-on:click="change('win')" v-bind:class="{legends_table_btn_click:button.win}">
      <img src="../../static/img/WIN.png">
      <br/>胜率
    </span>
    <span class="text-center" v-on:click="change('kill')" v-bind:class="{legends_table_btn_click:button.kill}">
      <img src="../../static/img/kill.png">
      <br/>击杀
    </span>
    <span class="text-center" v-on:click="change('death')" v-bind:class="{legends_table_btn_click:button.death}">
      <img src="../../static/img/death.png">
      <br/>死亡
    </span>
    <span class="text-center" v-on:click="change('eyes')" v-bind:class="{legends_table_btn_click:button.eyes}">
      <img src="../../static/img/eyes.png">
      <br/>插眼
    </span>
    <span class="text-center" v-on:click="change('killeyes')" v-bind:class="{legends_table_btn_click:button.killeyes}">
      <img src="../../static/img/killeyes.png">
      <br/>排眼
    </span>
    <span class="text-center" v-on:click="change('money')" v-bind:class="{legends_table_btn_click:button.money}">
      <img src="../../static/img/moneys.png">
      <br/>经济
    </span>
    <span class="text-center" v-on:click="change('dragon')" v-bind:class="{legends_table_btn_click:button.dragon}">
      <img src="../../static/img/dragons.png">
      <br/>小龙
    </span>
    <span class="text-center" v-on:click="change('baron')" v-bind:class="{legends_table_btn_click:button.baron}">
      <img src="../../static/img/barons.png">
      <br/>大龙
    </span>
  </div>
</template>

<script>
  export default {
    name: "team_table_btn",
    data() {
      return {
        button: {
          win: true,
          kill: false,
          death: false,
          eyes: false,
          killeyes: false,
          money: false,
          dragon: false,
          baron: false
        }
      }
    },
    methods: {
      change(index) {
        this.$emit('btn', index);
        if (index == 'win') {
          this.button.win = true;
          this.button.kill = false;
          this.button.death = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.money = false;
          this.button.dragon = false;
          this.button.baron = false;
        } else if (index == 'kill') {
          this.button.win = false;
          this.button.kill = true;
          this.button.death = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.money = false;
          this.button.dragon = false;
          this.button.baron = false;
        } else if (index == 'death') {
          this.button.win = false;
          this.button.kill = false;
          this.button.death = true;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.money = false;
          this.button.dragon = false;
          this.button.baron = false;
        } else if (index == 'eyes') {
          this.button.win = false;
          this.button.kill = false;
          this.button.death = false;
          this.button.eyes = true;
          this.button.killeyes = false;
          this.button.money = false;
          this.button.dragon = false;
          this.button.baron = false;
        } else if (index == 'killeyes') {
          this.button.win = false;
          this.button.kill = false;
          this.button.death = false;
          this.button.eyes = false;
          this.button.killeyes = true;
          this.button.money = false;
          this.button.dragon = false;
          this.button.baron = false;
        } else if (index == 'money') {
          this.button.win = false;
          this.button.kill = false;
          this.button.death = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.money = true;
          this.button.dragon = false;
          this.button.baron = false;
        } else if (index == 'dragon') {
          this.button.win = false;
          this.button.kill = false;
          this.button.death = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.money = false;
          this.button.dragon = true;
          this.button.baron = false;
        } else if (index == 'baron') {
          this.button.win = false;
          this.button.kill = false;
          this.button.death = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.money = false;
          this.button.dragon = false;
          this.button.baron = true;
        }
      }
    }
  }
</script>

<style>
  #team_table_btn > span {
    height: 130px;
    line-height: 30px;
    background: #2c2c2c;
    box-sizing: border-box;
    padding-top: 35px;
    color: #989796;
    cursor: pointer;
    transition: .3s;
    float: left;
    width: 12.5%;
  }

  #team_table_btn > span > img {
    height: 30px;
    width: auto;
  }

  #team_table_btn > span:hover {
    background: #262626;
    border-top: 3px solid #d0b159;
    padding-top: 32px;
  }

  .legends_table_btn_click {
    background: #262626;
    border-top: 3px solid #d0b159;
  }

  @media (max-width: 768px) {
    #team_table_btn > span > img {
      display: none;
    }
    #team_table_btn>span{
      padding-top: 0!important;
      height: 60px!important;
      line-height: 20px!important;
    }
  }
</style>
