import request from '@/utils/request';
export function listXzq() {
  return request({
    url: '/hro/budget/listallmoney',
    method: 'get',
  })
}
