import request from '@/utils/request'

export function getPosition (id) {
  return request({
    url: '/candidate/position/' + id,
    method: 'get'
  })
}

export function matchInfo (params) {
  return request({
    url: '/position/match/info',
    method: 'get',
    params: params
  })
}

export function recommend (params) {
  return request({
    url: '/position/match',
    method: 'get',
    params: params
  })
}

