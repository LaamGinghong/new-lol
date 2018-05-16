<template>
	<div id="team_details_teammates" class="container">
		<h1 class="team_details_h1">现役成员</h1>
		<team_details_teammates_item v-for="values in teammate" v-bind:message="values" v-bind:key="values.p_id"  class="team_details_teammates_list"></team_details_teammates_item>
	</div>
</template>

<script>
	import team_details_teammates_item from '@/components/team_details_teammates_item';
	import axios from 'axios';
	export default{
		name:'team_details_teammates',
		components:{team_details_teammates_item},
		data(){
			return{
				teammate:[{
				  p_id:'',
					p_userid:'',
					p_character:'',
					p_image:''
				}]
			}
		},
		created(){
			let vm=this;
			axios.get('http://39.108.118.110/team_members?team_id='+this.$route.params.id)
				 .then(function  (data) {
				 	vm.teammate=data.data.data;
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
