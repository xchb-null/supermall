<template>
	<div>
		<batter>
				 <batter-item path='/home'>
					 <img slot="img" src="~assets/imgs/batter/index.png" />
					 <img slot="active-img" src="~assets/imgs/batter/index-active.png" />
					 <div slot="text">首页</div>
				 </batter-item>
				 <batter-item path='/category'>
					 <img slot="img" src="~assets/imgs/batter/category.png" />
					 <img slot="active-img" src="~assets/imgs/batter/category-active.png" />
					 <div slot="text">分类</div>
				 </batter-item>
				 <batter-item path='/cart'>
					 <img slot="img" src="~assets/imgs/batter/cart.png" />
					 <img slot="active-img" src="~assets/imgs/batter/cart-active.png" />
					 <div slot="text">购物车</div>
				 </batter-item>
				 <batter-item path='/profile'>
					 <img slot="img" src="~assets/imgs/batter/profile.png" />
					 <img slot="active-img" src="~assets/imgs/batter/profile-active.png" />
					 <div slot="text">我的</div>
				 </batter-item>
		</batter>
	</div>
</template>

<script>
	import batter  from 'components/common/batter/batter.vue'
	import batterItem from 'components/common/batter/batterItem.vue'
	
	export default {
		name:'BatterMain',
		components: {
			  batter,
			  batterItem
		},
	}
</script>

<style>
</style>
