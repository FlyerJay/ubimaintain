<template>
	<div class="modal-view" v-if="show">
		<div class="modal-view-mask"></div>
		<div class="modal-content">
			<div class="modal-close-button" @click="show=false"></div>
			<div class="modal-title"><span>{{title}}</span></div>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {

			}
		},
		props:{
			show:Boolean,
			title:String,
		},
		computed:{
		},
		watch:{
			show:function(val){
				console.log(val);
			}
		}
	}
</script>
<style scoped lang="less">
	.modal-view{
		position: absolute;
	    height: 100%;
	    width: 100%;
	    z-index: 9999;
		.modal-view-mask{
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.7);
		}
		.modal-content{
			width: 12rem;
		    height: 9rem;
		    position: absolute;
		    background-color: #fff;
		    z-index: 10001;
		    top: 50%;
		    left: 50%;
		    margin-top: -4.5rem;
		    margin-left: -6rem;
		    border-radius: 0.4rem;
		    .modal-close-button{
		    	position: absolute;
		    	z-index: 10002;
		    	width: 1.2rem;
	    	    height: 1.2rem;
		    	top:-0.5rem;
		    	right: -0.5rem;
		    	background-image: url("../assets/model-close.png");
		    	background-size: cover;
		    	background-position: center;
		    	background-repeat: no-repeat;
		    }
		    .modal-title{
		    	margin:3% 10%;
		    	width: 80%;
		    	height: 1rem;
		    	line-height: 1rem;
		    	text-align: center;
		    	font-size: 0.657rem;
		    	border-bottom: 1px dashed #888;
		    }
		}
	}
</style>