import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth'

NProgress.configure({showSpinner: false})

const whiteList = ['/login', '/register']


router.beforeEach(async (to, from, next) => {
    NProgress.start()

    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'})
            NProgress.done()
        } else {
            if (to.matched.length === 0) {
                next('/404') // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
            }
            if (store.getters.roles.length === 0) {
                // 判断当前用户是否已拉取完user_info信息
                await store.dispatch('getUserinfo').then(async () => {
                    next()
                }).catch((e) => {
                    console.log(e)
                    store.dispatch('logout').then(() => {
                        next({path: '/'})
                    })
                })
            } else {
                next()
            }
            await store.dispatch('validUserPath', to)
        }
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
