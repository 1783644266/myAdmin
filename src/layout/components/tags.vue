<template>
  <div class="wrapper">
    <el-scrollbar>
      <el-tag
        v-for="route in routeList" :key="route.name"
        closable
        :effect="route.name != activeRoute.name? 'plain':'light'"
        @click="tagClick(route)"
        @close="tagClose(route)"
      >
        {{ route.name }}
      </el-tag>
    </el-scrollbar>
  </div>
</template>

<script >
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['routeList', 'activeRoute'])
  },
  methods: {
    tagClick(route) {
      const { name } = route
      if (name == this.$route.name) return
      this.$store.commit('m_setActiveRoute', route)
      this.$router.replace({ name })
    },
    tagClose(route) {
      const { routeList } = this
      const { name } = route
      const oldIndex = routeList.findIndex(e => e.name == name)
      this.$store.dispatch('a_deleteRoute', oldIndex).then( res => {
        if (res.name == this.$route.name) return
        this.$router.replace({ name: res.name })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper::v-deep {
  background-color: white;
  white-space: nowrap;
  height: 56px;
  .el-tag {
    margin: 9px 10px 15px;
  }
  .el-scrollbar__wrap {
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 110%;
  }
}

</style>