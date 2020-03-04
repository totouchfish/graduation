export default {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/login.vue'),
  // 
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login')//懒加载
    }
  ]
}
