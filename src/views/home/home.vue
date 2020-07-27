<template>
	<div class="main">
		<Navbar class="myhome-nav">
			<span slot="center">首页</span>
		</Navbar>
		<scroll class="myscroll" ref="scroll">
			<SwiperMain ref="hSwiper" :banners="banners"/>
			<recommend :recomends="recommends"/>
			<recomm-img />
			<row-check @rowchanage="rowchanage" :datas="['流行','热门','新款']"/>
			<home-goods :goodslist="currentgoodslist"/>
		</scroll>
		<!--一键回到顶部图片-->
		<go-top @totop="totop"/>
	</div>
</template>

<script>
	import Navbar from 'components/common/navbar/Navbar.vue';
	import SwiperMain from './childCom/SwiperMain.vue';
	import Recommend from './childCom/Recommend.vue';
	import RecommImg from './childCom/RecommImg.vue';
	import RowCheck from 'components/content/RowCheck.vue';
	import HomeGoods from 'components/content/HomeGoods/HomeGoods.vue';
	import Scroll from 'components/common/scroll/Scroll.vue';
	import GoTop from 'components/content/GoTop.vue';
	
	import {getHomeMultidata} from 'network/home.js';
	export default {
		name:'home',
		data(){
			return {
				//轮播图
				banners:null,
				//热门分类
				recommends:[],
				//商品列表
				goodslist:{
					//流行
					pop:[],
					//热门
					sell:[],
					//新款
					news:[]
				},
				//当前展示的商品集合，默认“流行”
				currentgoodslist:[]
			}
		},
		components:{
			Navbar,
			SwiperMain,
			Recommend,
			RecommImg,
			RowCheck,
			HomeGoods,
			Scroll,
			GoTop
		},
		created(){
			//网络请求
			this.requestData();
			
			//网络接口不能用，用本地数据模拟
			this.localData();
			
			//事件总线，图片加载完成之后刷新可滚动区域
			this.$bus.$on("imgload",()=>{
				//刷新
				this.$refs.scroll.scorll.refresh();
			});
		},
		methods:{
			//回到顶部
			totop(){
				this.$refs.scroll.scorll.scrollTo(0,0,500);
			},
			requestData(){
				getHomeMultidata().then(res=>{
					this.banners= res.data.banner.list;
					this.recommends = res.data.recommend.list;
				});
			},
			rowchanage(type){
				this.currentgoodslist=this.goodslist[type];
			},
			localData(){
				this.goodslist.pop=[
					{
						img:'local/imgs/141-bigskin-6.jpg',
						title:'撒打发',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/141-bigskin-6.jpg',
						title:'撒打发',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/141-bigskin-6.jpg',
						title:'撒打发',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/141-bigskin-6.jpg',
						title:'撒打发',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/141-bigskin-6.jpg',
						title:'撒打发',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/141-bigskin-6.jpg',
						title:'撒打发',
						price:122.2,
						start:123
					}
				];
				this.goodslist.sell=[
					{
						img:'local/imgs/2902facce86d6187bde17865a4a1278c.jpg',
						title:'热门',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/2902facce86d6187bde17865a4a1278c.jpg',
						title:'热门',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/2902facce86d6187bde17865a4a1278c.jpg',
						title:'热门',
						price:122.2,
						start:123
					}
				];
				this.goodslist.news=[
					{
						img:'local/imgs/213820-1557409100f074.jpg',
						title:'热门',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/213820-1557409100f074.jpg',
						title:'热门',
						price:122.2,
						start:123
					},
					{
						img:'local/imgs/213820-1557409100f074.jpg',
						title:'热门',
						price:122.2,
						start:123
					}
				];
				this.currentgoodslist=this.goodslist.pop;
			}
		}
	}
</script>

<style>
	.myhome-nav{
		background-color: pink;
		box-shadow: 1px 0px 1px 0px #cc20b1a8;
	}
	.myscroll{
		overflow: hidden;
		position: absolute;
		top:40px;
		bottom: 52px;
		left: 0px;
		right: 0px;
	}
</style>
