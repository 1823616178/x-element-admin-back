import request from '@/utils/request'

// 查询员工薪酬方案关联列表
export function listPersonSalaryManagement(query) {
    return request({
        url: '/hro/personSalaryManagement/list',
        method: 'get',
        params: query
    })
}

// 查询员工薪酬方案关联详细
export function getPersonSalaryManagement(id) {
    return request({
        url: '/hro/personSalaryManagement/' + id,
        method: 'get'
    })
}

// 新增员工薪酬方案关联
export function addPersonSalaryManagement(data) {
    return request({
        url: '/hro/personSalaryManagement',
        method: 'post',
        data: data
    })
}

// 修改员工薪酬方案关联
export function updatePersonSalaryManagement(data) {
    return request({
        url: '/hro/personSalaryManagement',
        method: 'put',
        data: data
    })
}

// 删除员工薪酬方案关联
export function delPersonSalaryManagement(id) {
    return request({
        url: '/hro/personSalaryManagement/' + id,
        method: 'delete'
    })
}
