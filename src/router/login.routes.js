import Login from '@/views/userSystem/login/login.vue'
export default {
  path: '/login',
  name: 'login',
  component: Login,
  // 
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/userSystem/login/login')//懒加载
    }
  ]
}
