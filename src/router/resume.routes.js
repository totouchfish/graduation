import resume from '@/views/resume/resume.vue'
export default {
  path: '/resume',
  name: 'resume',
  // component: () => import('@/views/index_user.vue'),
  component: resume, //component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/resume',
      name: 'resume',
      // meta: { title: '首页' },
      component: () => import('@/views/resume/resume') //懒加载
      // component: resolve => require(['@/views/home/home'], resolve)
    },
  ]
}
