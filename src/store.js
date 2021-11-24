import Vue from 'vue'
import Vuex from 'vuex'
import router, { staticRoutes, asyncRoutes, resetRouter } from './router'
Vue.use(Vuex)

const state = {
  routeList: [], // 已访问的路由
  userRoutes: staticRoutes, // 用户权限路由
  roleRoute: [], // 用户权限路由
  activeRoute: {},
  isCollapse: false, // 菜单收缩
  role: JSON.parse(sessionStorage.getItem('role')) || ''
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
    }, // 设置激活路由
    setIsCollapse(state) {
      state.isCollapse = !state.isCollapse
    }, // 设置菜单收缩
    m_colseAll(state) {
      state.routeList = [state.routeList.shift()]
    },
    m_colseOther(state, currentTag) {
      state.routeList = state.routeList.filter(e => e.name == 'doashBoard' || e.name == currentTag.name)
    },
    m_setRole(state, role) {
      state.role = role
    }, // 添加用户角色
    m_setRoleRoutes(state) {
      state.roleRoute = asyncRoutes.filter(e => e.role == state.role)
      state.userRoutes = [...staticRoutes, ...state.roleRoute]
      router.addRoutes(state.roleRoute)
    },
    m_logOut(state) {
      sessionStorage.removeItem('role')
      sessionStorage.removeItem('activeRoute')
      state.role = ''
      state.roleRoute = []
      state.routeList = []
      state.userRoutes = staticRoutes
      resetRouter()
    }
  },
  actions: {
    a_colseAll(ctx) {
      ctx.commit('m_colseAll')
      let route = {
        name: 'doashBoard'
      }
      ctx.commit('m_setActiveRoute', route)
      return route
    },
    a_addRoute(ctx, route) {
      ctx.commit('m_addRoute', route)
      ctx.commit('m_setActiveRoute', route)
    },
    a_deleteRoute(ctx, payload) {
      ctx.commit('m_deleteRoute', payload.oldIndex)
      if (payload.name != ctx.state.activeRoute.name) return false
      let activeRoute = null
      if (payload.oldIndex <= ctx.state.routeList.length - 1) {
        activeRoute = ctx.state.routeList[payload.oldIndex]
      } else {
        activeRoute = ctx.state.routeList.length ? ctx.state.routeList[ctx.state.routeList.length - 1] : {name: 'doashBoard'}
        // 返回最后一个
      }
      ctx.commit('m_setActiveRoute', activeRoute)
      return activeRoute
    }
  }
})
