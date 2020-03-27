import request from '@/utils/request'

/**
 * 首页
 */
//首页列表
export function homeLists(arg) {
  return request.post('/positionInfo/queryPositionRecruiter', arg)
}
//热门搜索
export function queryPositionInfoByTrade(arg) {
  return request.post('/positionInfo/queryPositionInfoByTrade', arg)
}

/**
 * 行业页面
 */
// 多条件查询
export function queryPositionByMore(arg) {
  return request.post('/positionInfo/queryPositionByMore', arg)
}

//查询职位详细信息
export function positionDetail(arg) {
  return request.post('/positionInfo/queryPositionDetail', arg)
}
/**
 * 简历页面
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
//投递简历 申请职位
export function acceptPosition(arg) {
  return request.post('/resume/deliverResume', arg)
}
// 简历投递进展
export function progress(arg) {
  return request.post('/resume/progress', arg)
}

/**
 * 收藏职位
 */
export function addCollection(arg) {
  return request.post('/collection/addCollectPosition', arg)
}
//显示已收藏的职位
export function collection(arg) {
  return request.post('/collection/queryCollectPosition', arg)
}
//删除收藏
export function delCollection(arg) {
return request.post('/collection/delCollectPosition', arg)
}