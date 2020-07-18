<template>
	<div class="rowCheck">
		<div class="rowCheck-item" 
			v-for="(data,index) in datas"
			:class="{activeSpan:currentIndex==index}" 
			@click="chanageRow(index)" >
			<span>{{data}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'RowCheck',
		props:{
			datas:{
				type:Array,
				default:[],
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			chanageRow(index){
				this.currentIndex=index;
			}
		}
	}
</script>

<style>
	.rowCheck{
		display: flex;
		width: 100%;
		text-align: center;
		position: sticky;
		top:0px;
		background-color: white;
	}
	.rowCheck-item{
		flex: 1;
		padding-top: 10px;
		padding-bottom: 6px;
		display: inline-block;
		cursor: pointer;
	}
	.activeSpan span{
		border-bottom: hotpink 2px solid;
		color: hotpink;
		padding-bottom: 5px;
		padding-left: 5px;
		padding-right: 5px;
		font-weight: bold;
	}
</style>
