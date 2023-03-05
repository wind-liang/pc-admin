<template>
  <div class="page">
    <div class="container">
      <ToolCard
        class="card"
        v-for="item in cardList"
        :key="item.name"
        :pic="item.pic"
        :name="item.name"
        :des="item.des"
        :src="item.src"
      ></ToolCard>
    </div>
  </div>
</template>

<script>
import ToolCard from "./components/ToolCard.vue";
export default {
  name: "ToolPage",
  components: {
    ToolCard,
  },
  data() {
    return {
      cardList: [],
    };
  },
  created() {
    const query = new window.$AV.Query("Tool");
    query.find().then((tools) => {
      this.cardList = tools.map((tool) => ({
        name: tool.get("name"),
        desc: tool.get("desc"),
        src: tool.get("src"),
        pic: tool.get("pic"),
      }));
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page {
  .container {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
  }

  .card {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
