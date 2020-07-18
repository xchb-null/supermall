<template>
	<div class="main">
		<Navbar class="myhome-nav">
			<span slot="center">首页</span>
		</Navbar>
		<SwiperMain ref="hSwiper" :banners="banners"/>
		<recommend :recomends="recommends"/>
		<recomm-img />
		<row-check :datas="['流行','热门','新款']"/>
		<ul>
			<li v-for="i in 100">
				{{i}}
			</li>
		</ul>
	</div>
</template>

<script>
	import Navbar from 'components/common/navbar/Navbar.vue';
	import SwiperMain from './childCom/SwiperMain.vue';
	import Recommend from './childCom/Recommend.vue';
	import RecommImg from './childCom/RecommImg.vue';
	import RowCheck from 'components/content/RowCheck.vue';
	
	import {getHomeMultidata} from 'network/home.js';
	export default {
		name:'home',
		data(){
			return {
				banners:null,
				recommends:[],
			}
		},
		components:{
			Navbar,
			SwiperMain,
			Recommend,
			RecommImg,
			RowCheck
		},
		created(){
			//网络请求
			this.requestData();
		},
		methods:{
			requestData(){
				getHomeMultidata().then(res=>{
					console.log(res.data);
					this.banners= res.data.banner.list;
					this.recommends = res.data.recommend.list;
				});
			}
		}
	}
</script>

<style>
	.myhome-nav{
		background-color: pink;
		box-shadow: 1px 0px 1px 0px #cc20b1a8;
	}
</style>
