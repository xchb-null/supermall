<template>
	<div class="homeGoods">
		
		<home-goods-item v-for="goods in goodslist" :goods="goods" class="home-goods-item" />
		
	</div>
</template>

<script>
	import HomeGoodsItem from './HomeGoodsItem.vue';
	export default{
		name:'HomeGoods',
		props:{
			goodslist:{
				type:Array,
				default:[]
			}
		},
		components:{
			HomeGoodsItem
		}
	}
</script>

<style>
	.homeGoods{
		margin-bottom: 52px;
		margin-top: 10px;
	}
	.home-goods-item{
		width: 48%;
		display: inline-block;
		margin-left: 1%;
		/* vertical-align: top; */
	}
</style>
