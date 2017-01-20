<template>
	<transition name="page-slide">
		<router-view></router-view>
	</transition>
</template>
<script>
  export default {
    	data () {
    		return {

    		}
    	},
    	mounted:function(){
    		this.appShow()
    	},
    	methods:{
    		appShow:function(){
          pageController.push(this,"orderfile");
    		}
    	}
  }
</script>

<style>
body,html{
	padding: 0px;
	margin: 0px;
	height: 100%;
	width: 100%;
}
#app {
  font-family: 'Microsoft yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-slide-enter-active {
  transition: all .5s ease;
}
.page-slide-leave-active {
  transition: all .5s ease-out;
  position: absolute;
  z-index: 1;
}
.page-slide-enter,.page-slide-leave-active{
  transform: translateX(100vw);
}
</style>
