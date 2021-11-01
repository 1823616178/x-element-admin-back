import request from '@/utils/request'

// 查询灵活用工考勤信息列表
export function listAttendance(query) {
  return request({
    url: '/hro/attendance/list',
    method: 'get',
    params: query
  })
}

// 查询灵活用工考勤信息详细
export function getAttendance(attendanceId) {
  return request({
    url: '/hro/attendance/' + attendanceId,
    method: 'get'
  })
}

// 新增灵活用工考勤信息
export function addAttendance(data) {
  return request({
    url: '/hro/attendance',
    method: 'post',
    data: data
  })
}

// 修改灵活用工考勤信息
export function updateAttendance(data) {
  return request({
    url: '/hro/attendance',
    method: 'put',
    data: data
  })
}

// 删除灵活用工考勤信息
export function delAttendance(attendanceId) {
  return request({
    url: '/hro/attendance/' + attendanceId,
    method: 'delete'
  })
}
