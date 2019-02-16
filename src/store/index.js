import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1,
        httpLogs: []
    },
    mutations: {
        recordHttp(state, obj) {
            state.httpLogs.push(obj);
        }
    }
})

export default store;