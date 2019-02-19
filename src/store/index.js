import Vue from 'vue';
import Vuex from 'vuex'; 

import { RECORD_HTTP } from './mutation-type';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1,
        httpLogs: []
    },
    mutations: {
        [RECORD_HTTP](state, obj) {
            state.httpLogs.push(obj);
        }
    },
    actions: {
        loginByAccount({commit}, userInfo) {
            
        }
    }
})

export default store;