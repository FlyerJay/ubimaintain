<template>
	<div class="storelist-view">
		<page-header title="4S店选择"></page-header>
		<div class="page-content">
			<div class="date-field">
				<div class="prev" @click="prevDate">前一天</div>
				<span class="date">{{todayDate}}</span>
				<div class="next" @click="nextDate">后一天</div>
			</div>
			<div class="filter-field">
				<div class="date">选择时间<i class="iconfont icon-selectarrow"></i></div>
				<div class="sort" @click="toggleSort">{{sortlist[sortShow].text}}<i class="iconfont icon-selectarrow"></div>
				<div class="sort-list" v-if="sortlistShow">
					<div class="sort-item" v-for="(item,index) in sortlist" :class="{'selected':item.value==sortShow}" @click="afterSortClick(item.value)">
						<i class="iconfont icon-select1"></i><span>{{item.text}}</span>
					</div>
				</div>
			</div>
			<div class="store-list-container">
				<div class="store-list">
					<div class="store-item" v-for="(item,index) in storelist">
						<div class="photo" :style="{'background-image':'url('+item.photoUrl+')'}"></div>
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
				today:new Date(),
				sortlistShow:false,
				sortShow:0,
				sortlist:[
					{
						text:"智能排序",
						value:0,
					},
					{
						text:"距离优先",
						value:1,
					},
					{
						text:"上次保养",
						value:2,
					},
					{
						text:"评分最该",
						value:3,
					},
					{
						text:"手动选择",
						value:4,
					},
				],
				storelist:[
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:4.4,
						photoUrl:require("../assets/store_photo.jpg"),
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:3.8,
						photoUrl:require("../assets/store_photo.jpg"),
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:3,
						photoUrl:require("../assets/store_photo.jpg"),
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:3,
						photoUrl:require("../assets/store_photo.jpg"),
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:3,
						photoUrl:require("../assets/store_photo.jpg"),
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:3,
						photoUrl:require("../assets/store_photo.jpg"),
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
					{
						storeName:"重庆名驿长安汽车4S店",
						distance:4.2,
						score:4.2,
						photoUrl:require("../assets/store_photo.jpg"),
						address:"重庆市南岸区弹子石国际社区福民路38号9层"
					},
				]
			}
		},
		computed:{
			todayDate:function(){
				var y = this.today.getFullYear();  
				var m = this.today.getMonth() + 1;  
				m = m < 10 ? ('0' + m) : m;  
				var d = this.today.getDate();  
				d = d < 10 ? ('0' + d) : d;  
				return y + '-' + m + '-' + d;  
			},
		},
		methods:{
			computeListHeight:function(){
				var windowHeight = document.documentElement.clientHeight;
				var otherHeight = (($(".page-header").css("height")).replace("px","") - 0) + (($(".date-field").css("height")).replace("px","") - 0) + (($(".filter-field").css("height")).replace("px","") - 0);
				$(".store-list-container").css("height",windowHeight - otherHeight + "px");
			},
			toggleSort:function(){
				if(this.sortlistShow){
					this.sortlistShow = false;
				}else{
					this.sortlistShow = true;
				}
			},
			afterSortClick:function(val){
				this.sortShow = val;
			},
			prevDate:function(){
				this.today = new Date(this.today.getTime() - (1000 * 60 * 60 * 24));
			},
			nextDate:function(){
				this.today = new Date(this.today.getTime() + (1000 * 60 * 60 * 24));
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
		background-color: #efefef;
		height: 100%;
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
			position: relative;
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
			.sort-list{
				position: absolute;
				z-index: 1;
				width: 94%;
				background-color: #fff;
				text-align: left;
				top:1.6rem;
				padding: 0 3%;
				.sort-item{
					position: relative;
					border-bottom: 1px solid #efefef;
					.iconfont{
						color: #fff;
						margin-right: 0.2rem
					}
				}
				.sort-item.selected{
					color:#00adfa;
					.iconfont{
						color:#00adfa;
					}
				}
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
						background-size: 80%;
						background-position: center center;
						background-repeat: no-repeat;
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