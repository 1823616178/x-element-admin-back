import request from '@/utils/request'

// 查询职位
export function queryPositons (params) {
  return request({
    url: '/position/query',
    method: 'get',
    params: params
  })
}

export function matchPositons (params) {
  return request({
    url: '/position/match',
    method: 'get',
    params: params
  })
}
