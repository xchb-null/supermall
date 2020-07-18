<template>
	<div @click="change()" class="batter-item" :path="path">
		<div :hidden="isActive"><slot name="img"></slot></div>
		<div :hidden="!isActive"><slot name="active-img"></slot></div>
		<div :style="activeColorStyle">
			<slot name="text" :activeColor="activeColor"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'batterItem',
		props:{
			path:{
                type:String,
			    default:'/home'
			},
			activeColor:{
				type:String,
				default:'red'
			}
		},
		computed:{
			isActive(){
				return this.$route.fullPath.indexOf(this.path)==0;
			},
			activeColorStyle(){
				return {
					'color':this.isActive?this.activeColor:''
				}
			}
		},
		methods:{
			change(){
				this.$router.push(this.path);
			}
		}
	}
</script>

<style>
	.batter-item{
		display: inline-block;
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 13px;
		margin-bottom: 3px;
	}
	.batter-item img{
		width: 28px;
		height: 28px;
		cursor: pointer;
		margin-top: 5px;
		vertical-align: middle;
	}
</style>
