import request from '@/utils/request'

/**
 * 简历个人信息
 * @param {*} arg 
 */
export function collection(arg) {
    return request.post('/collection/queryCollectPosition', arg)
  }

//投递简历 申请职位
export function acceptPosition(arg) {
  return request.post('/resume/deliverResume', arg)
}
  /**
 * 登录接口
 * @param {*} arg 
 */
export function login(arg) {
  return request.post('/jobSeeker/login', arg)
}
