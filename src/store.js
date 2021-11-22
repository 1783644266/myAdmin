import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  routeList: [],
  activeRoute: {}
}
const activeRoute = JSON.parse(sessionStorage.getItem('activeRoute'))
if (activeRoute) {
  state.routeList.push(activeRoute)
  state.activeRoute = activeRoute
}
export default new Vuex.Store({
  state,
  mutations: {
    m_addRoute(state, route) {
      if (state.routeList.findIndex(e => e.name == route.name) != -1) return
      state.routeList.push(route)
    }, // 添加路由
    m_deleteRoute(state, index) {
      state.routeList.splice(index,1) // 减去路由
    },
    m_setActiveRoute(state, route) {
      state.activeRoute = route
      sessionStorage.setItem('activeRoute', JSON.stringify(route))
    } // 设置激活路由
  },
  actions: {
    a_addRoute(ctx, route) {
      ctx.commit('m_addRoute', route)
      ctx.commit('m_setActiveRoute', route)
    },
    a_deleteRoute(ctx, index) {
      ctx.commit('m_deleteRoute', index)
      let activeRoute = null
      if (index <= ctx.state.routeList.length - 1) {
        activeRoute = ctx.state.routeList[index]
      } else {
        activeRoute = ctx.state.routeList.length ? ctx.state.routeList[ctx.state.routeList.length - 1] : {name: 'doashBoard'}
        // 返回最后一个
      }
      ctx.commit('m_setActiveRoute', activeRoute)
      return activeRoute
    }
  }
})
