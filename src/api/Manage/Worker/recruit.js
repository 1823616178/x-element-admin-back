import request from '@/utils/request'

// 查询招聘信息列表
export function listRecruit(query) {
  return request({
    url: '/hro/recruit/list',
    method: 'get',
    params: query
  })
}

// 查询招聘信息详细
export function getRecruit(recruitId) {
  return request({
    url: '/hro/recruit/' + recruitId,
    method: 'get'
  })
}

// 新增招聘信息
export function addRecruit(data) {
  return request({
    url: '/hro/recruit',
    method: 'post',
    data: data
  })
}

// 修改招聘信息
export function updateRecruit(data) {
  return request({
    url: '/hro/recruit',
    method: 'put',
    data: data
  })
}

// 删除招聘信息
export function delRecruit(recruitId) {
  return request({
    url: '/hro/recruit/' + recruitId,
    method: 'delete'
  })
}
