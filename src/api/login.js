import request from '@/utils/request'


/**
 * 登录接口
 * @param {*} arg 
 */
export function login(arg) {
  return request.post('/login/login', arg)
}
/**
 * 注册
 * @param {*} arg 
 */
export function register(arg) {
    return request.post('/jobSeeker/register', arg)
  }

// //投递简历 申请职位
// export function acceptPosition(arg) {
//   return request.post('/resume/deliverResume', arg)
// }

// //删除收藏
// export function delCollection(arg) {
//   return request.post('/collection/delCollectPosition', arg)
// }
 
