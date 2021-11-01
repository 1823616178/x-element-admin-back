import request from '@/utils/request'

// 获取该单位所有编外人员工号和姓名
export function getBudgets(user) {
    return request({
        url: '/hro/budget/listBudget?user=' + user,
        method: 'get',
    })
}
