import request from '@/utils/request'

/**
 * 简历个人信息
 * @param {*} arg 
 */
export function resumeInfo(arg) {
    return request.post('/resume/queryUserInfo', arg)
  }

  export function resumeIntention(arg) {
    return request.post('/resume/queryJobIntention', arg)
  }



