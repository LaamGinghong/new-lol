<template>
  <div id="team_data_table" class="container-flued">
    <team_table_title></team_table_title>
    <team_table_btn v-on:btn="change"></team_table_btn>
    <team_table_item v-bind:message="index"></team_table_item>
    <team_table_details v-bind:message="msg"></team_table_details>
  </div>
</template>

<script>
  import team_table_title from '@/components/team_table_title';
  import team_table_btn from '@/components/team_table_btn';
  import team_table_item from '@/components/team_table_item';
  import team_table_details from '@/components/team_table_details';

  export default {
    name: "team_data_table",
    props: ['msg'],
    components: {team_table_title, team_table_btn, team_table_item, team_table_details},
    data() {
      return {
        index: '',
      }
    },
    methods: {
      change(index) {
        this.index = index;
      },
    },
    created() {
      this.$watch("index", function (newVal, oldVal) {
        this.$emit("btn", newVal);
      })
    }
  }
</script>

<style>
  #team_data_table {
    height: 1100px;
    background: url("../../static/img/data_bg.jpg");
  }
</style>
