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
		var index = $.inArray(url,self.pagestack.list)
		if (index >= 0) {
			this.pagestack.list = this.pagestack.list.splice(0,index+1);
			console.log("已有页面");
		}else{
			this.pagestack.list.push(url);
		}
		context.$router.push(url);
		this.pagestack.pushData = data || "";
	}

	C.popTo = function(context, url, data){

	}

	C.pop = function(context, number){

	}

	window.pageController = C;
}()