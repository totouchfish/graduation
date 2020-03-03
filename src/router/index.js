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
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    ...routerList,
    // {
    //   path: '/index_user',
    //   name: 'index_user',
    //   // component: Index
    // },
    
  ]
})
