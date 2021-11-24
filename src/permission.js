import router from './router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import store from './store'

Nprogress.configure({ showSpinner: false })

router.beforeEach((to, from , next) => {
  Nprogress.start()
  if (!store.state.role) {
    if (to.path == '/login') {
      next()
    } else {
      if (from.path != '/login') {
        Message.error('请登录！')
      }
      next({ name: 'login'})
    }
  } else {
    if (!store.state.roleRoute.length) {
      store.commit('m_setRoleRoutes')
      next({...to, replace: true})
    }
    if (to.path == '/login') {
      next({ path: from.path })
    } else {
      next()
    }
  }
})

router.afterEach((to, from, next) => {
  Nprogress.done()
})