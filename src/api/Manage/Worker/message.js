import request from '@/utils/request'

// 获取发布的消息
export function initPublished(pageSize, pageNo) {
    return request({
        url: '/hro/message/initPublish?pageSize=' + pageSize + '&pageNo=' + pageNo,
        method: 'get',
    })
}

// 获取收到的消息
export function initReceived(pageSize, pageNo) {
    return request({
        url: '/hro/message/initReceive?pageSize=' + pageSize + '&pageNo=' + pageNo,
        method: 'get',
    })
}

// 获取发布的消息
export function getPublishedMsgs(pageSize, pageNo) {
    return request({
        url: '/hro/message/listPublish?pageSize=' + pageSize + '&pageNo=' + pageNo,
        method: 'get',
    })
}

// 获取收到的消息
export function getReceivedMsgs(pageSize, pageNo) {
    return request({
        url: '/hro/message/listReceive?pageSize=' + pageSize + '&pageNo=' + pageNo,
        method: 'get',
    })
}

// 添加发布消息
export function addPublishedMsgs(param) {
    return request({
        url: '/hro/message/addPublish',
        method: 'post',
        data: param,
    })
}

// 删除发布消息
export function delPublishedMsgs(ids) {
    return request({
        url: '/hro/message/delPublish?ids=' + ids,
        method: 'get',
    })
}

// 获取收到的消息
export function markAsRead(id) {
    return request({
        url: '/hro/message/markRead?id=' + id,
        method: 'get',
    })
}