<template>
  <div id="legends_table" class="container-flued">
    <legends_table_title></legends_table_title>
    <legends_table_btn v-on:btn="change"></legends_table_btn>
    <legends_table_item v-bind:message="index"></legends_table_item>
    <legends_table_details v-bind:message="msg" v-bind:number="num"></legends_table_details>
    <legends_table_nav v-on:num="turn"></legends_table_nav>
  </div>
</template>

<script>
  import legends_table_title from '@/components/legends_table_title';
  import legends_table_btn from '@/components/legends_table_btn';
  import legends_table_item from '@/components/legends_table_item';
  import legends_table_details from '@/components/legends_table_details';
  import legends_table_nav from '@/components/legends_table_nav';

  export default {
    name: "legends_table",
    components: {legends_table_btn, legends_table_title, legends_table_item, legends_table_details,legends_table_nav},
    props: ['msg'],
    data() {
      return {
        index: '',
        num:1,
      }
    },
    methods: {
      change(index) {
        this.index = index;
      },
      turn(index){
        this.num=index;
      }
    },
    created() {
      this.$watch("index", function (newVal, oldVal) {
        this.$emit("btn", newVal);
      })
    }
  }
</script>

<style>
  #legends_table {
    height: 1000px;
    background: url("../../static/img/data_bg.jpg");
  }
</style>
