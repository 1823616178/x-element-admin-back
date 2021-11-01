// 查询员工预入职列表
import request from '@/utils/request'

export function listEmployment(query) {
    return request({
        url: '/hro/employment/list',
        method: 'get',
        params: query
    })
}

// 查询员工预入职详细
export function getEmployment(id) {
    return request({
        url: '/hro/employment/' + id,
        method: 'get'
    })
}

// 新增员工预入职
export function addEmployment(data) {
    return request({
        url: '/hro/employment',
        method: 'post',
        data: data
    })
}

// 修改员工预入职
/*export function updateEmployment(data) {
    return request({
        url: '/hro/employment',
        method: 'put',
        data: data
    })
}*/
// 批量修改员工预入职
export function updateEmploymentList(data) {
    return request({
        url: '/hro/employment',
        method: 'put',
        data: data
    })

}
// 删除员工预入职
export function delEmployment(id) {
    return request({
        url: '/hro/employment/' + id,
        method: 'delete'
    })
}
// 导出入职确认书模板
export function importTemplateEmployment() {
    return request({
        url: '/hro/employment/',
        method: 'importTemplate'
    })
}
