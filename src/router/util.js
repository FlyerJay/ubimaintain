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
			this.pagestack.list = this.pagestack.list.splice(0,index + 1);
		}else{
			this.pagestack.list.push(url);
		}
		context.$router.push(url);
		this.pagestack.pushData = data || "";
	}

	C.popTo = function(context, url, data){
		var self = this;
		if(!context || typeof context !== "object"){
			console.warn("未获取到上下文！");
			return false;
		}
		var index = $.inArray(url,self.pagestack.list);
		if(index >= 0 ){
			this.pagestack.list = this.pagestack.list.splice(0,index + 1);
		}else{
			console.warn("请求的页面不在栈中！");
			return false;
		}
		context.$router.push(url);
		this.pagestack.pushData = data || "";
	}

	C.pop = function(context, number){
		var self = this;
		if(!context || typeof context !== "object"){
			console.warn("未获取到上下文！");
			return false;
		}
		if(number){
			if(number >= self.pagestack.list.length){
				if(number == self.pagestack.list.length){
					return false;
				}else{
					context.$router.go(-(self.pagestack.list.length-1));
				}
				self.pagestack.list = self.pagestack.list.splice(0, 1);
			}else{
				context.$router.go(-number);
				self.pagestack.list = self.pagestack.list.splice(0, self.pagestack.list.length - number);
			}
		}else{
			if(self.pagestack.list.length > 1){
				context.$router.go(-1);
				self.pagestack.list = self.pagestack.list.splice(0,self.pagestack.list.length - 1);
			}else{
				console.warn("已到顶层，不能后退！");
				return false
			}
		}
	}

	window.pageController = C;
}()