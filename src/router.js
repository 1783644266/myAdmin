import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

import login from './views/login'
import one from './views/one'
import two from './views/two'
import three from './views/three'
import four from './views/four'
import five from './views/five'
import oneone from './views/oneone'
import doashBoard from './views/doashBoard'
import admin from './views/admin'
import editor from './views/editor'


Vue.use(Router)


// 默认用name当tags标题，如果需要设置meta的title属性

export const staticRoutes =  [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: login
  },
  {
    path: '/',
    redirect: '/doashBoard',
    component: Layout,
    children: [
      {
        path: '/doashBoard',
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
    name: 'one',
    meta: {
      title: '第一个子菜单'
    },
    component: Layout,
    children: [
      {
        path: 'one',
        component: one,
        name: 'oneone',
        meta: {
          title: '第一个选项'
        }
      },
      {
        path: 'two',
        component: oneone,
        name: 'onetwo',
        meta: {
          title: '第二个选项'
        }
      },
    ]
  },
  {
    path: '/two',
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
export const asyncRoutes = [
  {
    path: '/admin',
    component: Layout,
    role: 'admin',
    children: [
      {
        path: '',
        component: admin,
        name: 'admin',
        meta: {
          title: 'admin专用页面'
        }
      }
    ]
  },
  {
    path: '/editor',
    component: Layout,
    role: 'editor',
    children: [
      {
        path: '',
        component: editor,
        name: 'editor',
        meta: {
          title: 'editor专用页面'
        }
      }
    ]
  },
]

const createRouter = () => new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: staticRoutes
})
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

const router = createRouter()

export default router

        