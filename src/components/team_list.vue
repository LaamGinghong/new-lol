<script src="../../../../../Documents/NetSarang/Xftp/Temporary/app.js"></script>
<template>
	<div id="team_list" class="container">
		<team_list_item v-for="values in msg" v-bind:message="values" v-bind:key="values.g_id"></team_list_item>
	</div>
</template>

<script>
	import axios from 'axios';
	import team_list_item from '@/components/team_list_item';
	export default{
		name:'team_list',
		components:{team_list_item},
		data(){
			return{
				msg:[]
			}
		},
		created(){
			let vm=this;
			axios.get('http://39.108.118.110/team_list')
				 .then(function  (data) {
				 	vm.msg=data.data.data;
				 })
				 .catch(function  (err) {
				 	console.error(err);
				 })
		}
	}
</script>

<style>
	@import url("../assets/App.css");
</style>
