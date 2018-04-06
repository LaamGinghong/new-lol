<template>
  <div id="schedule">
    <schedule_title></schedule_title>
    <schedule_item v-bind:message="value" v-for="value in msg" v-bind:key="value.s_id"></schedule_item>
    <schedule_nav v-on:page="change"></schedule_nav>
  </div>
</template>

<script>
  import axios from 'axios';

  import schedule_title from '@/components/schedule_title';
  import schedule_item from '@/components/schedule_item';
  import schedule_nav from '@/components/schedule_nav';

  export default {
    name: "schedule",
    components: {schedule_title, schedule_item, schedule_nav},
    data() {
      return {
        msg: [],
      }
    },
    created() {
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
        let vm=this;
        axios.get('http://39.108.118.110/schedule'+msg)
          .then(function (data) {
            vm.msg=data.data.data;
          })
          .catch(function (err) {
            console.error(err);
          })
      }
    }
  }
</script>

<style>
  @import url("../assets/App.css");
</style>
