import Vue from 'vue';
import Router from 'vue-router'

import LoginLayout from '~/layout/loginLayout';
import personalRoutes from './personal';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'loginLayout',
			redirect: '/login',
			component: LoginLayout,
			children: [
				{
					path: 'login',
					component: () => import ('~/pages/login'),
					name: '登陆'
				}
			]
		}
	].concat(personalRoutes)
})
