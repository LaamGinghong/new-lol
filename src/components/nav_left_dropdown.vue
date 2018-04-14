<template>
	<div id="nav_left_dropdown">
		<ul>
			<router-link v-bind:to="'/team'"><li class="nav_dropdown_item">战队数据</li></router-link>
			<li class="divider"></li>
			<router-link v-bind:to="'/player'"><li class="nav_dropdown_item">选手数据</li></router-link>
			<li class="divider"></li>
			<router-link v-bind:to="'/legends'"><li class="nav_dropdown_item">英雄数据</li></router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'nav_left_dropdown',
	}
</script>

<style>
	@import url("../assets/App.css");
</style>
