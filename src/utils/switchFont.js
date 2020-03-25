function salary(val) {
  let font = '';
  switch (val) {
    case '1':
      font = '1k元/月以下';
      break;
    case '2':
      font = '1k-2k元/月';
      break;
    case '3':
      font = '2k-4k元/月';
      break;
    case '4':
      font = '4k-6k元/月';
      break;
    case '5':
      font = '6k-8k元/月';
      break;
    case '6':
      font = '8k-10k元/月';
      break;
    case '7':
      font = '10k-15k元/月';
      break;
    case '8':
      font = '15k-20k元/月';
      break;
    case '9':
      font = '20k元/月以上';
      break;
    default:
      font = '无';
  }
  return font;
}

// 转义方法
function degree(val){
  let font = '';
  switch (val) {
    case '1':
      font = '高中';
      break;
    case '2':
      font = '中专';
      break;
    case '3':
      font = '大专';
      break;
    case '4':
      font = '本科';
      break;
    case '5':
      font = '硕士';
      break;
    case '6':
      font = '博士';
      break;
    case '9':
      font = '其他';
      break;
    default:
      font = '无';
  }
  return font;
}

var switchFont = {
  salary: salary,
  degree: degree,
}

export default switchFont
