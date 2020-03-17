import request from '@/utils/request'

/**
 * 筛选简历
 * @param {*} arg
 */
export function searchDeliver(arg) {
    return request.post('mock/resumeHandle/searchDeliver', arg)
  }

  //添加审核
  export function verifyResume(arg) {
    return request.post('mock/resumeHandle/verifyResume', arg)
  }
//删除
  export function resumeUnsuit(arg) {
    return request.post('mock/resumeHandle/resumeUnsuit', arg)
  }
//邀请面试
  export function requestInterview(arg) {
    return request.post('mock/resumeHandle/requestInterview', arg)
  }
//修改面试状态
  export function updateInterviewState(arg) {
    return request.post('mock/resumeHandle/updateInterviewState', arg)
  }

  /**
 * 面试管理
 * @param {*} arg 
 */
export function queryInterview(arg) {
  return request.post('mock/resumeHandle/queryInterview', arg)
}