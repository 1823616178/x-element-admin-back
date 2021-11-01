import request from '@/utils/request'

export function companyCompare (company1, company2) {
  return request({
    url: '/candidate/company/compare',
    method: 'get',
    params: {
      company1, company2
    }
  })
}
