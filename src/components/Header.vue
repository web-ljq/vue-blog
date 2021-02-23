<template>
  <div class="header">
    <div class="logo">
      <img
        src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0E/ChMkJ1bKwbyILdBAAAkzcOBaOX0AALGdAExBCMACTOI648.jpg"
        alt=""
      />
      <a href="http://www.fleeting-time.com:3006/home/articleList">一叶知秋</a>
    </div>
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
        <router-link to="/"><i class="fa fa-home"></i>主页</router-link>
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <router-link to="/blog"><i class="fa fa-book"></i>博客</router-link>
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <router-link to="/category"
          ><i class="fa fa-tasks"></i>分类</router-link
        >
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <router-link to="/archive"
          ><i class="fa fa-archive"></i>归档</router-link
        >
      </div>
      <div class="side_menu_item" @click="onChangeHide">
        <router-link to="/leave-message"
          ><i class="fa fa-inbox"></i>留言</router-link
        >
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
  border-bottom: 1px solid #ddd;
}
.container .header .logo {
  width: 150px;
  float: left;
  margin-left: 80px;
}
.container .header .logo {
  display: flex;
  align-items: center;
}
.container .header .logo img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 15px;
}
.container .header .logo a {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.1rem;
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
}
.container .header .side_menu .side_menu_item a {
  display: inline-block;
  width: calc(100% - 55px);
  height: 100%;
  padding-left: 55px;
}
.container .header .side_menu .side_menu_item i {
  margin-right: 15px;
}
</style>
