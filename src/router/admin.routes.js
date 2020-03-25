import Layout from '@/views/layout.vue'
export default {
  path: '/ahome',
  name: 'ahome',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/ahome',
      name: 'ahome',
      component: () => import('@/views/adminSystem/home/ahome')//懒加载
    },
    {
      path: '/systemNotice',
      name: 'systemNotice',
      component: () => import('@/views/adminSystem/systemNotice/systemNotice')//懒加载
    },
    {
      path: '/add_systemNotice',
      name: 'add_systemNotice',
      component: () => import('@/views/adminSystem/systemNotice/add_systemNotice')//懒加载
    },
    {
      path: '/companyReview',
      name: 'companyReview',
      component: () => import('@/views/adminSystem/companyManager/companyReview')//懒加载
    },
    {
      path: '/update_review',
      name: 'update_review',
      component: () => import('@/views/adminSystem/companyManager/update_review')//懒加载
    },
    {
      path: '/positionManager',
      name: 'positionManager',
      component: () => import('@/views/adminSystem/companyManager/positionManager')//懒加载
    },
    // {
    //   path: '/companyManager',
    //   name: 'companyManager',
    //   component: () => import('@/views/adminSystem/companyManager/companyManager')//懒加载
    // },
    // {
    //   path: '/add_recruitment',
    //   name: 'add_recruitment',
    //   component: () => import('@/views/adminSystem/recruitment/add_recruitment')//懒加载
    // },
    {
      path: '/resumeManager',
      name: 'resumeManager',
      component: () => import('@/views/adminSystem/resumeManager/resumeManager')//懒加载
    }
  ]
}
