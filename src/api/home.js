import request from '@/utils/request'

/**：4个api**/

/**
 * 首页列表
 * @param {*} arg 
 */
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
 * 多条件查询
 * @param {*} arg 
 */
export function queryPositionByCondition(arg) {
  return request.post('/recruit/queryPositionByMore', arg)
}
