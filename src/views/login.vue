<template>
  <div class="login-wrapper">
    <div class="login-form">
      <h1>用户登录</h1>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model.trim="form.name" placeholder="admin、editor" clearable />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="form.password" placeholder="同用户名" type="password" clearable show-password	 />
        </el-form-item>
      </el-form>
      <el-row type="flex" justify="end">
        <el-button @click="clearForm">清空</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '请填写用户名！', trigger: ['blur', 'change']}
        ],
        password: [
          {required: true, message: '请填写密码！', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    clearForm() {
      this.form = {
        name: '',
        password: ''
      }
    },
    login() {
      const { form } = this
      this.$refs.form.validate(ok => {
        if (!ok) return false
        console.log(form);
        if (['admin', 'editor'].indexOf(form.name) == -1) return this.$message.error('信息错误，请重输！')
        this.$store.commit('m_setRole', form.name)
        sessionStorage.setItem('role', JSON.stringify(form.name))
        this.$router.push({ name: 'doashBoard' }).catch(e => {})
      })
      
    }
  }
}
</script>

<style lang='scss' scoped>
  .login-wrapper {
    height: 100%;
    background-color: #B3C0D1;
    overflow: hidden;
    .login-form {
      width: 500px;
      height: 400px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha:.5);
      margin: 200px auto;
      padding: 30px;
      text-align: center;
      .el-form {
        &-item {
          margin: 50px 0;
        }
      }
    }
  }
</style>
