import Layout from '@/views/index_user.vue'
export default {
  path: '/searchJob',
  name: 'searchJob',
  component: Layout, //component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/searchJob',
      name: 'searchJob',
      component: () => import('@/views/searchJob/searchJob') //懒加载
    },
  ]
}
