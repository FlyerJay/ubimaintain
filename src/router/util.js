+function(){
	var C = {}

	C.pagestack = {
		list:[],
		pushData:{},
	}

	C.push = function(context, url, data){
		var self = this;
		if(!context || typeof context !== "object"){
			console.warn("未获取到上下文！");
			return false;
		}
		var index = $.inarray(url,self.pagestack.list)
		if (index > 0) {

		}else{
			context.$router.push(url);
		}
	}

	C.popTo = function(context, url, data){

	}

	C.pop = function(context, number){

	}

	window.pageController = C;
}()