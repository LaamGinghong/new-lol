<template>
	<div id="grade_btn" class="container">
		<div class="rank_title" v-on:click="changeArea('east')" v-bind:class="{rank_title_click:status.east}">东部战队积分榜</div>
		<div class="rank_title" v-on:click="changeArea('west')" v-bind:class="{rank_title_click:status.west}">西部战队积分榜</div>
		<div class="col-2 rank_table_item">排名</div>
		<div class="col-4 rank_table_item">战队</div>
		<div class="col-4 rank_table_item">胜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;负</div>
		<div class="col-2 rank_table_item">积分</div>
	</div>
</template>

<script>
	export default{
		name:'grade_btn',
		data(){
			return {
				area: 'east',
				status:{
					east:true,
					west:false
				}
			}
		},
		methods: {
			changeArea(are){
				this.area=are;
				this.$emit('areaFromChild',are);
				if (are=='east') {
					this.status.east=true;
					this.status.west=false;
				} else{
					this.status.east=false;
					this.status.west=true;
				}
			}
		}
	}
</script>

<style>
	@import url("../assets/App.css");
</style>