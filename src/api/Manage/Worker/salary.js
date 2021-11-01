import request from '@/utils/request'

// 查询工资信息列表
export function listSalary(query) {
  return request({
    url: '/hro/salary/list',
    method: 'get',
    params: query
  })
}

// 查询工资信息详细
export function getSalary(salaryId) {
  return request({
    url: '/hro/salary/' + salaryId,
    method: 'get'
  })
}

// 新增工资信息
export function addSalary(data) {
  return request({
    url: '/hro/salary',
    method: 'post',
    data: data
  })
}

// 修改工资信息
export function updateSalary(data) {
  return request({
    url: '/hro/salary',
    method: 'put',
    data: data
  })
}

// 删除工资信息
export function delSalary(salaryId) {
  return request({
    url: '/hro/salary/' + salaryId,
    method: 'delete'
  })
}
