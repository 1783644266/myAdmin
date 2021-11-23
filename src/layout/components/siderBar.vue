<template>
  <div class="wrapper">
    <el-scrollbar>
      <el-menu
        menu-trigger="click"
        :collapse-transition="false"
        mode="vertical"
        :collapse="isCollapse"
        :default-active="activeRoute.index"
        background-color="#D3DCE6"
      >
        <menuItem v-for="item in menuList" :key="item.index" :menuList="item" />
      </el-menu>
    </el-scrollbar>
    <el-button class="toggleCollapse" type="primary" @click="$store.commit('setIsCollapse')">
      {{ isCollapse? '展开' : '折叠'}}
    </el-button>
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
    ...mapState(['activeRoute', 'isCollapse'])
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
.wrapper::v-deep {
  height: 100%;
  background-color: #DBE6F2;
  .el-scrollbar {
    height: 92%;
    &__wrap {
      overflow-y: scroll;
      overflow-x: hidden;
      // overflow: hidden;
      .el-menu-item.is-active {
        background-color: #B0AEB0 !important;
      }
    }
  }
  .toggleCollapse {
    height: 8%;
    width: 100%;
    padding: 0 !important;
    text-align: center;
  }
  .el-menu--collapse {
    .el-submenu__icon-arrow {
      display: none;
    }
  }
}


</style>