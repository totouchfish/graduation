// function salary(val) {
//   let font = '';
//   switch (val) {
//     case '1':
//       font = '1k元/月以下';
//       break;
//     case '2':
//       font = '1k-2k元/月';
//       break;
//     case '3':
//       font = '2k-4k元/月';
//       break;
//     case '4':
//       font = '4k-6k元/月';
//       break;
//     case '5':
//       font = '6k-8k元/月';
//       break;
//     case '6':
//       font = '8k-10k元/月';
//       break;
//     case '7':
//       font = '10k-15k元/月';
//       break;
//     case '8':
//       font = '15k-20k元/月';
//       break;
//     case '9':
//       font = '20k元/月以上';
//       break;
//     default:
//       font = '无';
//   }
//   return font;
// }
// 转义方法
function degree(val){
  let font = '';
  switch (val) {
    case '1':
      font = '高中及以上';
      break;
    case '2':
      font = '中专及以上';
      break;
    case '3':
      font = '本科及以上';
      break;
    case '4':
      font = '本科及以上';
      break;
    case '5':
      font = '硕士及以上';
      break;
    case '6':
      font = '博士及以上';
      break;
    case '9':
      font = '不限';
      break;
    default:
      font = '无';
  }
  return font;
}

function age(val){
  let font = '';
  switch (val) {
    case '1':
      font = '20岁以下';
      break;
    case '2':
      font = '20-25岁';
      break;
    case '3':
      font = '25-30岁';
      break;
    case '4':
      font = '30-35岁';
      break;
    case '5':
      font = '35-40岁';
      break;
    case '6':
      font = '40-45岁';
      break;
    case '7':
      font = '45-50岁';
      break;
    case '9':
      font = '不限';
      break;
    default:
      font = '无';
  }
  return font;
}
// function workYears(val){
//   let font = '';
//   switch (val) {
//     case '1':
//       font = '1年以下';
//       break;
//     case '2':
//       font = '1-3年';
//       break;
//     case '3':
//       font = '3-5年';
//       break;
//     case '4':
//       font = '5年以上';
//       break;
//     case '9':
//       font = '不限';
//       break;
//     default:
//       font = '无';
//   }
//   return font;
// }

var switchFont = {
  //salary: salary,
  degree: degree,
  age:age,
  //workYears:workYears,
}

export default switchFont
