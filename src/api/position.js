import request from '@/utils/request'

/**
 * 筛选简历
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