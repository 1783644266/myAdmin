<template>
  <div class="wrapper">
    <div style="font-size: 20px;">当前角色:{{$store.state.role}}</div>
    <el-button style="margin:15px;" type="primary" @click="toggleRole">切换角色</el-button>
    <div :key="key"> 
      <!-- 这里需要加key，,每次切换角色，都会重新创建外层div,防止元素复用导致el.parentNode为null -->
      <div v-permission="['admin']" class="role">admin</div>
      <div v-permission="['editor']" class="role">editor</div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      roleList: [],
      key: 0
    }
  },
  methods: {
    toggleRole() {
      this.$store.state.role == 'admin' ? this.$store.state.role = 'editor' : this.$store.state.role = 'admin'
      this.key++
    }
  }
}
</script>

<style lang='scss' scoped>
  .wrapper {
    padding: 10px;
    .role {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      border: 1px solid black;
      border-radius: 50%;
      background-color: gray;
    }
  }
</style>