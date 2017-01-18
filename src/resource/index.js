import config from "../config" 
const R = {};
R.url = "";
R.requestType = "GET";
R.getBanners = function(vue,callback){
	this.url = "/vuestore/banner";
	this.requestType = "GET";
	this.ajax(vue,callback);
}
R.ajax = function(vue,callback){
	const options = {
		timeout:this.timeout || config.timeout,
		before:function () {

		}
	}
	switch(this.requestType) {
		case "GET":
			vue.$http.get(config.server+this.url,options).then(res=>{
				callback(res.body);
			})
			break;
		case "POST":
			vue.$http.post(config.server+this.url,options).then(res=>{
				callback(res.body);
			})
			break;
	}
}

export default R;