<template>
	<div class="swipers" ref="swipers">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	export default {
		name:'Scroll',
		data(){
			return {
				scorll:null
			}
		},
		mounted(){
			this.scorll = new BScroll(this.$refs.swipers,{
				click:true
			});
		}
	}
</script>

<style>
</style>
