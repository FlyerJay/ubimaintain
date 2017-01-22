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
							<span class="order-status">{{item.orderStatus|stateFilter}}</span>
						</div>
						<div class="order-content">
							<div class="photo" :style="{'background-image':'url(' + item.photo + ')'}"></div>
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
						photo:require("../assets/store_photo.jpg"),
						storeName:"重庆市名驿长安4S店",
						vehiclePlateno:"渝C10001",
						appointmentDate:"2016-12-05"
					},
					{
						orderId:"10001",
						orderStatus:2,
						photo:require("../assets/store_photo.jpg"),
						storeName:"重庆市名驿长安4S店",
						vehiclePlateno:"渝C10001",
						appointmentDate:"2016-12-05"
					},
					{
						orderId:"10001",
						orderStatus:3,
						photo:require("../assets/store_photo.jpg"),
						storeName:"重庆市名驿长安4S店",
						vehiclePlateno:"渝C10001",
						appointmentDate:"2016-12-05"
					},
					{
						orderId:"10001",
						orderStatus:1,
						photo:require("../assets/store_photo.jpg"),
						storeName:"重庆市名驿长安4S店",
						vehiclePlateno:"渝C10001",
						appointmentDate:"2016-12-05"
					},
					{
						orderId:"10001",
						orderStatus:1,
						photo:require("../assets/store_photo.jpg"),
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
		updated:function(){
			this.computeListHeight();
		},
		mounted:function(){
			this.computeListHeight();
		},
		methods:{
			changeState:function(val){
				this.filterstate = val;
			},
			computeListHeight:function(){
				var windowHeight = document.documentElement.clientHeight;
				var otherHeight = (($(".page-header").css("height")).replace("px","") - 0) + (($(".order-state-tabs").css("height")).replace("px","") - 0);
				$(".order-list-container").css("height",windowHeight - otherHeight + "px");
			}
		},
		filters:{
			stateFilter:function(val){
				switch(val) {
					case 1:
						return "待保养"
					case 2:
						return "立即评价"
					case 3:
						return "已评价"
				}
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
							padding: 0 3%;
							font-weight: bold;
							font-size: 0.657rem;
							.order-status{
								float: right;
								font-size: 0.58rem;
								font-weight: normal;
								color: #00adfa;
								padding: 0px 5px;
								border: 1px solid #00adfa;
								line-height: 1.5em;
							    position: relative;
							    top: 0.2rem;
							    border-radius: 3px;
							}
						}
						.order-content{
							height: 3.6rem;
							background-color: #fff;
							line-height: 1rem;
							.photo{
								width: 23%;
								height: 100%;
								float: left;
								background-size: 80%;
								background-position: center;
								background-repeat: no-repeat;
							}
							.order-info{
								width: 77%;
								height: 3rem;
								float: left;
								padding: 0.3rem 0;
								>span{
									display: block;
								}
							}
						}
					}
				}
			}
		}
	}
</style>