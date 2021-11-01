import request from '@/utils/request'

// 获取该单位所有编外人员工号和姓名
export function getEmps() {
    return request({
        url: '/hro/attendance/listemp',
        method: 'get',
    })
}

// 获取休假类型数据字典
export function getVacaTypes() {
    return request({
        url: '/hro/attendance/listvacatype',
        method: 'get',
    })
}

// 初始化查询考勤信息
export function initAttendances() {
    return request({
        url: '/hro/attendance/initattendances',
        method: 'get',
    })
}

// 初始化查询考勤信息
export function initVacations() {
    return request({
        url: '/hro/attendance/initvacations',
        method: 'get',
    })
}

// 查询考勤信息
export function getAttendances() {
  return request({
    url: '/hro/attendance/attendances',
    method: 'get',
  })
}

// 查询休假信息
export function getVacations() {
  return request({
    url: '/hro/attendance/vacations',
    method: 'get',
  })
}

// 查询今日出勤概览
export function getAttenOverView() {
    return request({
        url: '/hro/attendance/overview',
        method: 'get'
    })
}

// 添加考勤信息
export function addAttendance(param) {
    return request({
        url: '/hro/attendance/addAttendance',
        method: 'post',
        data: param
    })
}

// 添加休假信息
export function addVacation(param) {
    return request({
        url: '/hro/attendance/addVacation',
        method: 'post',
        data: param
    })
}

// 删除休假信息
export function delVacation(ids) {
    return request({
        url: '/hro/attendance/delVacation?ids=' + ids,
        method: 'get',
    })
}

// 获取单条休假信息
export function getVacationById(id) {
    return request({
        url: '/hro/attendance/getVacation?id=' + id,
        method: 'get',
    })
}

// 修改休假信息
export function editVacation(param) {
    return request({
        url: '/hro/attendance/editVacation',
        method: 'post',
        data: param
    })
}