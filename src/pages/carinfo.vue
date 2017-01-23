<template>
	<div class="carinfo-view">
		<modal v-model="showModal" :show.sync="showModal" title="填写您的联系电话">
			<div class="modal-content" slot="modal-content">
				<i class="iconfont icon-phone"></i>
				<input v-if="updateTelphone" maxlength="11" type="number" :value="telphone" class="telphone-input">
				<span v-else="updateTelphone" class="telphone">{{telphone}}</span>
			</div>
			<div class="modal-button" slot="modal-button">
				<span  v-if="updateTelphone" class="update-button" @click="updateTelphone=false">取消</span>
				<span v-else="updateTelphone" class="update-button" @click="updateTelphone=true">更改</span>
				<span  v-if="updateTelphone" class="sure-button" @click="sureTelphone">确认</span>
				<span v-else="updateTelphone" class="right-button">正确</span>
			</div>
		</modal>
		<page-header title="车辆信息"></page-header>
		<div class="page-content">
			<div class="car-model">
				<div class="car-photo"></div>
				<div class="car-info">
					<div class="base-props">
						<div class="car-series">{{carSeries}}</div>
						<div class="car-module">{{carModule}}</div>
					</div>
					<div class="location">
						<span class="address">{{address}}</span>
					</div>
				</div>
			</div>
			<div class="maintain-info">
				<span class="mile">当前里程<span class="current-mile">{{currentMileage | mileFilter}}</span><span class="day">{{miaosu}}<span class="maintance-day">{{date | dateFilter}}</span></span>
				<a href="javascript:;">查看保养手册</a>
			</div>
			<div class="recommend-mile">
				<span>本次保养里程推荐</span>
				<div class="input-control">
					<div class="head"></div>
					<div class="content">{{currentMileage | mileFilter}}</div>
					<div class="tail"></div>
				</div>
			</div>
			<div class="banner">
				<div><span>好车主，<span>省更多</span></span></div>
				<span>超低折扣，好运司机折上再奖</span>
			</div>
			<div class="opera-control">
				<div class="button-control">
					<div class="immediate-order" @click="immediateOrder">立即预约下单</div>
				</div>
				<div class="button-control">
					<div class="place-order" @click="placeOrder">一键下单</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import components from "../components"
	export default{
		components:{
			...components,
		},
		data () {
			return {
				carSeries:"长安CS75",
				carModule:"2015 1.8T 自动 四驱 精英型 国V",
				address:"重庆",
				currentMileage:"1000",
				miaosu:"保养过期还有",
				date:90,
				showModal:false,
				telphone:15178831138,
				updateTelphone:false,
			}
		},
		methods:{
			immediateOrder:function(){
				pageController.push(this,"storelist");
			},
			placeOrder:function(){
				this.showModal = true;
			},
			sureTelphone:function(){
				this.telphone = $(".telphone-input").val();
				this.updateTelphone = false;
			}
		},
		filters:{
			mileFilter:function(val){
				return val + "km";
			},
			dateFilter:function(val){
				return val + "天";
			}
		}
	}
</script>
<style scoped lang="less">
	.carinfo-view{
		height: 100%;
	}
	.modal-content{
		text-align: center;
		height: 4rem;
		line-height: 4rem;
		font-size: 0.8rem;
		color: #fd8741;
		.icon-phone{
			font-size:2rem;
			margin-right: 0.2rem;
			position: relative;
			top: 0.3rem;
		}
		.telphone-input{
			border:none;
			font-size: 0.8rem;
			color: #fd8741;
			outline: none;
			max-width: 5.1rem;
			text-decoration: underline;
			font-family: "Microsoft YaHei";
		}
	}
	.modal-button{
		text-align: center;
		height: 3rem;
		line-height: 3rem;
		font-size: 0.7rem;
		span{
			padding: 0.1rem 1rem;
			border-radius: 1rem;
			border:1px solid #00adfa;
		}
		.update-button{
			margin-right: 0.5rem;
		}
		.sure-button,.right-button{
			color: #fff;
			background-color: #00adfa;
		}
	}
	.page-content{
		background-color: #efefef;
		height: 100%;
		.car-model{
			height: 2.9rem;
			width: 100%;
			position: relative;
			background-color: #fff;
			.car-info>div{
				position: absolute;
				height: 100%;
				line-height: 1rem;
				top:50%;
				margin-top:-1rem;
			}
			.car-photo{
				width: 18%;
				height: 100%;
				background-image: url("../assets/logo.png");
				position: absolute;
				background-size: 70%;
				background-position: center center;
				background-repeat: no-repeat;
			}
			.base-props{
				position: absolute;
				left: 19%;
				height: 100%;
				width: 79%;
				.car-series{
					font-weight: bold;
					font-size: 0.68rem;
				}
				.car-module{
					font-size: 0.6rem;
				}
			}
			.car-info{
				.location{
					top:70%;
					right: 3%;
					height: auto;
				}
			}
		}
		.maintain-info{
			height: 1rem;
			line-height: 1rem;
			background-color: #fff;
			padding: 0 3%;
			position: relative;
			font-size: 0.58rem;
			margin-bottom: 1px;
			a{
				color:#00adfa;
				position: absolute;
				right: 3%;
			}
			.mile{
				.current-mile{
					color:#00adfa;
				}
			}
			.day{
				position: absolute;
				left:40%;
				.maintance-day{
					color: #f25c54;
				}
			}
		}
		.recommend-mile{
			height: 2.932rem;
			background-color: #fff;
			text-align: center;
			width: 94%;
			padding: 0.2rem 3%;
			margin-bottom: 0.3rem;
			span{
				color:#a4a2a4;
				font-size: 0.6rem;
			}
			.input-control{
				height: 1.466rem;
				margin: 0 20%;
				width: 60%;
				margin-top: 0.3rem;
				.head,.tail{
					width: 20%;
					border: 0.08rem solid #f0eff5;
					background-color: #f4f3f8;
				}
				.content{
					width: 55%;
					border-top: 0.08rem solid #f0eff5;
					border-bottom: 0.08rem solid #f0eff5;
				}
			}
			.input-control>div{
				height: 1.466rem;
				line-height: 1.466rem;
				float: left;
			}
		}
		.banner{
			padding: 0.58rem 3%;
			width: 94%;
			background-color: #fff;
			div{
				span{
					font-size: 0.68rem;
					span{
						color:#00adfa;
					}
				}
			}
			>span{
				color: #a4a2a4;
				font-size: 0.6rem
			}
		}
		.opera-control{
			margin: 0 3%;
			margin-top:1.159rem;
			.button-control{
				height: 1.6rem;
				line-height: 1.6rem;
				text-align: center;
				color: #fff;
				.immediate-order{
					background-color:#00abf9;
					border-radius: 0.193rem;
				}
				.place-order{
					margin-top:0.5rem;
					background-color:#ff9400;
					border-radius: 0.193rem;
				}
			}
		}
	}
</style>

