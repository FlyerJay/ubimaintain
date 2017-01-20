<template>
    <div class="orderfile-view">
	    <page-header title="订单填写"></page-header>
	    <div class="page-content">
	        <div class="company-info">
	        	<div class="company-name">{{companyName}}</div>
	        	<div class="company-address">
	               <i class="icon-address"></i>
	        	   <span class="company-distance">{{companyDistance}}</span>
	        	   <span class="company-address">{{companyAddress}}</span>
	        	</div>
	        	<div class="maintain-time">
	        	   <i class="icon-time"></i>
	        	   <span class="maintain-font">保养时间:</span>
	        	    <span class="maintain-date">{{maintainDate}}</span>
	        	</div>
	        	<div class="company-phone">
	        	   <i class="icon-phone"></i>
	        	   <span class="phone-font">联系电话:</span>
	        	    <span class="phone-number">{{phoneNumber}}</span>
	        	</div>
	        </div>
	        <div class="car-info">
	            <div class="car-plate">
	            	<span class="commonStyle">车牌号</span><span class="plate-number">{{plateNumber}}</span>
	            </div>
	            <div class="person-connect">
	            	<span class="commonStyle">联系人</span>
	            </div>
	            <div class="person-phone person-mobile">
	            	<span class="commonStyle">手机号</span><span class="mobile-number">{{mobileNumber}}</span>
	            </div>
	        </div>
	        <p class="recommend-maintain">推荐保养项目</p>
	        <div class="recommend-list">
	            <div class="list-style">
	            	<span class="listone-name">{{listoneName}}</span>
	            	<span class="listone-tip">{{listoneTip}}</span>
	            </div>
	            <div class="list-style">
	            	<span class="listtwo-name">{{listtwoName}}</span>
	            	<span class="listtwo-tip">{{listtwoTip}}</span>
	            </div>
	            <div class="list-three list-style">
	            	<span class="listthree-name">{{listthreeName}}</span>
	            	<span class="listthree-tip">{{listthreeTip}}</span>
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
				companyName:"重庆市名驿汽车维修服务有限公司南岸区分公司",
				companyDistance:"4.2km",
				companyAddress:"重庆市南岸区弹子石国际社区福民路38号9层",
				maintainDate:"2016-11-04 11:30",
				phoneNumber:"0354-3562786",
				plateNumber:"渝C 42837",
				mobileNumber:"13652763876",
				listoneName:"机油",
				listtwoName:"机油滤清器",
				listthreeName:"汽油滤清器",
				listoneTip:"原厂壳牌5W-30SL级矿物油",
				listtwoTip:"原厂件",
				listthreeTip:"原厂件"
			}
		}
	}	
</script>
<style  scoped lang="less">
	.company-info{
		/*border:solid;*/
		height: 120px;
		background-color: white;
		padding-left: 10px;
		padding-top: 15px;
	}
	.company-name{
	    font-size: 17px;
	    font-weight: bold;
	}
	.company-address,.maintain-time,.company-phone{
		/*border:solid;*/
		padding-top: 8px;
		font-size: 15px;
	}
	.car-info{
		/*border:solid;*/
		margin-top: 20px;
		height: 180px;
		background-color: white;
		padding-left: 10px;
		/*padding-top: 15px;*/
	}
	.car-plate,.person-connect,.person-phone{
	   font-size: 18px;
	   border-bottom: solid;
	   border-width: 1px;
	   border-color: #d3cfcf;
	   height:60px;
	   width: 98%;
	   line-height: 60px;

	}
	.person-mobile{
		  border-bottom: none;
	}
	.plate-number,.mobile-number{
		float: right;
		padding-right: 5px;
	}
	.recommend-maintain{
		font-size: 17px;
		padding-top: 10px;
		padding-left: 10px;
	}
	.recommend-list{
		margin-top: 10px;
		height: 180px;
		background-color: white;
		padding-left: 10px;
	}
	.commonStyle{
		font-weight: bold;
	}
	.list-style{
		font-size: 17px;
		border-bottom: solid;
		border-width: 1px;
		border-color: #d3cfcf;
		height:60px;
		width: 98%;
		line-height: 60px;
		
	}
	.listone-name,.listtwo-name,.listthree-name{
      font-weight:bold;
	}
	.listone-tip,.listtwo-tip,.listthree-tip{
        font-size: 15px;
        padding-left: 5px;
        color: grey;
	} 


	
</style>