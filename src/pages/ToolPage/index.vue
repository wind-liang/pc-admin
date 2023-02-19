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
      cardList: [
        {
          name: "mdnice",
          des: "markdown格式转公众号文章",
          pic: "https://windliangblog.oss-cn-beijing.aliyuncs.com/%E4%B8%8B%E8%BD%BD.svg",
          src: "https://mdnice.com/",
        },
        {
          name: "",
          des: "将双引号进行自动转义，压缩空格等",
          pic: "https://windliangblog.oss-cn-beijing.aliyuncs.com/image-20230216070231187.png",
          src: "http://www.lzltool.com/Escape/JsonEscape",
        },
        {
          name: "移除图片背景",
          des: "自动将图片的背景移除",
          pic: "https://windliangblog.oss-cn-beijing.aliyuncs.com/image-20230216082435904.png",
          src: "https://www.remove.bg/",
        },
        {
          name: "英语单词发音",
          des: "查询某个单词在 YouTube 全网的视频，并且自动切到相应位置",
          pic: "https://windliangblog.oss-cn-beijing.aliyuncs.com/brandyg.png",
          src: "https://youglish.com/",
        },
      ],
    };
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
