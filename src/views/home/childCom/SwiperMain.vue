<template>
	<div>
		<swiper ref="swiper">
			<swiper-item v-for="(item,index) in banners" :key="index">
				<a :href="item.link">
					<img :src="item.image" alt="商品图片"/>
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper/index.js';
	export default {
		name:'SwiperMain',
		props:{
			banners: {
			    type: Array,
			    default: []
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			stopTimer() {
					    this.$refs.swiper.stopTimer()
		    },
			startTimer() {
					    if (this.$refs.swiper) {
			          this.$refs.swiper.startTimer()
			        }
			      }
			    }
	}
</script>

<style>
</style>
