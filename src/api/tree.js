import request from '@/utils/request'

// 查询字典数据列表
export function getTree (dicts) {
  return request({
    url: '/tree',
    method: 'get',
    params: {
      type: dicts[0],
      level: dicts[1],
      pid: dicts[2],
      lazy: dicts[3]
    }
  })
}
