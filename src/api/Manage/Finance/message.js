import request from '@/utils/request'

export function getList(query){
    return request({
        url: '/hro/message/getList',
        method: 'get',
        params: query
    })
}

export function markRead(query){
    return request({
        url: '/hro/message/markRead',
        method: 'get',
        params: query
    })
}

export function readAll(query){
    return request({
        url: '/hro/message/readAll',
        method: 'get',
        params: query
    })
}
