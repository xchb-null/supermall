import VueRouter from 'vue-router';
import Vue from 'vue';

import home from '../views/home/home';
import category from '../views/category/category';
import cart from '../views/cart/cart';
import profile from '../views/profile/profile';

//注册组件
Vue.use(VueRouter);

const routes=[
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:home,
		meta:{
			title:'首页',
		}
	},
	{
		path:'/category',
		component:category,
		meta:{
			title:'分类',
		}
	},
	{
		path:'/cart',
		component:cart,
		meta:{
			title:'购物车',
		}
	},
	{
		path:'/profile',
		component:profile,
		meta:{
			title:'我的',
		}
	}
];
//创建路由对象
const router = new VueRouter({
	mode:"history",
	routes,
});

//创建全局守卫
router.beforeEach(function(from,to,next){
	document.title=from.meta.title;
	next();
});

//导出
export default router;

