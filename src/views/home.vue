<template>
  <div class="home">
    <router-link to="/">go to home</router-link>
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
}
</style>
