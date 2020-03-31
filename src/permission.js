// import Vue from 'vue'
import router from './router'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {

  if (sessionStorage.getItem('token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    }else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
