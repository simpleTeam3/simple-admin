const routes = [
	{
		path: '/personal',
		name: 'personal',
		description: '个人中心页', 
		component: function(resolve){
		 	require('./pages/personal.vue');
		}
	}
]

export default routes;