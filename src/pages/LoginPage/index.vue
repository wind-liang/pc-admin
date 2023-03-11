<template>
  <div>
    <div class="background">
      <img
        src="https://windliangblog.oss-cn-beijing.aliyuncs.com/computer-1869306_1920.jpg"
      />
    </div>
    <div class="container">
      <div class="title">登录</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="0"
        class="login"
      >
        <el-form-item label="" prop="account">
          <el-input
            v-model="ruleForm.account"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async submitForm() {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },

        body: JSON.stringify({
          userName: this.ruleForm.account,
          password: this.ruleForm.password,
        }),
      });
      const resJson = await res.json();
      this.urls = resJson.data;
    },
    resetForm() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  display: flex;
  align-items: center;
  margin-top: 200px;
  flex-direction: column;
  position: relative;
  z-index: 10;
  .login {
    width: 400px;
  }
  .button {
    width: 100%;
  }
  .title {
    font-size: 30px;
    margin-bottom: 50px;
    color: #fff;
  }
}
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
