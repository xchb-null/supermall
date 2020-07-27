<template>
	<div class="goTop"  @click="toTop"> 
		<img src="~assets/imgs/home/top.png" />
	</div>
</template>

<script>
	export default {
		name:'GoTop',
		methods:{
			toTop(){
				this.$emit("totop");
			}
		}
	}
</script>

<style>
	.goTop{
		position: fixed;
		bottom: 70px;
		right: 20px;
		z-index: 9;
	}
	.goTop img{
		width: 42px;
		height: 42px;
	}
</style>
