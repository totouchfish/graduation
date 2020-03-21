import Layout from '@/views/layout.vue'
export default {
  path: '/resume',
  name: 'resume',
  component: Layout, //component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/resume',
      name: 'resume',
      component: () => import('@/views/userSystem/resume/resume') //懒加载
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('@/views/userSystem/resume/preview') //懒加载
    },
  ]
}
