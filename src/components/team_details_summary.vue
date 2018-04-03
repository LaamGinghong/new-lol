<template>
	<div id="team_details_summary">
		<div class="container">
			<ul>
				<li class="team_details_summary"><img v-bind:src="'static/'+summary[0].l_shortname+'/'+summary[0].l_shortname+'_large.png'" style="padding-left: 40px;" /></li>
				<li class="team_details_summary">
					<ul>
						<li class="team_details_shortname">{{summary[0].l_shortname}}</li>
						<li class="team_details_name">{{summary[0].l_name}}</li>
						<li class="team_details_teamsummary">{{summary[0].l_summary}}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'team_details_summary',
		data() {
			return {
				summary: [{
					l_id:'',
					l_name:'',
					l_shortname:'',
					l_summary:'',
				}]
			}
		},
		created() {
			let vm = this;
			axios.get('http://localhost:3000/teamdetails?team_id=' + this.$route.params.id)
				.then(function(data) {
					vm.summary = data.data.data;
				})
				.catch(function(err) {
					console.error(err);
				})
		}

	}
</script>

<style>
	@import url("../assets/App.css");
</style>