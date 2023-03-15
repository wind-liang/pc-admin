<template>
  <div id="app">
    <MenuList v-if="showMenu" class="menu"></MenuList>
    <div class="content" :style="showMenu ? '' : 'margin-left:0'">
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
  computed: {
    showMenu() {
      return this.$route.path !== "/login";
    },
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
