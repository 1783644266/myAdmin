<template>
  <div class="wrapper">
    <el-scrollbar>
      <el-menu
        menu-trigger="click"
        :collapse-transition="false"
        mode="vertical"
        :default-active="activeRoute.index"
        background-color="#D3DCE6"
      >
        <menuItem v-for="item in menuList" :key="item.index" :menuList="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script >
import menuItem from './menuItem'
import { mapState } from 'vuex'
export default {
  components: {
    menuItem
  },
  computed: {
    ...mapState(['activeRoute'])
  },
  data() {
    return {
      menuList: [
        {
          index: '1',
          name: 'one',
          children: [
            {
              index: '1-1',
              name: 'oneone',
            }
          ]
        },
        {
          index: '2',
          name: 'two',
        },
        {
          index: '3',
          name: 'three',
        },
        {
          index: '4',
          name: 'four',
        },
        {
          index: '5',
          name: 'five',
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  height: 100%;
}
.el-scrollbar {
  height: 100%;
}
::v-deep .el-scrollbar__wrap {
    overflow: scroll;
    width: 110%;
    height: 110%;
}
</style>