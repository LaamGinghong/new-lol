<template>
  <div id="legends" class="containter">
    <legends_top v-bind:pick="pick_most" v-bind:ban="ban_most" v-bind:win="win_most"></legends_top>
    <legends_table v-on:btn="change" v-bind:msg="message"></legends_table>
  </div>
</template>

<script>
  import legends_top from '@/components/legends_top';
  import legends_table from '@/components/legends_table';
  import axios from 'axios';

  export default {
    name: "legends",
    components: {legends_top, legends_table},
    data() {
      return {
        legends: [],
        pick_most: {},
        ban_most: {},
        win_most: {},
        message:[],
      }
    },
    created() {
      const vm = this;
      axios.get('http://39.108.118.110/legends')
        .then(function (data) {
          vm.legends = data.data.data;
          vm.pick_most = vm.legends.sort(vm.compare('l_pick_percent'))[0];
          vm.ban_most = vm.legends.sort(vm.compare('l_ban_percent'))[0];
          vm.win_most = vm.legends.sort(vm.compare('l_win_percent'))[0];
          vm.message=vm.legends.sort(vm.compare('l_pick_percent'));
        })
        .catch(function (err) {
          console.error(err);
        });
    },
    methods: {
      compare(props) {
        return function (a, b) {
          const value1 = a[props];
          const value2 = b[props];
          return value2 - value1;
        }
      },
      change(index){
        this.message=this.legends.sort(this.compare('l_'+index+'_percent'));
      }
    }
  }
</script>

<style>

</style>
