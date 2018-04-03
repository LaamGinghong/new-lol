<template>
	<div id="grade">
	<lpltitle></lpltitle>
	<grade_btn v-on:areaFromChild="showAreaFromChild"></grade_btn>
	<grade_table v-bind:message="area"></grade_table>
	</div>
</template>

<script>
	import lpltitle from '@/components/lpltitle';
	import grade_btn from '@/components/grade_btn';
	import grade_table from '@/components/grade_table';
	export default{
		name:'grade',
		components:{lpltitle,grade_btn,grade_table},
		data(){
			return{
				area:'',
			}
		},
		methods:{
			showAreaFromChild(data){
				this.area=data;
			}
		}
	}
</script>

<style>
</style>