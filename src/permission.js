import router from './router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Nprogress.configure({ showSpinner: false })

router.beforeEach((to, from , next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from, next) => {
  Nprogress.done()
})