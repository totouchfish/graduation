import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routerList = [];

function importAll(r) {
  r.keys().forEach(
    (key) => routerList.push(r(key).default)
    // key 拿到的是整个组件的export default，要拿里面的值所以要.default
  );
}

importAll(require.context('../router', false, /\.routes\.js/))
export default new Router({
  routes: [
    ...routerList,
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '/registerU',
      name: 'registerU',
      component: () => import('@/views/login/registerU') //懒加载
    },
    {
      path: '/registerC',
      name: 'registerC',
      component: () => import('@/views/login/registerC') //懒加载
    },
  ]
})
