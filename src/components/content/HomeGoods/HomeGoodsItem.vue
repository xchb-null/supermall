<template>
	<div class="homeGoods-itme">
		<img :src="goods.img" @load="imgonload"/>
		<div>
			<p>
				{{goods.title}}
			</p>
			<span class="price">{{goods.price}}</span>
			<span>收藏：{{goods.start}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeGoodsItem',
		props:{
			goods:{
				type:Object,
				default:{}
			}
		},
		methods:{
			imgonload(){
				this.$bus.$emit("imgload");
			}
		}
	}
</script>

<style>
	.homeGoods-itme{
		text-align: center;
		font-size: 10px;
		height: 230px;
		cursor: pointer;
	
	}
	.homeGoods-itme div{
		padding-left: 5px;
		padding-right: 5px;
	}
	.homeGoods-itme img{
		width: 99%;
		height: 80%;
	}
	
	.homeGoods-itme p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
		margin-top: 3px;
	}
	
	.price{
		color: hotpink;
	}
		
</style>
