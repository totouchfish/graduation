import request from '@/utils/request'

/**
 * 简历个人信息
 * @param {*} arg 
 */
export function collection(arg) {
    return request.post('/post/queryCollectPosition', arg)
  }
