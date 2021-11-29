import store from '@/store'

export default {
  inserted(el, binding) {
    const { value } = binding
    if (store.state.role) {
      const flag = value.includes(store.state.role) // 当前角色是否有阅读的权限
      if (!flag) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  },
  update(el, binding) {
    const { value } = binding
    if (store.state.role) {
      const flag = value.includes(store.state.role) // 当前角色是否有阅读的权限
      if (!flag) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  },
}