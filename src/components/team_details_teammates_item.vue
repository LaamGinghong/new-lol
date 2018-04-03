<template>
  <router-link v-bind:to="'/player/'+message.p_id">
    <div id="team_details_teammates_item" class="container">
      <span class="text-center team_details_image"><img v-bind:src="message.p_image" width="156px"/></span>
      <span class="text-center team_details_userid">{{message.p_userid}}</span>
      <span class="text-center team_details_character">{{message.p_character}}</span>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'team_details_teammates_item',
    props: ['message'],
  }
</script>

<style>
  @import url("../assets/App.css");
</style>
