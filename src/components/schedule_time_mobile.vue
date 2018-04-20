<template>
  <div class="container-flued text-center schedule_time_mobile">
      {{message}}
  </div>
</template>

<script>
  export default {
    name: "schedule_time_mobile",
    props: ['message']
  }
</script>

<style>
.schedule_time_mobile{
  height: 20px;
  background: #cccccc;
  line-height: 20px;
  font-size: 14px;
}
</style>
