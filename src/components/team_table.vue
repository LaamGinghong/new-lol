<template>
	<div id="team_table">
		<lpltitle></lpltitle>
		<team_list></team_list>
	</div>
</template>

<script>
	import lpltitle from '@/components/lpltitle';
	import team_list from '@/components/team_list';
	export default{
		name:'team_table',
		components:{lpltitle,team_list},
	}
</script>

<style>
</style>