import Layout from '@/views/index_user.vue'
export default {
  path: '/progress',
  name: 'progress',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/views/progress/progress')//懒加载
    }
  ]
}