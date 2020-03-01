import Layout from '@/views/index_user.vue'
import progress from '@/views/progress/progress.vue'
export default {
  path: '/progress',
  name: 'progress',
  // component: () => import('@/views/index_user.vue'),
  component: progress,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/progress',
      name: 'progress',
      // meta: { title: '首页' },
      component: () => import('@/views/progress/progress')//懒加载
      // component: resolve => require(['@/views/home/home'], resolve)
    }
  ]
}