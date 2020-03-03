import Layout from '@/views/layout.vue'
export default {
  path: '/home',
  name: 'home',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home')//懒加载
    }
  ]
}
