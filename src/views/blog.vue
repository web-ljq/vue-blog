<template>
  <div class="article__list">
    <div class="lists">
      <div class="item" v-for="article in articleDataList" :key="article._id">
        <div class="img">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g2/M00/01/09/ChMlWl60xRSIU5DmACPr8eQq_wsAAO7iwNxPXAAI-wJ547.jpg"
            alt="img"
          />
        </div>
        <div class="article-info">
          <h2>
            <i class="fa fa-graduation-cap" aria-hidden="true"></i
            >{{ article.title }}
          </h2>
          <div class="other-info">
            <span
              ><i class="fa fa-tag" aria-hidden="true"></i
              >{{ article.tag[0] }}</span
            >
            <span
              ><i class="fa fa-calendar" aria-hidden="true"></i
              >{{ article.createdAt }}</span
            >
          </div>
          <div class="content">{{ article.content }}</div>
          <div class="btn">
            <router-link
              :to="{ path: 'article-detail', query: { id: article._id } }"
              >阅读全文</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <ul class="new-article">
        <h3>最新文章</h3>
        <div class="line"></div>
        <li v-for="item in articleDataList" :key="item._id">
          <router-link
            :to="{ path: 'article-detail', query: { id: item._id } }"
            >{{ item.title }}</router-link
          >
        </li>

        <li>. . . . . . .</li>
        <li>文章：{{ articleDataList.length }}</li>
      </ul>
    </div>
    <!--  -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Blog",
  data() {
    return {
      articleDataList: [],
      categoryVal: this.$route.query.category,
      tagVal: "",
    };
  },
  // this.$route.query.category
  methods: {
    getArticleList: function() {
      axios
        .get("/api/articleList")
        .then((res) => {
          this.articleDataList = res.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getArticleList();
    console.log(this.categoryVal);
  },
};
</script>

<style>
.container .router__view .article__list {
  min-height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.container .router__view .article__list .lists {
  width: 800px;
  margin-right: 20px;
}
.container .router__view .article__list .lists .item {
  display: flex;
  flex-direction: row;
  background-color: #ffffff70;
  border-radius: 10px;
  margin-bottom: 40px;
}
.container .router__view .article__list .lists .item .img {
  width: 220px;
  height: 220px;
  margin-right: 20px;
  border-right: 1px solid #999;
}
.container .router__view .article__list .lists .item .img img {
  /* width: 220px; */
  height: 220px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.container .router__view .article__list .lists .item .article-info {
  width: 100%;
  padding: 10px 0;
}
.container .router__view .article__list .lists .item .article-info h2 {
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  font-weight: 400;
  padding: 0 10px;
}
.container .router__view .article__list .lists .item .article-info h2 i {
  font-size: 23px;
  font-weight: 400;
  margin-right: 10px;
}
.container .router__view .article__list .lists .item .article-info .other-info {
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 300;
}
.container
  .router__view
  .article__list
  .lists
  .item
  .article-info
  .other-info
  span {
  margin-right: 30px;
}
.container
  .router__view
  .article__list
  .lists
  .item
  .article-info
  .other-info
  i {
  margin-right: 10px;
}
.container .router__view .article__list .lists .item .article-info .content {
  height: 80px;
  font-size: 15px;
  padding: 10px;
  line-height: 18px;
  color: #000;
  overflow: hidden;
}
.container .router__view .article__list .lists .item .article-info .btn {
  color: #666;
  text-align: right;
  font-size: 15px;
  font-weight: 400;
  padding-right: 20px;
}
.container
  .router__view
  .article__list
  .lists
  .item
  .article-info
  .btn
  a:hover {
  color: #abcdef;
}
.container .router__view .article__list .sidebar {
  width: 320px;
  border-radius: 10px;
}
.container .router__view .article__list .sidebar .new-article {
  padding: 15px 10px 40px 10px;
  background-color: #ffffff70;
}
.container .router__view .article__list .sidebar .new-article h3 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
}
.container .router__view .article__list .sidebar .new-article .line {
  width: 100%;
  height: 1px;
  background-color: #000;
  position: relative;
  top: -34px;
}
.container .router__view .article__list .sidebar .new-article li {
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 0.1rem;
  padding: 5px 20px;
  font-size: 17px;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
}
.container .router__view .article__list .sidebar .new-article li a {
  color: #777;
}
.container .router__view .article__list .sidebar .new-article li a:hover {
  color: #abcdef;
}
</style>
