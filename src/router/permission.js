/*
 * 路由层面权限控制, 无权限的重定向至登录页或404页
 */
import router from './index';
import store from '~/store';
import { getToken } from '~/utils/cookie';

const whiteList = ['/login'];   //白名单

router.beforeEach((to, from, next) => {
    if(getToken()) {
        next();
    } else {
        if(whiteList.some((item) => to.path.indexOf(item) !== -1)){
            next();
        }else{
            next({ path: '/login'});
        }
    }
})