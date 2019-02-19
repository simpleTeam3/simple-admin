import axios from 'axios';
import store from '~/store';
import { message } from 'simple-ui-for-vue';
import { getToken } from '~/utils/cookie';

const apiDebug = true;

const service = axios.create({
	baseURL: process.env.BASE_API,         //	config/dev.env.js中配置地址
	timeout: 10000						//	请求超时时间
})

//添加请求拦截器
service.interceptors.request.use(config => {
	//before request
	config['token'] = getToken();
	config['timestamp'] = new Date().getTime();
	return config;
}, error => {
	//request error callback
	if(apiDebug) console.log('err' + error);
	store.commit('RECORD_HTTP', error);
	Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use(response => {
	//response resultCode问题处理
	return response;
}, error => {
	apiDebug && console.log('err ' + error);
	store.commit('RECORD_HTTP', error);
	return Promise.reject(error);
})

export default service;