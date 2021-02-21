<template>
  <div class="article__detail">
    <div class="article">
      <h3>title</h3>
      <ul class="other-info">
        <li><i class="fa fa-tag"></i><span>tag</span></li>
        <li><i class="fa fa-calendar"></i><span>2020/12/12</span></li>
        <li>
          <i class="fa fa-user-secret"></i>
          <span>ljq</span>
        </li>
      </ul>
      <div class="content">
        <h4>正文</h4>
        <div class="line"></div>
        <p class="hljs" v-html="detailData.content"></p>
      </div>
      <div class="instructions">
        <i
          class="fa fa-exclamation-circle"
          style="margin-right:5px"
          aria-hidden="true"
        ></i
        >未经作者允许不得私自转发
      </div>
      <div class="comment">
        <p>
          <i
            class="fa fa-exclamation-triangle"
            style="margin-right:5px"
            aria-hidden="true"
          ></i>
          抱歉，不支持评论
        </p>
      </div>
    </div>
    <div class="sidebar"><Sidebar /></div>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import Sidebar from "../components/Sidebar";

export default {
  name: "ArticleDetail",
  components: {
    Sidebar,
  },
  data() {
    return {
      detailData: {
        title: "001",
        content:
          "# code \n```javascript\nfunction(){\n\tconsole.log(123)\n}\n```\
          \n# code \n```javascript\nfunction(){\n\tconsole.log(123)\n}\n```",
      },
    };
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    this.detailData.content = marked(this.detailData.content);
  },
};
</script>

<style>
.container .router__view .article__detail {
  min-height: 600px;
  margin: 0 auto;
  display: flex;
}
.container .router__view .article__detail .article {
  width: 780px;
  padding: 10px;
  margin-right: 20px;
  background-color: #ffffff90;
}
.container .router__view .article__detail .article h3 {
  height: 48px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.container .router__view .article__detail .article .other-info {
  height: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
}
.container .router__view .article__detail .article .other-info li {
  margin-right: 25px;
  font-size: 15px;
  color: #777;
}
.container .router__view .article__detail .article .other-info li i {
  margin-right: 5px;
}
.container .router__view .article__detail .article .content {
  margin-bottom: 30px;
}
.container .router__view .article__detail .article .content h4 {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}
.container .router__view .article__detail .article .content .line {
  width: 100%;
  height: 1px;
  background-color: #777;
  position: relative;
  top: -10px;
}
.container .router__view .article__detail .article .content p {
  margin-top: 20px;
  padding: 10px;
}
.container .router__view .article__detail .article .instructions {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  margin-bottom: 40px;
  color: #eb2b2bda;
}
.container .router__view .article__detail .article .comment {
  text-align: center;
  color: #eb2b2bda;
}
.container .router__view .article__detail .sidebar {
  width: 320px;
}
/* --hljs-- */
pre {
  display: block;
  background-color: #f3f3f3;
  padding: 0.5rem !important;
  overflow-y: auto;
  font-weight: 300;
  font-family: Menlo, monospace;
  border-radius: 0.3rem;
}
pre {
  background-color: #283646 !important;
}
pre > code {
  border: 0px !important;
  background-color: #283646 !important;
  color: #fff;
}
code {
  display: inline-block;
  background-color: #f3f3f3;
  border: 1px solid #fdb9cc;
  border-radius: 3px;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
  color: #4f4f4f;
  margin: 0px 3px;
}
.hljs {
  background-color: #ffffff90;
}
.hljs h1,
.hljs h2,
.hljs h3 {
  margin-bottom: 20px;
}
.hljs,
.hljs-tag,
.hljs-subst {
  color: #000;
}
</style>
