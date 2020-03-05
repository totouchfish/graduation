import Layout from '@/views/layout.vue'
export default {
  path: '/collection',
  name: 'collection',
  component: Layout,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/collection',
      name: 'collection',
      component: () => import('@/views/collection/collection')//懒加载
      // component: resolve => require(['@/views/home/home'], resolve)
    }
  ]
}