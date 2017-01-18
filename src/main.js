import Vue from 'vue'
import Vuex from "vuex"
import routes from "./router/routes"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import stores from "./store/store"
import "./style/iconfont.css"
import "./style/global.css"
import "jquery"
import "./router/util"
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
const FastClick = require('fastclick')
$(function(){
	FastClick.attach(document.body)//移动端添加fastClick支持
})
$(window).on("resize",function(){//当窗口发生变化时更新字体大小
	document.documentElement.style.fontSize = document.documentElement.clientWidth/640*40+"px";
})
const store = new Vuex.Store({
	...stores
})
const router = new VueRouter({
	routes,
	mode:"history",
	base:"/"
})

new Vue({
	el:"#pagecontainer",
	router,
	store
})
