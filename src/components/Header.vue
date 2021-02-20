<template>
  <div class="header">
    <div class="logo">logo</div>
    <ul>
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/blog">博客</router-link>
      </li>
      <li>
        <router-link to="/category">分类</router-link>
      </li>
      <li>
        <router-link to="/archive">归档</router-link>
      </li>
      <li>
        <router-link to="/leave-message">留言</router-link>
      </li>
    </ul>
    <!-- iphone -->
    <div class="icon_menu">
      <i class="fa fa-bars" style="font-size:24px;" @click="onChangeHide"></i>
    </div>
    <div :class="{ hide: isHide, side_menu: true }">
      <i class="fa fa-remove" @click="onChangeHide"></i>
      <div class="side_menu_item" @click="onChangeHide">
        <i class="fa fa-home"></i><router-link to="/">主页</router-link>
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <i class="fa fa-book"></i><router-link to="/blog">博客</router-link>
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <i class="fa fa-tasks"></i
        ><router-link to="/category">分类</router-link>
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <i class="fa fa-archive"></i
        ><router-link to="/archive">归档</router-link>
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <i class="fa fa-inbox"></i
        ><router-link to="/leave-message">留言</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isHide: false,
    };
  },
  methods: {
    onChangeHide: function() {
      this.isHide = !this.isHide;
    },
  },
};
</script>

<style>
.container .header {
  width: 100%;
  height: 55px;
  line-height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #ffffff90;
  border-bottom: 1px solid #abcdef;
}
.container .header .logo {
  width: 150px;
  float: left;
  margin-left: 80px;
}
.container .header ul {
  float: right;
  font-size: 17px;
  margin-right: 50px;
}
.container .header ul li {
  float: left;
  margin-right: 30px;
}
.container .header ul li a:hover {
  color: #abcdef;
}
/* iphone */
.container .header .icon_menu {
  position: absolute;
  z-index: 2;
  right: 30px;
  display: none;
}
.container .header .side_menu {
  position: absolute;
  top: 0px;
  left: -220px;
  z-index: 2;
  width: 220px;
  height: 100vh;
  overflow: hidden;
  padding-top: 56px;
  background-color: #fff;
  transition: all 0.5s;
}
.container .header .side_menu .fa-remove {
  font-size: 24px;
  position: absolute;
  top: 15.5px;
  right: 15.5px;
}
.container .header .side_menu .side_menu_item {
  font-size: 18px;
  height: 40px;
}
.container .header .side_menu .side_menu_item i {
  margin-left: 30px;
  margin-right: 10px;
}
</style>
