import request from '@/utils/request'
import { praseStrEmpty } from "@/utils/hanvon";
//查询员工合同
export function queryContract(query) {
    return request({
        url: '/hro/contract/queryContract',
        method: 'get',
        params: query
    })
}

