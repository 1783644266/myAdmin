<template>
  <div class="wrapper" :class="{folded: isCollapse}">
    <header>
      <el-button style="float: right;margin-top:15px;" type="primary" @click="logOut">登出</el-button>
    </header>
    <!-- 头部 -->
    <!-- 底部 -->
    <div class="content" style="overflow: hidden;">
      <siderBar class="leftContent"/>
      <main>
        <tags/>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script >
import siderBar from './components/siderBar'
import tags from './components/tags'
import { mapState } from 'vuex'
export default {
  components: {
    siderBar,
    tags
  },
  mounted() {
    const activeRoute = JSON.parse(sessionStorage.getItem('activeRoute'))
    if (this.$route.name != 'doashBoard') {
      this.$router.push({ name: 'doashBoard'})
    }
    this.$store.dispatch('a_addRoute', { name: 'doashBoard'})
    if (activeRoute && activeRoute.name != 'doashBoard') {
      this.$router.push({ name: activeRoute.name})
      return this.$store.dispatch('a_addRoute', activeRoute)
    }
  },
  computed: {
    ...mapState(['isCollapse'])
  },
  data() {
    return {
    }
  },
  methods: {
    logOut() {
      this.$store.commit('m_logOut')
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
header{
  background-color: #B3C0D1;
  color: #333;
  height: 90px !important;
  line-height: 90px !important;
}
  
.content {
  width: 100%;
  height: calc(100% - 90px);
}
.leftContent {
  width: 250px;
  float: left;
}
main {
  width: calc(100% - 250px);
  float: left;
  height: 100%;
  background-color: #E9EEF3;
  color: #333;
  padding: 0 !important;
}

.folded {
  .leftContent {
    width: 120px;
  }
  main {
    width: calc(100% - 120px);
  }
}
</style>