import request from '@/utils/request'

/**
 * 简历个人信息
 * @param {*} arg 
 */
export function collection(arg) {
    return request.post('/collection/queryCollectPosition', arg)
  }

  /**
 * 登录接口
 * @param {*} arg 
 */
export function login(arg) {
  return request.post('/jobSeeker/login', arg)
}
