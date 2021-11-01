import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/auth/login',
        method: 'post',
        data: data
    })
}

// 刷新方法
export function refreshToken() {
    return request({
        url: '/auth/refresh',
        method: 'post'
    })
}

// 退出方法
export function logout() {
    return request({
        url: '/auth/logout',
        method: 'delete'
    })
}

// 获取验证码
export function getCodeImg() {
    return request({
        url: '/code',
        method: 'get'
    })
}

export function getUserinfo() {
    return request({
        url: '/system/user/getInfo',
        method: 'get'
    })
}
