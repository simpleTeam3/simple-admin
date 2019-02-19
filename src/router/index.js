import Vue from 'vue';
import Router from 'vue-router'

import LoginLayout from '~/layout/loginLayout';

import personalRoutes from './personal';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/login',
			name: 'LoginLayout',
			redirect: '/login/index',
			component: LoginLayout,
			children: [
				{
					path: 'index',
					component: () => import ('~/pages/login'),
					name: '登陆'
				}
			]
		},
		{
			path: '/',
			name: 'center',
			component: () => import ('~/pages/center')
		}
	].concat(personalRoutes)
})
