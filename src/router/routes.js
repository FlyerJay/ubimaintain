import App from "../App"
export default[
	{
		path:"/",
		component:App,
		children:[
			{
				path:"/carinfo",
				component:resolve => require(["../pages/carinfo"],resolve)
			},
			{
				path:"/storelist",
				component:resolve => require(["../pages/storelist"],resolve)
			},
			{
				path:"/evaluate",
				component:resolve => require(["../pages/evaluate"],resolve)
			},
			{
				path:"/orderfile",
				component:resolve => require(["../pages/orderfile"],resolve)
			}
		]
	}
]