import request from '@/utils/request'

// 获取详情页面数据
export function tableAndEachrt(query) {
  return request({
    url: '/hro/budget/kbCDlist',
    method: 'get',
    params: query
  })
}

// 获取编外人员列表数据
export function personList(query) {
  return request({
    url: '/hro/budget/personList',
    method: 'get',
    params: query
  })
}
// 获取详情页面数据
export function listInfo(query) {
  return request({
    url: '/hro/budget/kbDetailedList',
    method: 'get',
    params: query
  })
}
// echarts 获取数据
export function echartsData(query) {
  return request({
    url: '/hro/budget/kbEchartsData',
    method: 'get',
    params: query
  })
}
