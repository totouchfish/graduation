import Layout from '@/views/index_user.vue'
import Collection from '@/views/collection/collection.vue'
export default {
  path: '/collection',
  name: 'collection',
  // component: () => import('@/views/index_user.vue'),
  component: Collection,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/collection',
      name: 'collection',
      // meta: { title: '首页' },
      component: () => import('@/views/collection/collection')//懒加载
      // component: resolve => require(['@/views/home/home'], resolve)
    }
  ]
}