<template>
  <div class="container">
    <el-menu :default-active="$route.name" class="el-menu-vertical" router>
      <el-menu-item
        v-for="item in menuItems"
        :index="item.name"
        :key="item.name"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  props: {},
  watch: {
    $route: {
      handler() {
        this.genreateMenus(this.$router.matcher.getRoutes());
      },
    },
  },
  data() {
    return {
      menuItems: [],
    };
  },
  methods: {
    genreateMenus(routes) {
      this.menuItems = routes
        .filter((route) => route.meta && route.meta.title)
        .map((route) => ({
          path: route.path,
          name: route.name,
          title: route.meta.title,
          icon: route.meta.icon,
        }));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-menu-vertical {
  height: 100vh;
}
</style>
