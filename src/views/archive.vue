<template>
  <div class="archive">
    <ul class="timeline-wrapper">
      <li class="timeline-item" v-for="t in timelineList" :key="t.id">
        <div class="timeline-box">
          <div class="out-circle">
            <div class="in-circle"></div>
          </div>
          <div class="long-line"></div>
        </div>
        <div class="timeline-content">
          <div class="timeline-date">
            <i class="fa fa-wpforms" style="margin-right:10px"></i>{{ t.date }}
          </div>
          <div class="timeline-title">
            <i class="fa fa-toggle-up" style="margin-right:10px"></i
            >{{ t.title }}
          </div>
          <div class="timeline-desc">
            <i class="fa fa-file-text" style="margin-right:10px"></i
            >{{ t.content }}
          </div>
        </div>
      </li>
    </ul>
    <div class="sidebar">
      <ul class="tags">
        <h3>标签云</h3>
        <li v-for="tag in tagData" :key="tag">
          <router-link to="/blog">{{ tag }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: "Archive",
  data() {
    return {
      timelineList: [
        {
          date: "2020/12/12",
          title: "001",
          content: "....content",
        },
        {
          date: "2020/12/12",
          title: "001",
          content: "....content",
        },
        {
          date: "2020/12/12",
          title: "001",
          content: "....content",
        },
      ],
      tagData: [
        "vue",
        "react",
        "kali",
        "linux",
        "web",
        "html5",
        "less",
        "sass",
        "vue",
        "react",
        "kali",
        "linux",
        "web",
        "html5",
        "less",
        "sass",
        "vue",
        "react",
        "kali",
        "linux",
        "web",
        "html5",
        "less",
        "sass",
        "vue",
        "react",
        "kali",
        "linux",
        "web",
        "html5",
        "less",
        "sass",
      ],
    };
  },
};
</script>

<style>
.container .router__view .archive {
  min-height: 600px;
  margin: 0 auto;
  display: flex;
}
ul.timeline-wrapper {
  list-style: none;
  padding: 20px 0;
  padding-left: 10px;
  width: 790px;
  margin-right: 20px;
  background-color: #ffffff90;
}

/* 时间线 */
.timeline-item {
  position: relative;
}

.timeline-box {
  text-align: center;
  position: absolute;
}

.out-circle {
  width: 16px;
  height: 16px;
  background: rgba(14, 116, 218, 0.1);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  /*opacity: 0.1;*/
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.in-circle {
  width: 8px;
  height: 8px;
  margin: 0 auto;
  background: rgba(14, 116, 218, 1);
  border-radius: 50%;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
}

.long-line {
  width: 2px;
  height: 98px;
  background: rgba(14, 116, 218, 1);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  opacity: 0.1;
  margin-left: 8px;
}

.timeline-content {
  box-sizing: border-box;
  margin-left: 20px;
  height: 106px;
  padding: 0 0 0 20px;
  text-align: left;
  margin-bottom: 30px;
}
.timeline-title {
  font-size: 14px;
  word-break: break-all;
  margin-bottom: 16px;
  color: #333;
  font-weight: 500;
  /*display: inline;*/
}

.timeline-date {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin-bottom: 16px;
}
.timeline-desc {
  font-size: 14px;
  color: #999999;
}

.timeline-item:last-of-type .timeline-content {
  margin-bottom: 0;
}
/* .container .router__view .archive .sidebar */
.container .router__view .archive .sidebar {
  width: 320px;
}
.container .router__view .archive .sidebar .tags {
  padding: 10px;
  background-color: #ffffff90;
}
.container .router__view .archive .sidebar .tags h3 {
  font-weight: 400;
  margin-bottom: 10px;
  padding-left: 10px;
}
.container .router__view .archive .sidebar .tags li {
  display: inline-block;
  overflow: hidden;
  margin: 10px;
}
.container .router__view .archive .sidebar .tags li a {
  color: #999;
  font-size: 15px;
}
.container .router__view .archive .sidebar .tags li a:hover {
  color: #abcddd;
}
</style>
