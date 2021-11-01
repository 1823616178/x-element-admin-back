import request from '@/utils/request'

// 查询应聘用户信息列表
export function listRecruitPerson(query) {
  return request({
    url: '/hro/recruitPerson/list',
    method: 'get',
    params: query
  })
}
// 查询应聘用户信息列表
export function resultNumListRecruitPerson(query) {
  return request({
    url: '/hro/recruitPerson/resultNumList',
    method: 'get',
    params: query
  })
}

// 查询应聘用户信息详细
export function getRecruitPerson(recruitPersonId) {
  return request({
    url: '/hro/recruitPerson/' + recruitPersonId,
    method: 'get'
  })
}

// 新增应聘用户信息
export function addRecruitPerson(data) {
  return request({
    url: '/hro/recruitPerson',
    method: 'post',
    data: data
  })
}

// 修改应聘用户信息
export function updateRecruitPerson(data) {
  return request({
    url: '/hro/recruitPerson',
    method: 'put',
    data: data
  })
}

// 删除应聘用户信息
export function delRecruitPerson(recruitPersonId) {
  return request({
    url: '/hro/recruitPerson/' + recruitPersonId,
    method: 'delete'
  })
}
