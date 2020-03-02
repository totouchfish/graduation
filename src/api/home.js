import request from '@/utils/request'

/**教室信息：4个api**/

/**
 * [findClassroom 教室列表]
 * @params Object 参数
 **/
export function homeLists(arg) {
  return request.post('/recruit/queryPositionRecruiter', arg)
}

/**
 * [queryPositionInfoByTrade 热门搜索]
 * @params Object 参数
 **/

export function queryPositionInfoByTrade(arg) {
  return request.post('/recruit/queryPositionInfoByTrade', arg)
}

/**
 * [updateClassroom 更新教室信息]
 * @params Object 参数
 **/
export function updateClassroom(arg) {
  return request.post('/updateClassroom', arg)
}

/**
 * [deleteClassroom 删除询学员信息]
 * @params Object 参数 id
 **/
export function deleteClassroom(arg) {
  return request.post('/deleteClassroom', arg)
}
