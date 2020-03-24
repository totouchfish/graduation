import Layout from '@/views/layout.vue'
export default {
  path: '/home',
  name: 'home',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/userSystem/home/home')//懒加载
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('@/views/userSystem/collection/collection')//懒加载
    },
    {
      path: '/postDetail',
      name: 'postDetail',
      component: () => import('@/views/userSystem/postDetail/postDetail')//懒加载
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/views/userSystem/progress/progress')//懒加载
    },
    {
      path: '/searchJob',
      name: 'searchJob',
      component: () => import('@/views/userSystem/searchJob/searchJob') //懒加载
    },
    {
      path: '/jobDetails',
      name: 'jobDetails',
      component: () => import('@/views/userSystem/searchJob/jobDetails') //懒加载
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('@/views/userSystem/resume/resume') //懒加载
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('@/views/userSystem/resume/preview') //懒加载
    }
  ]
}
