<template>
  <div class="wrapper">
    <el-menu-item v-if="!menuList.children" :index="menuList.index" @click.native="pushRouter(menuList)">
      <!-- <i class="el-icon-location" ></i> -->
      <span >{{menuList.index}}</span></el-menu-item>
    <el-submenu v-else :index="menuList.index">
      <template slot="title">
        <!-- <i class="" ></i> -->
        <span >{{menuList.index}}</span>
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
    pushRouter(route) {
      this.$store.commit('m_setActiveRoute', route)
      const { name } = route
      if (name == this.$route.name) return
      this.$store.dispatch('a_addRoute', route)
      this.$router.replace({ name })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>