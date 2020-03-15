import Login from '@/views/login/login.vue'
export default {
  path: '/login',
  name: 'login',
  component: Login,
  // 
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login')//懒加载
    }
  ]
}
