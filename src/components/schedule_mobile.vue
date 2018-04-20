<template>
  <div>
    <schedule_time_mobile v-bind:message="message.s_time"></schedule_time_mobile>
    <schedule_table_mobile v-bind:message="message"></schedule_table_mobile>
  </div>
</template>

<script>

  import schedule_time_mobile from '@/components/schedule_time_mobile';
  import schedule_table_mobile from '@/components/schedule_table_mobile';

  export default {
    name: "schedule_mobile",
    props: ['message'],
    components: {schedule_time_mobile, schedule_table_mobile},
    data() {
      return {
        change:true
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var screenHeight = document.body.clientHeight;
        if (scrollTop >= screenHeight - 852) {
          this.$emit('page', this.change);
        }
      },
    }
  }
</script>

<style>

</style>
