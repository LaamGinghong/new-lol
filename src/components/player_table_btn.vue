<template>
  <div id="player_table_btn" class="container">
    <span class="text-center" v-on:click="change('kill')" v-bind:class="{legends_table_btn_click:button.kill}">
      <img src="../../static/img/kill.png">
      <br/>
      击杀
    </span>
    <span class="text-center" v-on:click="change('death')" v-bind:class="{legends_table_btn_click:button.death}">
      <img src="../../static/img/death.png" alt="">
      <br/>
      死亡
    </span>
    <span class="text-center" v-on:click="change('assist')" v-bind:class="{legends_table_btn_click:button.assist}">
      <img src="../../static/img/assist.png">
      <br/>
      助攻
    </span>
    <span class="text-center" v-on:click="change('kda')" v-bind:class="{legends_table_btn_click:button.kda}">
      <img src="../../static/img/kda.png" alt="">
      <br/>
      KDA
    </span>
    <span class="text-center" v-on:click="change('money')" v-bind:class="{legends_table_btn_click:button.money}">
      <img src="../../static/img/moneys.png" alt="">
      <br/>
      经济
    </span>
    <span class="text-center" v-on:click="change('CS')" v-bind:class="{legends_table_btn_click:button.CS}">
      <img src="../../static/img/CS.png" alt="">
      <br/>
      补刀
    </span>
    <span class="text-center" v-on:click="change('eyes')" v-bind:class="{legends_table_btn_click:button.eyes}">
      <img src="../../static/img/eyes.png" alt="">
      <br/>
      插眼
    </span>
    <span class="text-center" v-on:click="change('killeyes')" v-bind:class="{legends_table_btn_click:button.killeyes}">
      <img src="../../static/img/killeyes.png" alt="">
      <br/>
      排眼
    </span>
    <span class="text-center" v-on:click="change('teamfight')"
          v-bind:class="{legends_table_btn_click:button.teamfight}">
      <img src="../../static/img/teamfight.png" alt="">
      <br/>
      参团率
    </span>
    <span class="text-center" v-on:click="change('MVP')" v-bind:class="{legends_table_btn_click:button.MVP}">
      <img src="../../static/img/MVP.png" alt="">
      <br/>
      MVP
    </span>
  </div>
</template>

<script>
  export default {
    name: "player_table_btn",
    data() {
      return {
        button: {
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
      change(index) {
        this.$emit('btn', index);
        if (index == 'kill') {
          this.button.kill = true;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'death') {
          this.button.kill = false;
          this.button.death = true;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'assist') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = true;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'kda') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = true;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'money') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = true;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'CS') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = true;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'eyes') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = true;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'killeyes') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = true;
          this.button.teamfight = false;
          this.button.MVP = false;
        } else if (index == 'teamfight') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = true;
          this.button.MVP = false;
        } else if (index == 'MVP') {
          this.button.kill = false;
          this.button.death = false;
          this.button.assist = false;
          this.button.kda = false;
          this.button.money = false;
          this.button.CS = false;
          this.button.eyes = false;
          this.button.killeyes = false;
          this.button.teamfight = false;
          this.button.MVP = true;
        }
      }
    }
  }
</script>

<style>
  #player_table_btn > span {
    height: 130px;
    line-height: 30px;
    background: #2c2c2c;
    box-sizing: border-box;
    padding-top: 35px;
    color: #989796;
    cursor: pointer;
    transition: .3s;
    float: left;
    width: 10%;
  }

  #player_table_btn > span > img {
    height: 25px;
    width: auto;
  }

  #player_table_btn > span:hover {
    background: #262626;
    border-top: 3px solid #d0b159;
    padding-top: 32px;
  }

  .legends_table_btn_click {
    background: #262626;
    border-top: 3px solid #d0b159;
  }

  @media (max-width: 768px) {
    #player_table_btn > span {
      height: 60px;
      padding-top: 0 !important;
      line-height: 20px;
    }

    #player_table_btn > span > img {
      display: none;
    }
  }
</style>
