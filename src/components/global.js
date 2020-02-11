import Vue from 'vue'

function changeStr(str) {
  // charAt 取字符的第一个字节 abc => Abc
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const requireComponent = require.context('.', false, /\.vue$/);
// 第一个参数：哪个目录下（当前目录下）;
// 第二个参数：是否使用下面的子目录，如果下面新建子目录，并且里面也有组件需要使用，则改成true;
// 第三个参数：正则表达式，用于匹配.vue的文件
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName);
  const componentName = changeStr(
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )
  // console.log(componentName)
  Vue.component(componentName, config.default || config)
});
