<template>
  <div class="home">
    <router-link to="/blog">一叶知秋</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.container .router__view .home {
  width: 100%;
  height: calc(100vh - 151px);
  background-color: #ffffff90;
  font-size: 24px;
}
.container .router__view .home a {
  display: block;
  padding-top: 200px;
  margin: auto;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #ffffff10;
  position: relative;
  z-index: 1;
}
</style>
