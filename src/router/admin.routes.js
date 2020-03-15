import Layout from '@/views/layout.vue'
export default {
  path: '/ahome',
  name: 'chome',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/ahome',
      name: 'ahome',
      component: () => import('@/views/adminSystem/home/ahome')//懒加载
    },
    {
      path: '/companyReview',
      name: 'companyReview',
      component: () => import('@/views/adminSystem/companyReview/companyReview')//懒加载
    },
    {
      path: '/companyUnreviewed',
      name: 'companyUnreviewed',
      component: () => import('@/views/adminSystem/companyReview/companyUnreviewed')//懒加载
    },
    {
      path: '/companyManager',
      name: 'companyManager',
      component: () => import('@/views/adminSystem/companyManager/companyManager')//懒加载
    },
    // {
    //   path: '/add_recruitment',
    //   name: 'add_recruitment',
    //   component: () => import('@/views/adminSystem/recruitment/add_recruitment')//懒加载
    // },
    {
      path: '/userManager',
      name: 'userManager',
      component: () => import('@/views/adminSystem/userManager/userManager')//懒加载
    }
  ]
}
