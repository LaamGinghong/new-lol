<template>
  <div id="team_details">
    <teammate_details_summary v-bind:message="msg"></teammate_details_summary>
    <teammate_details_data v-bind:message="msg"></teammate_details_data>
  </div>
</template>

<script>
  import axios from 'axios';
  import teammate_details_summary from '@/components/teammate_details_summary';
  import teammate_details_data from '@/components/teammate_details_data';

  export default {
    name: "teammate_details",
    components: {teammate_details_summary, teammate_details_data},
    data() {
      return {
        msg: {}
      }
    },
    created(){
      let vm=this;
      axios.get('http://39.108.118.110/player_details?player_id='+this.$route.params.id)
        .then(function (data) {
          vm.msg=data.data.data[0];
        })
        .catch(function (err) {
          console.error(err);
        })
    }

  }
</script>

<style>

</style>
