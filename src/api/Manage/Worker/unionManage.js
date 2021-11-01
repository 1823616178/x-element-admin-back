import request from '@/utils/request'

// 查询工会管理列表
export function listUnionManage(query) {
  return request({
    url: '/hro/unionManage/list',
    method: 'get',
    params: query
  })
}

// 查询工会管理详细
export function getUnionManage(unionId) {
  return request({
    url: '/hro/unionManage/' + unionId,
    method: 'get'
  })
}

// 新增工会管理
export function addUnionManage(data) {
  return request({
    url: '/hro/unionManage',
    method: 'post',
    data: data
  })
}

// 修改工会管理
export function updateUnionManage(data) {
  return request({
    url: '/hro/unionManage',
    method: 'put',
    data: data
  })
}

// 删除工会管理
export function delUnionManage(unionId) {
  return request({
    url: '/hro/unionManage/' + unionId,
    method: 'delete'
  })
}
