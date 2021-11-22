<template>
  <el-container class="wrapper">
    <el-header>Header</el-header>
    <el-container style="overflow: hidden;">
      <el-aside width="250px">
        <siderBar/>
      </el-aside>
      <el-main>
        <tags/>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script >
import siderBar from './components/siderBar'
import tags from './components/tags'
export default {
  components: {
    siderBar,
    tags
  },
  data() {
    return {

    }
  },
}
</script>

<style lang='scss' scoped>
.wrapper ::v-deep {
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    height: 90px !important;
    line-height: 90px !important;
  }
    
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0 !important;
  }
}
.el-container.is-vertical {
    height: 100%;
}
</style>