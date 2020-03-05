import Layout from '@/views/layout.vue'
export default {
  path: '/postDetail',
  name: 'postDetail',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/postDetail',
      name: 'postDetail',
      component: () => import('@/views/userSystem/postDetail/postDetail')//懒加载
    }
  ]
}