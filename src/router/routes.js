import App from "../App"
export default[
	{
		path:"/",
		component:App,
		children:[
			{
				path:"/carinfo",
				component:resolve => require(["../pages/carinfo"],resolve)
			}
		]
	}
]