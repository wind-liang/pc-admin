<template>
  <div class="container">
    <el-image
      class="img"
      v-for="url in urls"
      :key="url"
      :src="url"
      lazy
    ></el-image>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
  data() {
    return {
      urls: [],
    };
  },
  async created() {
    const res = await fetch("/api/getPicList");
    const resJson = await res.json();
    this.urls = resJson.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  .img {
    width: 100%;
  }
}
</style>
