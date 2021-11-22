<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  beforeDestory() {
    console.log('destoryed');
  }
}
</script>

<style lang="scss" scoped>
 #app {
   height: 100%;
 }
</style>
