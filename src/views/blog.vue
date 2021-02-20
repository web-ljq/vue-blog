<template>
  <div class="article__list">
    <div class="lists">
      <div class="item">
        <div class="img">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g2/M00/01/09/ChMlWl60xRSIU5DmACPr8eQq_wsAAO7iwNxPXAAI-wJ547.jpg"
            alt="img"
          />
        </div>
        <div class="article-info">
          <h2><i class="fa fa-graduation-cap" aria-hidden="true"></i>title</h2>
          <div class="other-info">
            <span><i class="fa fa-tag" aria-hidden="true"></i>tag</span>
            <span
              ><i class="fa fa-calendar" aria-hidden="true"></i>2020/12/12</span
            >
          </div>
          <div class="content">content</div>
          <div class="btn">
            <router-link to="/article-detail">阅读全文</router-link>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g5/M00/0B/00/ChMkJ1wcj_6ISkhqAAzaH0nSsBQAAt6JQGN1IUADNo3218.jpg"
            alt="img"
          />
        </div>
        <div class="article-info">
          <h2><i class="fa fa-graduation-cap" aria-hidden="true"></i>title</h2>
          <div class="other-info">
            <span><i class="fa fa-tag" aria-hidden="true"></i>tag</span>
            <span
              ><i class="fa fa-calendar" aria-hidden="true"></i>2020/12/12</span
            >
          </div>
          <div class="content">content</div>
          <div class="btn">
            <router-link to="/article-detail">阅读全文</router-link>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g5/M00/0B/00/ChMkJ1wcln2IIJv6AAvGcrDkD_cAAt6LAOpZWoAC8aK414.jpg"
            alt="img"
          />
        </div>
        <div class="article-info">
          <h2><i class="fa fa-graduation-cap" aria-hidden="true"></i>title</h2>
          <div class="other-info">
            <span><i class="fa fa-tag" aria-hidden="true"></i>tag</span>
            <span
              ><i class="fa fa-calendar" aria-hidden="true"></i>2020/12/12</span
            >
          </div>
          <div class="content">content</div>
          <div class="btn">
            <router-link to="/article-detail">阅读全文</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar">sidebar</div>
    <!--  -->
  </div>
</template>

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
  background-color: #ffffff70;
}
</style>
