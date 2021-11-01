import request from '@/utils/request'

// 统计公司整体状况
export function companyCount(user) {
    return request({
        url: '/hro/spectaculars/count?user=' + user,
        method: 'get',
    })
}

// 统计预算支出
export function countBudget(user, type) {
    return request({
        url: '/hro/spectaculars/countBudget?user=' + user + '&type=' + type,
        method: 'get',
    })
}

// 统计入职离职
export function countDimission(user, type) {
    return request({
        url: '/hro/spectaculars/countDimission?user=' + user + '&type=' + type,
        method: 'get',
    })
}

// 统计学历分布
export function countEdu(user) {
    return request({
        url: '/hro/spectaculars/countEdu?user=' + user,
        method: 'get',
    })
}

// 统计专业分布
export function countMajor(user) {
    return request({
        url: '/hro/spectaculars/countMajor?user=' + user,
        method: 'get',
    })
}

// 统计年龄分布
export function countAge(user) {
    return request({
        url: '/hro/spectaculars/countAge?user=' + user,
        method: 'get',
    })
}

// 统计薪资分布
export function countSalary(user) {
    return request({
        url: '/hro/spectaculars/countSalary?user=' + user,
        method: 'get',
    })
}

// 依据登陆账号获取单位名称
export function getCompanyName(user) {
    return request({
        url: '/hro/spectaculars/companyName?user=' + user,
        method: 'get',
    })
}
