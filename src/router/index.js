import Vue from 'vue';
import Router from 'vue-router'
import personalRoutes from './personal';
import HelloWorld from '~/components/HelloWorld'
import LoginLayout from '~/layout/loginLayout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginLayout',
      component: LoginLayout
    },
    {
      path: '/login',
      name: '登录',
      component: LoginLayout
    }
  ].concat(personalRoutes)
})
