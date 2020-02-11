export function checkArray(key) {
  // 权限数组
  let arr = ['1', '2', '3', '5'];
  let index = arr.indexOf(key);
  if (index > -1) {
    return true;
    // 有这个权限
  } else {
    return false;
  }
}
