import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

import one from './views/one'
import two from './views/two'
import three from './views/three'
import four from './views/four'
import five from './views/five'
import oneone from './views/oneone'
import doashBoard from './views/doashBoard'

Vue.use(Router)


// 默认用name当tags标题，如果需要设置meta的title属性

export const staticRoutes =  [
  {
    path: '/',
    name: 'Layout',
    redirect: '/doashBoard',
    component: Layout,
    children: [
      {
        path: 'doashBoard',
        component: doashBoard,
        name: 'doashBoard',
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/one',
    name: 'Layout',
    meta: {
      title: '第一个子菜单'
    },
    component: Layout,
    children: [
      {
        path: 'one',
        component: one,
        name: 'one',
        meta: {
          title: '第一个选项'
        }
      },
      {
        path: 'two',
        component: oneone,
        name: 'oneone',
        meta: {
          title: '第二个选项'
        }
      },
    ]
  },
  {
    path: '/two',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        component: two,
        name: 'two',
        meta: {
          title: '第二个'
        }
      }
    ]
  },
  {
    path: '/three',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        component: three,
        name: 'three',
        meta: {
          title: '第三个'
        }
      }
    ]
  },
  {
    path: '/four',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        component: four,
        name: 'four',
        meta: {
          title: '第四个'
        }
      }
    ]
  },
  {
    path: '/five',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        component: five,
        name: 'five',
        meta: {
          title: '第五个'
        }
      }
    ]
  }
]
export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: staticRoutes
})

        