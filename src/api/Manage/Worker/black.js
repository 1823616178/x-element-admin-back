import request from '@/utils/request'
import { praseStrEmpty } from "@/utils/hanvon";
//查询员工合同
export function blackList(query) {
    return request({
        url: '/hro/black/list',
        method: 'get',
        params: query
    })
}
// 新增员工
export function addBlack(data) {
    return request({
        url: '/hro/black',
        method: 'post',
        data: data
    })
}
// 删除员工
export function deleteBlack(ids) {
    debugger
    return request({
        url: '/hro/black/' + ids,
        method: 'delete'
    })
}
// 修改员工
export function updateBlack(data) {
    return request({
        url: '/hro/black',
        method: 'put',
        data: data
    })
}
// 查询黑名单详细
export function getBlack(id) {
    return request({
        url: '/hro/black/getInfo/' + id,
        method: 'get'
    })
}
export function updateStatus(blackId) {
    const data = {
        blackId:blackId,
        blackFlag:"2"
    }
    return request({
        url: '/hro/black/updateStatus',
        method: 'put',
        data:data
    })
}


