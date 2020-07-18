<template>
	<div class="batter">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'batter'
	}
</script>

<style>
	.batter{
		background-color: #fde3e3;
		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0px;
		display: flex;
		box-shadow: 0px 1px 4px 0px #a99696;  
	}
</style>
