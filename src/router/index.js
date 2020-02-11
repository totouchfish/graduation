import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/views/index_user.vue'
// import Login from '@/views/login'
// import Login from './login.routes.js'

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
    // Login,
    ...routerList,
    {
      path: '/',
      name: 'index_user',
      // component: Index
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: resolve => require(['@/views/home/home'], resolve)
    // }
  ]
})
