import request from '@/utils/request'

//获取全部职位信息
export function queryPositionAll(arg) {
  return request.post('/positionManager/queryPositionAll', arg)
}
//删除职位
export function delPosition(arg) {
  return request.post('/positionManager/delPosition', arg)
}

//查询所有简历
export function queryResumeAll(arg) {
  return request.post('/resume/queryResumeAll', arg)
}
//删除简历
export function deleteResume(arg) {
  return request.post('/resumeManager/deleteResume', arg)
}

//查询审核企业
export function queryCertification(arg) {
  return request.post('/certification/queryCertification', arg)
}
//通过Id查询需审核企业
export function queryCertificationById(arg) {
  return request.post('/certification/queryCertificationById', arg)
}
//修改需审核企业信息
export function updateCertification(arg) {
  return request.post('/certification/updateCertification', arg)
}
//修改审核状态
export function updateState(arg) {
  return request.post('/certification/updateState', arg)
}
//删除倒闭企业
export function delCertification(arg) {
  return request.post('/certification/delCertification', arg)
}
//系统公告列表
export function queryNoticeAll(arg) {
  return request.post('/notice/queryNoticeAll', arg)
}
//添加公告
export function opNotice(arg) {
  return request.post('/notice/opNotice', arg)
}
//修改公告
export function updateNotice(arg) {
  return request.post('/notice/updateNotice', arg)
}
//删除公告
export function deleteNotice(arg) {
  return request.post('/notice/deleteNotice', arg)
}
//通过Id查询公告
export function queryNoticeById(arg) {
  return request.post('/notice/queryNoticeById', arg)
}