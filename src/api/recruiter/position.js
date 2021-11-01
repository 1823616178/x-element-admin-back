import request from '@/utils/request'

export function publishPostion (position) {
  return request({
    url: '/recruiter/position',
    method: 'post',
    data: position
  })
}

export function positionList (params) {
  return request({
    url: '/position-manage/list',
    method: 'get',
    params
  })
}

export function getConditions () {
  return request({
    url: '/position-manage/query-condition',
    method: 'get'
  })
}

export function getPosition (params) {
  return request({
    url: '/position-manage/position',
    method: 'get',
    params
  })
}

export function getResumes () {
  return request({
    url: '/position-manage/resume',
    method: 'get'
  })
}

export function getEvaluationList (params) {
  return request({
    url: '/position-manage/evaluation',
    method: 'get',
    params
  })
}

