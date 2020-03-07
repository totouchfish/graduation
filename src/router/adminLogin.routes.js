import adminLogin from '@/views/adminSystem/adminLogin/adminLogin.vue'
export default {
  path: '/adminLogin',
  name: 'adminLogin',
  component: adminLogin,
  // 
  children: [
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: () => import('@/views/adminSystem/adminLogin/adminLogin')//懒加载
    }
  ]
}
