import Layout from '@/views/layout.vue'
export default {
  path: '/progress',
  name: 'progress',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/views/userSystem/progress/progress')//懒加载
    }
  ]
}