<template>
  <div class="wrapper">
    <!-- 粒子动画 区域  -->
    <vue-particles
      color="#555"
      :particleOpacity="0.7"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="4"
      linesColor="#555"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
      class="lizi"
    />
    <div class="container">
      <Header />
      <div class="router__view">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f2f2f2;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
.lizi {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
/* active */
.show {
  display: block;
}
.hide {
  left: 0px !important;
  transition: all 0.5s;
}
.container {
  width: 100%;
  height: 100%;
}
.container .router__view {
  margin: 96px auto 20px;
}
.container .router__view .article__list,
.container .router__view .category,
.container .router__view .archive,
.container .router__view .leave__message,
.container .router__view .article__detail {
  width: 1140px;
  position: relative;
  z-index: 1;
  padding: 10px;
}
/* 响应式 */
/**  pc **/
@media only screen and (min-width: 1160px) and (max-width: 1920px) {
  /* 正常pc宽度 */
}
@media only screen and (min-width: 1025px) and (max-width: 1159px) {
  .container .router__view .article__list,
  .container .router__view .category,
  .container .router__view .archive,
  .container .router__view .leave__message,
  .container .router__view .article__detail {
    width: 100% !important;
  }
}
/** iPad **/
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container .router__view .article__list,
  .container .router__view .category,
  .container .router__view .archive,
  .container .router__view .leave__message,
  .container .router__view .article__detail {
    width: calc(100% - 20px) !important;
  }
}
/** iPhone **/
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .container .header {
    height: 80px !important;
    line-height: 80px !important;
  }
  .container .header .logo {
    margin-left: 30px;
  }
  .container .header ul {
    display: none;
  }
  .container .header .icon_menu {
    display: block;
  }
  .container .router__view .article__list,
  .container .router__view .category,
  .container .router__view .archive,
  .container .router__view .leave__message,
  .container .router__view .article__detail {
    width: calc(100% - 20px) !important;
  }
  .container .router__view {
    margin-top: 100px;
  }
  .container .router__view .article__list {
    display: flex;
    flex-direction: column !important;
  }
  .container .router__view .article__list .lists {
    width: 100% !important;
    background-color: #ffffff70;
  }
  .container .router__view .article__list .lists .item {
    display: flex;
    flex-direction: column !important;
    padding-bottom: 10px;
    margin-bottom: 40px;
    box-shadow: 0px 2px 0px #ccc;
  }
  .container .router__view .article__list .lists .item .img {
    width: 100% !important;
    height: 120px;
    border-top-right-radius: 10px !important;
    border-right: none !important;
  }
  .container .router__view .article__list .lists .item .img img {
    width: 100% !important;
    height: 120px;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    border-bottom-left-radius: 0px !important;
  }
  .container .router__view .article__list .sidebar {
    width: 100% !important;
    margin-top: 20px;
    background-color: #ffffff70;
  }
  /* category */
  .container .router__view .category .cards {
    display: flex;
    flex-direction: column !important;
    margin: 0 !important;
  }
  .container .router__view .category .cards .item {
    width: 100% !important;
    height: 380px;
    margin: 0 !important;
    margin-bottom: 20px !important;
  }
  .container .router__view .category .cards .item .card_img img {
    height: 200px;
  }
  /* leave__messages */
  .container .router__view .leave__message {
    display: flex;
    flex-direction: column !important;
  }
  .container .router__view .leave__message .website-leave,
  .container .router__view .leave__message .sidebar {
    width: 100% !important;
    margin-bottom: 20px;
  }
  .container
    .router__view
    .leave__message
    .website-leave
    .leave-form
    .input-group {
    flex-direction: column !important;
  }
  .container
    .router__view
    .leave__message
    .website-leave
    .leave-form
    .input-group
    .nickname,
  .container
    .router__view
    .leave__message
    .website-leave
    .leave-form
    .input-group
    .email {
    width: 100% !important;

    margin-bottom: 20px;
  }
  .container
    .router__view
    .leave__message
    .website-leave
    .leave-form
    .input-group
    .nickname
    input,
  .container
    .router__view
    .leave__message
    .website-leave
    .leave-form
    .input-group
    .email
    input {
    height: 40px !important;
  }
  /* .container .router__view .archive */
  .container .router__view .archive {
    flex-direction: column !important;
  }
  .container .router__view .archive ul.timeline-wrapper {
    width: calc(100% - 10px) !important;
    margin-bottom: 20px;
  }
  .container .router__view .archive .sidebar {
    width: 100% !important;
  }
  /* .container .router__view .article__detail */
  .container .router__view .article__detail {
    flex-direction: column !important;
  }
  .container .router__view .article__detail .article {
    width: calc(100% - 20px) !important;
    margin-bottom: 20px;
  }
  .container .router__view .article__detail .sidebar {
    width: 100% !important;
  }
}
</style>
