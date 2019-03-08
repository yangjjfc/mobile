import Http from '@/utils/axios';
import Vue from 'vue';
const user = {
    state: {
        userInfo: {} // 用户信息
    },
    mutations: {
        // 用户登入
        CHANGEUSER (state, data) {
            state.userInfo = data;
            Vue.prototype.Auth = state.userInfo.permissions;
        },
        // 用户退出,清除数据
        CLEARSTATE (state, data) {
            state = {
                userInfo: {}
            };
            sessionStorage.clear();
        }  
    },
    actions: {
        // 登录
        login (context, data) {
            return new Promise((resolve, reject) => {
                Http('/sys/account/login', {
                    ignoreErr: true,
                    ...data
                }).then(res => {
                    if (res.msg) {
                        context.commit('CHANGEUSER', res.msg);
                        resolve(res.msg);
                    } else {
                        reject(res);
                    }
                }, err => {
                    reject(err);
                });
            });
        },
        // 退出
        logout (context, data) {
            return new Promise((resolve, reject) => {
                Http('/sys/account/logout', data).then(result => {
                    context.commit('CLEARSTATE');
                    resolve();
                }, err => {
                    reject(err);
                });
            });
        },
        // 当前用户信息
        currentUser ({ commit, state }) {
            return new Promise((resolve, reject) => {
                state.userInfo && state.userInfo.userNo ? resolve(state.userInfo) // 判断是否需要去请求
                    : Http('/sys/account/currentUser', {
                        token: state.userInfo.token || ''
                    }).then(result => {
                        // 获取token 获取登录信息
                        let user = result.msg || {};
                        commit('CHANGEUSER', user);
                        resolve(user);
                    }, err => {
                        reject(err);
                    });
            });
        }
    }
};

export default user;