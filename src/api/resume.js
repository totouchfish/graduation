import request from '@/utils/request'

/**
 * 简历页面
 * @param {*} arg 
 */
// 获取用户简历所有数据  
export function queryResume(arg) {
  return request.post('/resume/queryResume', arg)
}
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
//显示用户信息
export function queryUserInfo(arg) {
  return request.post('/resume/queryUserInfo', arg)
}
//显示用户职位意向
export function queryJobIntention(arg) {
  return request.post('/resume/queryJobIntention', arg)
}

// 获取全国所有省份
export function getProvince(arg) {
  return request.post('/china/province', arg)
}
//显示全国所有城市
export function getCity(arg) {
  return request.post('/china/city', arg)
}
//投递简历 申请职位
export function accepPosition(arg) {
  return request.post('/resume/deliverResume', arg)
}
// 简历投递进展
export function progress(arg) {
  return request.post('/resume/progress', arg)
}
//显示项目经验
export function queryProjectById(arg) {
  return request.post('/resume/queryProjectById', arg)
}
//添加项目经验
export function submitProject(arg) {
  return request.post('/resume/submitProject', arg)
}
//显示项目经验
export function queryEducationById(arg) {
  return request.post('/resume/queryEducationById', arg)
}
//添加项目经验
export function submitEducation(arg) {
  return request.post('/resume/submitEducation', arg)
}

//查询所有简历
export function queryResumeAll(arg) {
  return request.post('/resume/queryResumeAll', arg)
}