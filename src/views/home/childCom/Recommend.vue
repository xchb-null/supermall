<template>
	<div class="recommend">
		<div class="recom-item" v-for="re in recomends">
			<img :src="re.image" />
			<div>{{re.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Recommend',
		props:{
			recomends:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
	}
	.recom-item{
		display: inline-block;
		text-align: center;
		flex: 1;
	}
	.recom-item img{
		width: 70px;
		height: 70px;
	}
</style>
