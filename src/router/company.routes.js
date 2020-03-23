import Layout from '@/views/layout.vue'
export default {
  path: '/chome',
  name: 'chome',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/chome',
      name: 'chome',
      component: () => import('@/views/companySystem/home/chome')//懒加载
    },
    {
      path: '/resumeHanlde',
      name: 'resumeHanlde',
      component: () => import('@/views/companySystem/resumeHanlde/resumeHanlde')//懒加载
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: () => import('@/views/companySystem/recruitment/recruitment')//懒加载
    },
    {
      path: '/add_recruitment',
      name: 'add_recruitment',
      component: () => import('@/views/companySystem/recruitment/add_recruitment')//懒加载
    },
    {
      path: '/interview',
      name: 'interview',
      component: () => import('@/views/companySystem/interview/interview')//懒加载
    },
    {
      path: '/certification',
      name: 'certification',
      component: () => import('@/views/companySystem/certification/certification')//懒加载
    },
    // {
    //   path: '/certification',
    //   name: 'certification',
    //   component: () => import('@/views/companySystem/certification/certification')//懒加载
    // }
  ]
}
