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
  display: none;
}
.container {
  width: 100%;
  height: 100%;
}
.container .router__view {
  margin: 76px auto 20px;
}
.container .router__view .article__list,
.container .router__view .category,
.container .router__view .archive,
.container .router__view .leave__message {
  position: relative;
  z-index: 1;
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
  .container .router__view .leave__message {
    width: 100% !important;
  }
}
/** iPad **/
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container .router__view .article__list,
  .container .router__view .category,
  .container .router__view .archive,
  .container .router__view .leave__message {
    width: 100% !important;
  }
}
/** iPhone **/
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .container .header ul {
    display: none;
  }
  .container .header .icon_menu {
    display: block;
  }
  .container .router__view .article__list,
  .container .router__view .category,
  .container .router__view .archive,
  .container .router__view .leave__message {
    width: 100% !important;
  }
}
</style>
