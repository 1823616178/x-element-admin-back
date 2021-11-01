// 查询员工预入职列表
import request from '@/utils/request'

// 查询预入职信息确认列表
export function listConfirmation(query) {
    return request({
        url: '/hro/confirmation/list',
        method: 'get',
        params: query
    })
}

// 查询预入职信息确认详细
export function getConfirmation(id) {
    return request({
        url: '/hro/confirmation/' + id,
        method: 'get'
    })
}

// 新增预入职信息确认
export function addConfirmation(data) {
    return request({
        url: '/hro/confirmation',
        method: 'post',
        data: data
    })
}

// 修改预入职信息确认
export function updateConfirmation(data) {
    return request({
        url: '/hro/confirmation',
        method: 'put',
        data: data
    })
}

// 删除预入职信息确认
export function delConfirmation(id) {
    return request({
        url: '/hro/confirmation/' + id,
        method: 'delete'
    })
}

