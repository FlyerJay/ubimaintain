<template>
	<div class="page-header">
		<div class="page-header-left" @click="goBack">
			<i class="iconfont icon-back"></i>
		</div>
		<span>{{title}}</span>
		<div class="page-header-right">
			
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				title:'车辆信息',
			}
		},
		methods:{
			goBack:function(){
				pageController.push(this,"carinfo");
			}
		}
	}
</script>
<style scoped lang="less">
	@header-height:1.932rem;
	@header-color:#eee;
	@header-background:#2c2a2d;
	@title-size:0.757rem;
	.page-header{ 
		background: @header-background;
		color: @header-color;
		height: @header-height;
		text-align: center;
		span{
			font-size: @title-size;
			line-height: @header-height;
		}
		.page-header-left{
			float: left;
			height: @header-height;
			line-height: @header-height;
			width: 3rem;
		}
		.page-header-right{
			float: right;
			height: @header-height;
			line-height: @header-height;
			width: 3rem;
		}
		.icon-back{
			font-size: @title-size;
			float: left;
			margin-left: 0.5rem
		}
	}
</style>