<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./pages/ToolPage/index.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  background: #f5f5fb;
  height: 100vh;
}
body {
  margin: 0;
}
</style>
