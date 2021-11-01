import request from '@/utils/request'
import { praseStrEmpty } from "@/utils/hanvon";
//查询职位合同
export function positionList(query) {
    return request({
        url: '/hro/position/list',
        method: 'get',
        params: query
    })
}
// 新增职位
export function addPosition(data) {
    return request({
        url: '/hro/position',
        method: 'post',
        data: data
    })
}
// 删除职位
export function deletePosition(ids) {
    return request({
        url: '/hro/position/' + ids,
        method: 'delete'
    })
}
// 修改职位\发布职位
export function updatePosition(data) {
    return request({
        url: '/hro/position',
        method: 'put',
        data: data
    })
}

// 查询黑名单详细
export function getPosition(id) {
    return request({
        url: '/hro/position/getInfo/' + id,
        method: 'get'
    })
}
export function updatePositionStatus(id) {
    const data = {
        id,
        blackFlag:"2"
    }
    return request({
        url: '/hro/position/updateStatus',
        method: 'put',
        data:data
    })
}


