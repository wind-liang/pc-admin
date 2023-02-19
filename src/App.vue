<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="画廊" name="first"> <HomePage /> </el-tab-pane>
      <el-tab-pane label="工具导航" name="second"><ToolPage /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HomePage from "./pages/HomePage/index.vue";
import ToolPage from "./pages/ToolPage/index.vue";

export default {
  name: "App",
  components: {
    HomePage,
    ToolPage,
  },
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>

<style>
#app {
  background: #f5f5fb;
  height: 100vh;
  padding: 0 100px;
}
body {
  margin: 0;
}
</style>
