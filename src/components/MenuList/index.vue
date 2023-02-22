<template>
  <div class="container">
    <el-menu
      default-active="/"
      class="el-menu-vertical"
      @select="handSelect"
    >
      <el-menu-item index="/">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">画廊</span>
      </el-menu-item>
      <el-menu-item index="/tool" >
        <i class="el-icon-suitcase-1"></i>
        <span slot="title">工具导航</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  props: {},
  methods: {
    handSelect(path) {
        this.$router.push(path)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-menu-vertical {
    height: 100vh;
}
</style>
