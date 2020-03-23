import request from '@/utils/request'

/**
 * 筛选简历
 * @param {*} arg
 */
export function searchDeliver(arg) {
  return request.post('/resumeHandle/searchDeliver', arg)
}

//添加审核
export function verifyResume(arg) {
  return request.post('/resumeHandle/verifyResume', arg)
}
//删除
export function resumeUnsuit(arg) {
  return request.post('/resumeHandle/resumeUnsuit', arg)
}
//邀请面试
export function requestInterview(arg) {
  return request.post('/resumeHandle/requestInterview', arg)
}
//修改面试状态
export function updateInterviewState(arg) {
  return request.post('/resumeHandle/updateInterviewState', arg)
}

/**
* 面试管理
* @param {*} arg 
*/
export function queryInterview(arg) {
return request.post('/resumeHandle/queryInterview', arg)
}

/**
 * 查询职位信息
 * @param {*} arg 
 */
export function queryPersonalPosition(arg) {
  return request.post('/post/queryPersonalPosition', arg)
}

//职位操作
export function positionOperation(arg) {
return request.post('/post/positionOperation', arg)
}

//通过Id获取职位信息
export function queryPositionInfoById(arg) {
return request.post('/post/queryPositionInfoById', arg)
}
