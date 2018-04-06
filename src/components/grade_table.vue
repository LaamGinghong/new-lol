<template>
	<div id="grade_table" class="container">
		<ul>
			<li v-for="value in table" class="container">
				<ul>
					<li class="grade_details col-2 text-center grade_details_rank">{{value.g_rank}}</li>
					<router-link v-bind:to="'/team_details/'+value.g_id"><li class="grade_details col-2 text-right"><img v-bind:src="'/static/'+value.g_team+'/'+value.g_team+'.png'" width="52px" class="grade_details_logo"/></li></router-link>
					<router-link v-bind:to="'/team_details/'+value.g_id"><li class="grade_details col-2 text-left"><span class="grade_details_team">{{value.g_team}}</span></li></router-link>
					<li class="grade_details col-4 text-center"><span class="grade_details_win">{{value.g_win}}</span>/<span class="grade_details_lose">{{value.g_lose}}</span></li>
					<li class="grade_details col-2 text-center">{{value.g_mark}}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'grade_table',
		props: ['message'],
		data() {
			return {
				table: []
			}
		},
		created() {
			let vm = this;
			axios.get('http://39.108.118.110/grade_east')
				.then(function(data) {
					vm.table=data.data.data;
				})
				.catch(function(err) {
					console.error(err);
				})
		},
		watch:{
			message(val,oldVal){
				let vm=this;
				axios.get('http://39.108.118.110/grade_'+val)
					 .then(function  (data) {
					 	vm.table=data.data.data;
					 })
					 .catch(function  (err) {
					 	console.error(err);
					 })
			}
		}
	}
</script>

<style>
@import url("../assets/App.css");
</style>
