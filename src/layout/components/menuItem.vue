<template>
  <div class="wrapper" v-if="!menuList.hidden">
    <el-menu-item
      v-if="!menuList.children || (menuList.children.length == 1)" 
      :index="resolveIndex(menuList)"
      @click.native="pushRouter(menuList)"
    >
      <i class="el-icon-location"></i>
      <span>{{menuList.children? menuList.children[0].meta.title : menuList.meta.title}}</span>
    </el-menu-item>

    <el-submenu v-else :index="resolveIndex(menuList)">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{menuList.meta.title}}</span>
      </template>
      <menuItem v-for="item in menuList.children" :key="item.index" :menuList="item" />
    </el-submenu>
  </div>
</template>

<script >

export default {
  name: 'menuItem',
  props: {
    menuList: Object
  },
  methods: {
    pushRouter(menuList) {
      const route = menuList.children ? menuList.children[0] : menuList
      this.$store.commit('m_setActiveRoute', route)
      const { name } = route
      if (name == this.$route.name) return
      this.$router.push({ name })
    }, // 去其他路由
    resolveIndex(menuList) {
      const child = menuList.children
      return (!child || child.length > 1) ? menuList.name : menuList.children[0].name
    }
  }
}
</script>

<style lang='scss' scoped>

</style>