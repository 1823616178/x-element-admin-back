import request from '@/utils/request'

// 查询预算列表
export function listBudget(query) {
  return request({
    url: '/hro/budget/list',
    method: 'get',
    params: query
  })
}

// 更新指定预算
export function updateBudget(form) {
  return request({
    url: '/hro/budget/update',
    method: 'post',
    data: form
  })
}

// 新增预算
export function addBudget(form) {
  return request({
    url: '/hro/budget/add' ,
    method: 'post',
    data: form
  })
}

// 删除预算信息
export function deleteBudget(userId) {
  return request({
    url: '/hro/budget/delete',
    method: 'post',
    data: userId
  })
}

