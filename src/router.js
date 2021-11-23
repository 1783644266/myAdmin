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

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/one',
          component: one,
          name: 'one',
          children: [
            {
              path: 'oneone',
              component: oneone,
              name: 'oneone'
            }
          ]
        },
        {
          path: 'two',
          component: two,
          name: 'two'
        },
        {
          path: 'doashBoard',
          component: doashBoard,
          name: 'doashBoard'
        },
        {
          path: 'three',
          component: three,
          name: 'three'
        },
        {
          path: 'four',
          component: four,
          name: 'four'
        },
        {
          path: 'five',
          component: five,
          name: 'five'
        }
      ]
    }
  ]
})
