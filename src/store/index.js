import Vue from 'vue';
import Vuex from 'vuex'; 

import { RECORD_HTTP, SET_TOKEN } from './mutation-type';
import { login } from '~/api/login';
import { setToken } from '~/utils/cookie';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1,
		token: '',
		httpLogs: []
	},
	mutations: {
		[RECORD_HTTP](state, obj) {
			const date = new Date();
			const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
			state.httpLogs.push({
				obj,
				time
			});
		},
		[SET_TOKEN](state, value) {
			state.token = value;
		}
	},
	actions: {
		loginByAccount({commit}, userInfo) {
			return login(userInfo).then(response => {
				const data = response.data;
				setToken(data.token);
				commit('SET_TOKEN', data.token);
			})
		}
	}
})

export default store;