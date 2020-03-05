import Layout from '@/views/layout.vue'
import postDetail from '@/views/postDetail/postDetail.vue'
export default {
  path: '/postDetail',
  name: 'postDetail',
  component: postDetail,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/postDetail',
      name: 'postDetail',
      // meta: { title: '首页' },
      component: () => import('@/views/postDetail/postDetail')//懒加载
      // component: resolve => require(['@/views/home/home'], resolve)
    }
  ]
}