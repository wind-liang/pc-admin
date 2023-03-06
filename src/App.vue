<template>
  <div id="app">
    <MenuList v-if="isLogin" class="menu"></MenuList>
    <div class="content" :style="isLogin ? '' : 'margin-left:0'">
      <router-view />
    </div>
  </div>
</template>
<script>
import MenuList from "./components/MenuList/index.vue";
export default {
  name: "App",
  components: {
    MenuList,
  },
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>
<style lang="less">
@menuWidth: 300px;
#app {
  .menu {
    position: fixed;
    width: @menuWidth;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .content {
    margin-left: @menuWidth;
  }
}
body {
  margin: 0;
  background: #f5f5fb;
}
</style>
