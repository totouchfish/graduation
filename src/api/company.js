import request from '@/utils/request'

/**
 * 获取今日投递、招聘人数，以及总人数
 * @param {*} arg
 */
export function queryNumber(arg) {
  return request.post('/resumeHandle/queryNumber', arg)
}
/**
 * 获取近七天内招聘人数和简历投递数
 * @param {*} arg
 */
export function recentDeliverNum(arg) {
  return request.post('/resumeHandle/recentDeliverNum', arg)
}
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
//恢复简历
export function resumeResume(arg) {
  return request.post('/resumeHandle/resumeResume', arg)
}
//删除简历
export function delResume(arg) {
  return request.post('/resumeHandle/delResume', arg)
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
//修改职位状态
export function updatePositionState(arg) {
  return request.post('/post/updatePositionState', arg)
}
//企业认证
export function certification(arg) {
  return request.post('/certification/addCertification', arg)
  }