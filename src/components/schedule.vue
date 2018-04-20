<template>
  <div id="schedule">
    <div v-if="PC">
      <schedule_title></schedule_title>
      <schedule_item v-bind:message="value" v-for="value in msg" v-bind:key="value.s_id"></schedule_item>
      <schedule_nav v-on:page="change"></schedule_nav>
    </div>
    <div v-else>
      <schedule_mobile v-bind:message="value" v-for="value in msg" v-bind:key="value.s_id"
                       v-on:page="loadPage"></schedule_mobile>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  import schedule_title from '@/components/schedule_title';
  import schedule_item from '@/components/schedule_item';
  import schedule_nav from '@/components/schedule_nav';

  import schedule_mobile from '@/components/schedule_mobile';


  export default {
    name: "schedule",
    components: {schedule_title, schedule_item, schedule_nav, schedule_mobile},
    data() {
      return {
        msg: [],
        PC: true,
        page: 2,
      }
    },
    created() {
      if (window.screen.width < 768) {
        this.PC = false;
      }
      let vm = this;
      axios.get('http://39.108.118.110/schedule1')
        .then(function (data) {
          vm.msg = data.data.data;
        })
        .catch(function (err) {
          console.error(err);
        })
    },
    methods: {
      change(msg) {
        let vm = this;
        axios.get('http://39.108.118.110/schedule' + msg)
          .then(function (data) {
            vm.msg = data.data.data;
          })
          .catch(function (err) {
            console.error(err);
          })
      },
      loadPage(index) {
        if (this.page < 7 && index === true) {
          let vm = this;
          axios.get('http://39.108.118.110/schedule' + this.page)
            .then(function (data) {
              vm.msg = vm.msg.concat(data.data.data);
            })
            .catch(function (err) {
              console.error(err);
            });
          this.page++;
        }
      }
    }
  }
</script>

<style>
  @import url("../assets/App.css");
</style>
