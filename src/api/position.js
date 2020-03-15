import request from '@/utils/request'

/**
 * 筛选简历
 * @param {*} arg 
 */
export function queryPersonalPosition(arg) {
    return request.post('/post/queryPersonalPosition', arg)
  }