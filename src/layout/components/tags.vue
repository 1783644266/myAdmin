<template>
  <div class="tags">
    <el-scrollbar ref="scrollbar" @scroll="hiddenMenu">
      <el-tag
        v-for="route in routeList" :key="route.name"
        :closable="route.name != 'doashBoard'"
        :effect="route.name != activeRoute.name? 'plain':'light'"
        @click="tagClick(route)"
        @close="tagClose(route)"
        @contextmenu.prevent.native="openMenu(route, $event)"
      >
        {{ route.name }}
      </el-tag>
    </el-scrollbar>
    <div v-show="showTagsMenu" class="tagsMenu"
      :style="{top: top + 'px', left: left + 'px'}"
    >
      <!-- <span @click="refresh">刷新</span> -->
      <span @click="colseAll">关闭所有</span>
      <span @click="colseOther">关闭其他</span>
      <span @click="colseCurrent">关闭当前</span>
    </div>
  </div>
</template>

<script >
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['routeList', 'activeRoute'])
  },
  data() {
    return {
      showTagsMenu: false,
      currentTag: {},
      scrollTop: 0,
      scrollLeft: 0,
      top: 0,
      left: 0
    }
  },
  watch: {
    showTagsMenu(val) {
      if (val) {
        document.addEventListener('click', this.hiddenMenu)
      } else {
        document.removeEventListener('click', this.hiddenMenu)
        this.currentTag = {}
      }
    }, // 当菜单显示监听鼠标点击时间，隐藏时移除监听
    $route: {
      handler() {
        this.addTag()
      },
      immediate: true
    }
  },
  mounted() {
    if (this.$store.state.routeList[0].name != 'doashBoard') {
      this.$store.state.routeList.unshift({
        name: 'doashBoard'
      })
    }
    const { top, left } = this.$refs.scrollbar.$el.getBoundingClientRect()
    this.scrollTop = top
    this.scrollLeft = left
  },
  methods: {
    addTag() {
      const { $route } = this
      console.log($route);
      if ($route.name) {
        this.$store.dispatch('a_addRoute', $route)
      }
    },
    tagClick(route) {
      const { name } = route
      if (name == this.$route.name) return
      this.$store.commit('m_setActiveRoute', route)
      this.$router.push({ name })
    },
    tagClose(route) {
      const { routeList } = this
      const { name } = route
      const oldIndex = routeList.findIndex(e => e.name == name)
      this.$store.dispatch('a_deleteRoute', {oldIndex, name}).then( res => {
        if (!res || res.name == this.$route.name) return
        this.$router.push(res)
      })
    },
    openMenu(route, e) {
      this.top = e.pageY - this.scrollTop
      this.left = e.pageX - this.scrollLeft
      this.showTagsMenu = true
      this.currentTag = route
    }, // 展示菜单
    hiddenMenu() {
      this.showTagsMenu = false
    },
    refresh() {

    },
    async colseAll() {
      const route = await this.$store.dispatch('a_colseAll')
      if (this.$route.name == 'doashBoard') return
      this.$router.replace(route)
    },
    colseOther() {
      const { currentTag } = this
      this.$store.commit('m_colseOther', currentTag)
      if (this.$route.name != currentTag.name) {
        this.$router.replace(currentTag)
        this.$store.commit('m_setActiveRoute', currentTag)
      }
    },
    colseCurrent() {
      const { currentTag } = this
      if (currentTag.name == 'doashBoard') return
      this.tagClose(currentTag)
    }
  }
}
</script>

<style lang='scss' scoped>
.tags::v-deep {
  background-color: white;
  position: relative;
  white-space: nowrap;
  height: 56px;
  .el-tag {
    margin: 9px 10px 15px;
    cursor: pointer;
  }
  .el-scrollbar__wrap {
    overflow: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 110%;
  }
  .tagsMenu {
    width: 100px;
    height: 100px;
    padding: 10px 0;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba($color: #000000, $alpha: .5);
    display: flex;
    background-color: #FFFFFF;
    flex-direction: column;
    position: absolute;
    span {
      display: flex;
      flex: 1;
      padding-left: 15px;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      &:hover {
        background-color: rgba($color: #000000, $alpha: .5);
      }
    }
  }
}
</style>