import request from '@/utils/request'
import { praseStrEmpty } from "@/utils/hanvon";
// 查询员工列表
export function listWorker(query) {
    return request({
        url: '/hro/employee/list',
        method: 'get',
        params: query
    })
}
// 查询员工类型
export function getEmployeeType(query) {
    return request({
        url: '/hro/employee/queryType',
        method: 'get',
        params: query
    })
}
//查询员工合同
export function queryContract(query) {
    return request({
        url: '/hro/employee/queryContract',
        method: 'get',
        params: query
    })
}
//查询员工薪资记录
export function querySalary(query) {
    return request({
        url: '/hro/employee/querySalary',
        method: 'get',
        params: query
    })
}
//查询员工离职记录
export function queryLeave(query) {
    return request({
        url: '/hro/employee/queryLeave',
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
// 新增员工
export function addEmployee(data) {
    return request({
        url: '/hro/employee',
        method: 'post',
        data: data
    })
}
// 删除员工
export function delEmployee(employeeNo) {
    return request({
        url: '/hro/employee/' + employeeNo,
        method: 'delete'
    })
}
// 修改员工
export function updateEmployee(data) {
    return request({
        url: '/hro/employee',
        method: 'put',
        data: data
    })
}
// 员工状态修改
export function changeStatus(data) {
    return request({
        url: '/hro/employee/changeStatus',
        method: 'put',
        data: data
    })
}
// 查询员工详细
export function getEmployee(employeeId) {
    return request({
        url: '/hro/employee/getInfo/' + employeeId,
        method: 'get'
    })
}
// 查询员工个人信息
export function getUserProfile() {
    return request({
        url: '/system/user/profile',
        method: 'get'
    })
}
// 修改员工个人信息
export function updateUserProfile(data) {
    return request({
        url: '/system/user/profile',
        method: 'put',
        data: data
    })
}

// 员工头像上传
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
