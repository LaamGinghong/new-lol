<template>
	<router-link v-bind:to="'/team_details/'+message.l_id">
		<div id="team_list_item" class="team_list_item">
			<span class="team_list_item_logo"><img v-bind:src="'static/'+message.l_shortname+'/'+message.l_shortname+'.png'" width="130px"/></span>
			<span>{{message.l_shortname}}</span>
		</div>
	</router-link>
</template>

<script>
	export default {
		name: 'team_list_item',
		props: ['message'],
	}
</script>

<style>
	@import url("../assets/App.css");
</style>