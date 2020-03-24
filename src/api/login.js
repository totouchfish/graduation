import request from '@/utils/request'


/**
 * 登录接口
 * @param {*} arg 
 */
export function login(arg) {
  return request.post('/login/login', arg)
}
/**
 * 用户注册
 * @param {*} arg 
 */
export function registerU(arg) {
    return request.post('/jobSeeker/register', arg)
  }
/**
 * 企业注册
 * @param {*} arg 
 */
export function registerC(arg) {
  return request.post('/recruit/register', arg)
}
/**
 * 管理员注册
 * @param {*} arg 
 */
export function registerA(arg) {
  return request.post('/admin/register', arg)
}

 
