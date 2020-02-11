import Layout from '@/views/index_user.vue'
import Home from '@/views/home/home.vue'
export default {
  path: '/home',
  name: 'home',
  // component: () => import('@/views/index_user.vue'),
  component: Home,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/home',
      name: 'home',
      // meta: { title: '首页' },
      component: () => import('@/views/home/home')//懒加载
      // component: resolve => require(['@/views/home/home'], resolve)
    }
  ]
}
