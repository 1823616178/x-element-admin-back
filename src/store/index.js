import {createStore} from 'vuex'
import {getToken, setToken, removeToken} from "@/utils/auth";
import {useRouter} from "vue-router";
import {managePageData} from '@/router/module/manage'
import {getCompanyName} from '@/api/Manage/Worker/spectaculars'
import {getUserinfo, login, logout} from "@/api/app";
import {useStore} from "vuex";

export default createStore({
    state: {
        token: getToken(),
        user: null,
        roles: [],
        rule: [],
        isThree: false,
        visitedViews: [],
        cachedViews: []
    },
    mutations: {
        ADD_VISITED_VIEW: (state, view) => {
            if (state.visitedViews.some(v => v.path === view.path)) return
            state.visitedViews.push(
                Object.assign({}, view, {
                    title: view.meta.title || 'no-name'
                })
            )
        },
        ADD_CACHED_VIEW: (state, view) => {
            if (state.cachedViews.includes(view.name)) return
            if (!view.meta.noCache) {
                state.cachedViews.push(view.name)
            }
        },
        DEL_VISITED_VIEW: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews.splice(i, 1)
                    break
                }
            }
        },
        DEL_CACHED_VIEW: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews.splice(index, 1)
                    break
                }
            }
        },
        DEL_OTHERS_VISITED_VIEWS: (state, view) => {
            state.visitedViews = state.visitedViews.filter(v => {
                return v.meta.affix || v.path === view.path
            })
        },
        DEL_OTHERS_CACHED_VIEWS: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews = state.cachedViews.slice(index, index + 1)
                    break
                }
            }
        },
        DEL_ALL_VISITED_VIEWS: state => {
            // keep affix tags
            const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
            state.visitedViews = affixTags
        },
        DEL_ALL_CACHED_VIEWS: state => {
            state.cachedViews = []
        },
        UPDATE_VISITED_VIEW: (state, view) => {
            for (let v of state.visitedViews) {
                if (v.path === view.path) {
                    v = Object.assign(v, view)
                    break
                }
            }
        },
        SET_USERINFO(state, res) {
            state.user = res.user
            state.roles = res.roles
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_RULE(state, rule) {
            state.rule = rule
        },
        SET_THREE(state, result) {
            state.isThree = result
        }
    },
    actions: {
        getUserinfo({commit, dispatch}) {
            let that = this
            return new Promise((resolve, reject) => {
                getUserinfo().then(async (res) => {
                    if (res) {
                        const data = res
                        if (res.user && res.user.userName) {
                            await getCompanyName(res.user.userName).then(async (reponse) => {
                                if (reponse) {
                                    data.user.companyName = reponse;
                                }
                                commit('SET_USERINFO', data)
                            }).catch(err => {
                                reject(err);
                            });
                        } else {
                            commit('SET_USERINFO', data)
                        }
                        await dispatch('getBaseRule', data.roles)
                        resolve(data)
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },
        login: function ({commit, dispatch}, data) {
            return new Promise((resolve, reject) => {
                login(data).then(res => {
                    const token = res.data.access_token
                    commit('SET_TOKEN', token)
                    setToken(token)
                    return dispatch('getUserinfo')
                }).then(() => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        logout({commit}) {
            const router = useRouter()
            logout().then(() => {
                commit('SET_USERINFO', {})
                commit('SET_TOKEN', null)
                removeToken()
                router.push({path: '/login'})
            }).catch(() => {
                commit('SET_USERINFO', {})
                commit('SET_TOKEN', null)
                removeToken()
            })
        },
        async getBaseRule({commit}, roles) {
            let rule = []
            await managePageData.children.forEach(res => {
                if (roles.indexOf(res.meta.role) > -1) {
                    console.log(res.path)
                    rule.push(res)
                }
            })
            await commit("SET_RULE", rule)
        },
        async validUserPath({commit}, to) {
            if (to.meta.hasOwnProperty('haveChildren')) {
                await commit('SET_THREE', true)
            } else {
                await commit('SET_THREE', false)
            }
        },
        addView({dispatch}, view) {
            dispatch('addVisitedView', view)
            dispatch('addCachedView', view)
        },
        addVisitedView({commit}, view) {
            commit('ADD_VISITED_VIEW', view)
        },
        addCachedView({commit}, view) {
            commit('ADD_CACHED_VIEW', view)
        },
        delView({dispatch, state}, view) {
            return new Promise(resolve => {
                dispatch('delVisitedView', view)
                dispatch('delCachedView', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delVisitedView({commit, state}, view) {
            return new Promise(resolve => {
                commit('DEL_VISITED_VIEW', view)
                resolve([...state.visitedViews])
            })
        },
        delCachedView({commit, state}, view) {
            return new Promise(resolve => {
                commit('DEL_CACHED_VIEW', view)
                resolve([...state.cachedViews])
            })
        },
        delOthersViews({dispatch, state}, view) {
            return new Promise(resolve => {
                dispatch('delOthersVisitedViews', view)
                dispatch('delOthersCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delOthersVisitedViews({commit, state}, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_VISITED_VIEWS', view)
                resolve([...state.visitedViews])
            })
        },
        delOthersCachedViews({commit, state}, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_CACHED_VIEWS', view)
                resolve([...state.cachedViews])
            })
        },
        delAllViews({dispatch, state}, view) {
            return new Promise(resolve => {
                dispatch('delAllVisitedViews', view)
                dispatch('delAllCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delAllVisitedViews({commit, state}) {
            return new Promise(resolve => {
                commit('DEL_ALL_VISITED_VIEWS')
                resolve([...state.visitedViews])
            })
        },
        delAllCachedViews({commit, state}) {
            return new Promise(resolve => {
                commit('DEL_ALL_CACHED_VIEWS')
                resolve([...state.cachedViews])
            })
        },
        updateVisitedView({commit}, view) {
            commit('UPDATE_VISITED_VIEW', view)
        }
    },
    getters: {
        token: state => state.token,
        user: state => state.user,
        roles: state => state.roles,
        rule: state => state.rule,
        isThree: state => state.isThree,
        visitedViews: state => state.visitedViews,
        cachedViews: state => state.cachedViews
    },
    modules: {},
})
