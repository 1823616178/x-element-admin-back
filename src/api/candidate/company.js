import request from '@/utils/request'

export function queryCompany (name) {
  return request({
    url: '/candidate/company',
    method: 'get',
    params: { name }
  })
}

export function getDetails (id) {
  return request({
    url: '/common/company/' + id + '/details',
    method: 'get'
  })
}

