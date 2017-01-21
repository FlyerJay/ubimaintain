<template>
	<div class="orderlist-view">
		<page-header title="订单列表"></page-header>
		<div class="page-content">
			<div class="order-state-tabs">
				<div class="tab-item" :class="{'selected':item.value==filterstate}" v-for="(item,index) in orderstates" @click="changeState(item.value)">
					<span>{{item.text}}</span>
					<input type="hidden" value="item.value">
				</div>
			</div>
			<div class="order-list-container">
				<div class="order-list">
					<div class="order-item" v-for="(item,index) in orderlists">
						<div class="order-header">
							<span>订单编号：<span class="number">{{item.orderId}}</span></span>
							<span class="order-status">{{item.orderStatus}}</span>
						</div>
						<div class="order-content">
							<div class="photo"></div>
							<div class="order-info">
								<span>预约服务商：<span class="storename">{{item.storeName}}</span></span>
								<span>车牌号：<span class="platenumber">{{item.vehiclePlateno}}</span></span>
								<span>有效期至：<span class="validate">{{item.appointmentDate}}</span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import components from "../components"
	export default{
		data () {
			return {
				orderstates:[
					{text:"全部",value:0},
					{text:"待保养",value:1},
					{text:"待评价",value:2},
					{text:"已评价",value:3},
				],
				filterstate:0,
				orderlists:[
					{
						orderId:"10001",
						orderStatus:1,
						storeName:"重庆市名驿长安4S店",
						vehiclePlateno:"渝C10001",
						appointmentDate:"2016-12-05"
					},
				]
			}
		},
		components:{
			...components,
		},
		methods:{
			changeState:function(val){
				this.filterstate = val;
			}
		}
	}
</script>
<style scoped lang="less">
	.orderlist-view{
		height: 100%;
		.page-content{
			background-color: #efefef;
			height: 100%;
			.order-state-tabs{
				height: 2rem;
				background-color: #faf7fe;
				.tab-item{
					float: left;
					width: 25%;
					line-height: 2rem;
					text-align: center;
				}
				.tab-item.selected{
					color:#fff;
					background-color: #00adfa;
				}
			}
			.order-list-container{
				overflow: auto;
				.order-list{
					.order-item{
						margin-bottom: 0.58rem;
						.order-header{
							height: 1.353rem;
							margin-bottom: 1px;
							line-height: 1.353rem;
							background-color: #fff;
						}
					}
				}
			}
		}
	}
</style>