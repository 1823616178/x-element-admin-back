import request from '@/utils/request'

// 查询员工薪酬方案关联列表
export function listSalaryManagement(query) {
    return request({
        url: '/hro/salaryManagement/list',
        method: 'get',
        params: query
    })
}

// 查询员工薪酬方案关联详细
export function getSalaryManagement(id) {
    return request({
        url: '/hro/salaryManagement/' + id,
        method: 'get'
    })
}

// 新增员工薪酬方案关联
export function addSalaryManagement(data) {
    return request({
        url: '/hro/salaryManagement',
        method: 'post',
        data: data
    })
}

// 修改员工薪酬方案关联
export function updateSalaryManagement(data) {
    return request({
        url: '/hro/salaryManagement',
        method: 'put',
        data: data
    })
}

// 删除员工薪酬方案关联
export function delSalaryManagement(id) {
    return request({
        url: '/hro/salaryManagement/' + id,
        method: 'delete'
    })
}
