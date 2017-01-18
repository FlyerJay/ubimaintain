<template>
	<div class="carinfo-view">
		<page-header></page-header>
		<div class="page-content">
			<group title="">
			      <datetime v-model="value" :min-year=2010 :max-year=2020 format="YYYY-MM-DD" @on-change="change" title="生日" year-row="{value}年" month-row="{value}月" day-row="{value}日" confirm-text="完成" cancel-text="取消"></datetime>
		    </group>
		</div>
	</div>
</template>
<script>
	import components from "../components"
	import { Datetime, Group } from 'vux'
	export default{
		components:{
			...components,
			Datetime,
			Group
		},
		data () {
			return {
				value:'2017-01-18',
			}
		},
		methods:{
			change:function(){
				return false;
			}
		}
	}
</script>
<style scoped lang="less">
</style>

