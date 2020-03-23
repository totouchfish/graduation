import request from '@/utils/request'

// 获取全国所有省份
export function getProvince(arg) {
  return request.post('/china/province', arg)
}
//显示全国所有城市
export function getCity(arg) {
  return request.post('/china/city', arg)
}