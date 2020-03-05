import request from '@/utils/request'

/**
 * 简历页面
 * @param {*} arg 
 */
// 获取用户信息
export function queryUserInfoById(arg) {
    return request.post('/resume/queryUserInfoById', arg)
  }
  // 修改用户信息
  export function updateUserInfo(arg) {
    return request.post('/resume/updateUserInfo', arg)
  }
  // 获取用户职位意向
  export function queryJobIntentionById(arg) {
    return request.post('/resume/queryJobIntentionById', arg)
  }
  // 修改用户职位意向
  export function updateJobIntention(arg) {
    return request.post('/resume/updateJobIntention', arg)
  }
  // 这是什么接口
  export function resumeIntention(arg) {
    return request.post('/resume/queryJobIntention', arg)
  }



