import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import'element-ui/lib/theme-chalk/index.css';

import '@/assets/normalize.scss'
import './permission'

import directive from '@/directives'

Vue.use(ElementUI)
Vue.use(directive)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
