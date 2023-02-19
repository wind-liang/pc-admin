<template>
  <div class="card" @click="goUrl(src)">
    <div class="title-img">
      <img class="img" :src="pic" />
      <div class="title">{{ name }}</div>
    </div>
    <div>{{ des }}</div>
  </div>
</template>

<script>
export default {
  name: "ToolCard",
  props: {
    pic: String,
    name: String,
    des: String,
    src: String,
  },
  data() {
    return {};
  },
  methods: {
    goUrl(src) {
      window.open(src);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card {
  padding: 20px;
  border-radius: 20px;
  width: 500px;
  background: #fff;
  cursor: pointer;
  .title-img {
    display: flex;
    align-items: center;
  }
  .img {
    width: 40px;
    height: 40px;
  }
  .title {
    font-size: 16px;
    line-height: 46px;
    color: #444;
    font-weight: 500;
    padding-left: 15px;
    height: 46px;
  }
}
</style>
