<template>
  <div class="category">
    <div class="cards">
      <div class="item" v-for="item in categoryData" :key="item.username">
        <div class="card_img">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g5/M00/04/08/ChMkJ1xFgxKIGUiwAAI8v2QDlx4AAugQwP0ohIAAjzX192.jpg"
            alt=""
          />
          <h2>{{ item.categoryNmae }}</h2>
        </div>
        <div class="card_info">
          <div class="icon">
            <span
              ><i class="fa fa-clone" aria-hidden="true"></i
              >{{ item.categoryNmae }}</span
            >
            <span
              ><i class="fa fa-user-o" aria-hidden="true"></i
              >{{ item.username }}</span
            >
          </div>
          <p>{{ item.introduction }}</p>
        </div>
      </div>
    </div>
    <!-- <router-link to="/category">category</router-link> -->
  </div>
</template>
<script>
export default {
  name: "Category",
  data() {
    return {
      categoryData: [
        {
          categoryNmae: "Vue",
          username: "ljq",
          introduction: "const vm = Vue()",
        },
        {
          categoryNmae: "Vue",
          username: "ljq",
          introduction: "const vm = Vue()",
        },
        {
          categoryNmae: "Vue",
          username: "ljq",
          introduction: "const vm = Vue()",
        },
      ],
    };
  },
};
</script>

<style>
.container .router__view .category {
  min-height: 600px;
  margin: 0 auto;
}
.container .router__view .category .cards {
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.container .router__view .category .cards .item {
  width: 300px;
  height: 380px;
  margin: 20px;
  border-radius: 10px;
  background-color: #ffffff90;
}
.container .router__view .category .cards .item:hover {
  box-shadow: 0px 1px #ccc;
}
.container .router__view .category .cards .item .card_img img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.container .router__view .category .cards .item .card_img h2 {
  position: relative;
  z-index: 10;
  top: -120px;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  height: 10px;
}
.container .router__view .category .cards .item .card_info {
  padding: 10px;
  font-size: 22px;
}
.container .router__view .category .cards .item .card_info .icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .router__view .category .cards .item .card_info span {
  width: 140px;
  text-align: center;
  color: #999;
}
.container .router__view .category .cards .item .card_info i {
  margin-right: 10px;
  color: #000;
}
.container .router__view .category .cards .item .card_info p {
  font-size: 18px;
  padding: 10px;
}
</style>
