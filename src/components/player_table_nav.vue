<template>
  <div id="player_table_nav" class="container" style="clear: both;width: 290px;height:40px;margin: 30px  auto 0;">
    <ul>
      <li v-if="cur==1" v-bind:style="{cursor:'not-allowed'}" class="schedule_nav text-center schedule_nav_pre"><</li>
      <li v-if="cur>1" v-on:click="cur--,change(cur)" class="schedule_nav text-center schedule_nav_pre"><</li>
      <li v-for="index in indexs" v-on:click="pageClick(index),change(index)"
          v-bind:class="{'schedule_click':cur==index}"
          class="schedule_nav text-center schedule_nav_item">{{index}}
      </li>
      <li v-if="cur<all" v-on:click="cur++,change(cur)" class="schedule_nav text-center schedule_nav_next">></li>
      <li v-if="cur==all" v-bind:style="{cursor:'not-allowed'}" class="schedule_nav text-center schedule_nav_next">>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "player_table_nav",
    data() {
      return {
        all: 12,
        cur: 1
      }
    },
    computed: {
      indexs() {
        let left = 1;
        let right = this.all;
        let arr = [];
        if (this.all > 5) {
          if (this.cur > 3 && this.cur < this.all - 2) {
            left = this.cur - 2;
            right = this.cur + 2;
          } else {
            if (this.cur <= 3) {
              left = 1;
              right = 5;
            } else {
              right = this.all;
              left = this.all - 4;
            }
          }
        }

        while (left <= right) {
          arr.push(left);
          left++;
        }
        return arr;
      }
    },
    methods: {
      pageClick(index) {
        if (index != this.cur)
          this.cur = index;
      },
      change(index) {
        this.$emit('num', index);
      }
    }
  }
</script>

<style>
  @import url(../assets/App.css);
</style>
