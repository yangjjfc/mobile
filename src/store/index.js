import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user.js';
import getters from './getters.js';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        paths: []
    })],
    modules: {
        user
    },
    getters
});

export default store;
