import request from '@/utils/request'
import { praseStrEmpty } from "@/utils/hanvon";
// 查询员工列表
export function warnList(query) {
    return request({
        url: '/hro/warn/list',
        method: 'get',
        params: query
    })
}
// 查询员工类型
export function getEmployeeType(query) {
    return request({
        url: '/hro/warn/queryType',
        method: 'get',
        params: query
    })
}
//查询员工合同
export function queryContract(query) {
    return request({
        url: '/hro/warn/queryContract',
        method: 'get',
        params: query
    })
}
//查询员工薪资记录
export function querySalary(query) {
    return request({
        url: '/hro/warn/querySalary',
        method: 'get',
        params: query
    })
}
//查询员工离职记录
export function queryLeave(query) {
    return request({
        url: '/hro/warn/queryLeave',
        method: 'get',
        params: query
    })
}
// 查询员工提醒
export function listWorkerWarn(query) {
    return request({
        url: '/hro/warn/list',
        method: 'get',
        params: query
    })
}
// 新增提醒
export function addWarn(data) {
    return request({
        url: '/hro/warn',
        method: 'post',
        data: data
    })
}
// 删除提醒
export function delWarn(warnId) {
    return request({
        url: '/hro/warn/' + warnId,
        method: 'delete'
    })
}
// 修改提醒
export function updateEmployee(data) {
    return request({
        url: '/hro/warn',
        method: 'put',
        data: data
    })
}
// 提醒状态修改
export function changeStatus(data) {
    return request({
        url: '/hro/warn/changeStatus',
        method: 'put',
        data: data
    })
}
// 查询提醒详细
export function getWarn(warnId) {
    return request({
        url: '/hro/warn/getInfo/' + warnId,
        method: 'get'
    })
}
// 查询提醒个人信息
export function getUserProfile() {
    return request({
        url: '/system/user/profile',
        method: 'get'
    })
}
// 修改提醒个人信息
export function updateUserProfile(data) {
    return request({
        url: '/system/user/profile',
        method: 'put',
        data: data
    })
}

// 提醒头像上传
export function uploadAvatar(data) {
    return request({
        url: '/system/user/profile/avatar',
        method: 'post',
        data: data
    })
}

// 查询授权角色
export function getAuthRole(userId) {
    return request({
        url: '/system/user/authRole/' + userId,
        method: 'get'
    })
}

// 保存授权角色
export function updateAuthRole(data) {
    return request({
        url: '/system/user/authRole',
        method: 'put',
        params: data
    })
}
