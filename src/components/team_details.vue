<template>
	<div id="team_details">
		<team_details_summary></team_details_summary>
		<team_details_teammates></team_details_teammates>
		<team_details_data></team_details_data>
		<team_details_schedule></team_details_schedule>
	</div>
</template>

<script>
	import team_details_summary from '@/components/team_details_summary';
	import team_details_teammates from '@/components/team_details_teammates';
	import team_details_data from '@/components/team_details_data';
	import team_details_schedule from '@/components/team_details_schedule';
	export default{
		name:'team_details',
		components:{team_details_summary,team_details_teammates,team_details_data,team_details_schedule},
	}
</script>

<style>
@import url("../assets/App.css");
</style>