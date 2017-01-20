<template>
	<div class="storelist-view">
		<page-header title="4S店选择"></page-header>
		<div class="page-content">
			<div class="date-field">
				<div class="prev">前一天</div>
				<span class="date">{{today}}</span>
				<div class="next">后一天</div>
			</div>
			<div class="filter-field">
				<div class="date">选择时间<i class="iconfont icon-selectarrow"></i></div>
				<div class="sort">距离优先<i class="iconfont icon-selectarrow"></div>
			</div>
			<div class="store-list-container">
				<div class="store-list">
					<div class="store-item" v-for="(item,index) in storelist">
						<div class="photo"></div>
						<div class="store-info">
							<span class="name">{{item.storeName}} <span class="distance">{{item.distance | distanceFilter}}</span></span>
							<div class="score">
								<span class="star" :style="{background:'-webkit-linear-gradient(-180deg, #d9d8d4 ' + ((5-item.score)/5)*100 + '%' + ', #ff853f 10px)','-webkit-background-clip':'text'}">
									<i class="iconfont icon-star"></i>
									<i class="iconfont icon-star"></i>
									<i class="iconfont icon-star"></i>
									<i class="iconfont icon-star"></i>
									<i class="iconfont icon-star"></i>
								</span>
								<span class="grade">{{item.score|scoreFilter}}</span>
							</div>
							<div class="address">{{item.address}}</div>
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
				today:"2017-1-19",
				storelist:[
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:4.5,
						photoUrl:"",
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:3,
						photoUrl:"",
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
				]
			}
		},
		methods:{
		},
		components:{
			...components,
		},
		filters:{
			distanceFilter:function(val){
				return val + "km"
			},
			scoreFilter:function(val){
				return val + "分"
			}
		
		}
	}
</script>
<style scoped lang="less">
	.page-content{
		.date-field{
			height: 1.5rem;
			line-height: 1.5rem;
			background-color: #fcfcfc;
			text-align: center;
			margin-bottom: 1px;
			.prev{
				float: left;
				width: 20%;
			}
			.next{
				float: right;
				width: 20%;
			}
		}
		.filter-field{
			height: 1.6rem;
			line-height: 1.6rem;
			background-color: #fff;
			text-align: center;
			margin-bottom: 1px;
			.date{
				width: 50%;
				float: left;
			}
			.sort{
				width: 50%;
				float: left;
				position: relative;
			}
			.sort::before{
				content:" ";
				display: block;
				position: absolute;
				left: 0;
				top: 0.2rem;
				bottom: 0.2rem;
				width: 1px;
				background-color: #efefef;
			}
		}
		.store-list-container{
			overflow: auto;
			.store-list{
				.store-item{
					height: 3.6rem;
					background-color: #fff;
					margin-bottom: 1px;
					>div{
						float: left;
						height: 100%;
					}
					.photo{
						width: 23%;
					}
					.store-info{
						width: 77%;
						height: 2.8rem;
						padding: 0.4rem 0;
						.name{
							font-size: 0.657rem;
							font-weight: bold;
							.distance{
								float: right;
								font-size: 0.602rem;
								color: #a2a2a2;
								margin-right: 3%;
								font-weight: normal;
							}
						}
						.score{
							height: 1.2rem;
							line-height: 1.2rem;
							.star{
								font-size:0.8rem;
								background:-webkit-linear-gradient(-180deg, #d9d8d4 90%, #ff853f 10px);
								-webkit-background-clip: text;
								-webkit-text-fill-color: transparent;
								padding: 0 0.1rem;
								.iconfont{
									font-size:0.8rem;
								}
							}
							.grade{
								color: #ff853f;
								font-size: 0.657rem;
								margin-left: 0.2rem;
							}
						}
						.address{
							font-size: 0.52rem
						}
					}
				}
			}
		}
	}
</style>