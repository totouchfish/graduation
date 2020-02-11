import searchJob from '@/views/searchJob/searchJob.vue'
export default {
  path: '/searchJob',
  name: 'searchJob',
  // component: () => import('@/views/index_user.vue'),
  component: searchJob, //component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/searchJob',
      name: 'searchJob',
      // meta: { title: '首页' },
      component: () => import('@/views/searchJob/searchJob') //懒加载
      // component: resolve => require(['@/views/home/home'], resolve)
    },
  ]
}
