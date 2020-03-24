import request from '@/utils/request'

//获取全部职位信息
export function queryPositionAll(arg) {
  return request.post('/positionManager/queryPositionAll', arg)
}

//查询所有简历
export function queryResumeAll(arg) {
  return request.post('/resume/queryResumeAll', arg)
}
//查询审核企业
export function queryCertification(arg) {
  return request.post('/certification/queryCertification', arg)
}
//通过Id查询需审核企业
export function queryCertificationById(arg) {
  return request.post('/certification/queryCertificationById', arg)
}
//