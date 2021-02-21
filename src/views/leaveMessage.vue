<template>
  <div class="leave__message">
    <div class="website-leave">
      <div class="website-info">
        <p>
          <span
            ><i class="fa fa-dribbble" style="margin-right:10px"></i
            >网站：</span
          >一叶知秋
          <span
            style="font-size:14px;color:#ccc;display:block;margin-left:22px"
          >
            ----
            有的人没见过汪洋，以为江河最为广阔，而有的人通过一片落叶，便能看到整个秋天，行万里路，才能见天地之广阔。</span
          >
        </p>
        <p>
          <span
            ><i class="fa fa-angellist" style="margin-right:10px"></i
            >建站目的：</span
          >学习前端技术并实现，提高写作能力，培养良好习惯。
        </p>
        <p>
          <span
            ><i class="fa fa-dropbox" style="margin-right:10px"></i
            >有所收获：</span
          >扩展了知识面，找到了自己的不足。
        </p>
      </div>
      <div class="leave-form">
        <p>于网络中相遇，便留下些足迹吧。</p>
        <textarea placeholder="留言内容..." />
        <div class="input-group">
          <div class="nickname">
            <input placeholder="昵称..." name="nickname" type="text" />
          </div>
          <div class="email">
            <input placeholder="邮箱..." name="email" type="email" />
          </div>
        </div>
        <div class="btn">发表留言</div>
      </div>
      <div class="leave-message-list">
        <ul>
          <li>
            <div>
              <h3>
                <i class="fa fa-user-o" style="margin-right:10px"></i>nickname
              </h3>
              <span>
                <i class="fa fa-wpforms" style="margin-right:10px"></i
                >2020/12/12
              </span>
            </div>
            <p>
              留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....
            </p>
          </li>
          <li>
            <div>
              <h3>
                <i class="fa fa-user-o" style="margin-right:10px"></i>nickname
              </h3>
              <span>
                <i class="fa fa-wpforms" style="margin-right:10px"></i
                >2020/12/12
              </span>
            </div>
            <p>
              留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....
            </p>
          </li>
          <li>
            <div>
              <h3>
                <i class="fa fa-user-o" style="margin-right:10px"></i>nickname
              </h3>
              <span>
                <i class="fa fa-wpforms" style="margin-right:10px"></i
                >2020/12/12
              </span>
            </div>
            <p>
              留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....留言板内容....
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar">
      <div class="avatar">
        <div class="avatar-img">
          <img
            src="https://th.bing.com/th/id/R34bda7f88a9f6e17d4a2894e9efbf6f1?rik=zGajTHGgQ%2fnODw&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20191108%2f9767bd5e82264b539972a139b4d544f9.jpeg&ehk=v3DNN6pKlUqXd3RhNo1mQliM2yDdBTM0%2bntiA842xEs%3d&risl=&pid=ImgRaw"
            alt="avatar-img"
          />
          <span
            ><i class="fa fa-user-o" style="margin-right:10px"></i
            >姓名：李劲强</span
          >
          <span
            ><i class="fa fa-wpforms" style="margin-right:10px"></i
            >性别：男</span
          >
        </div>
        <div class="link">
          <div>
            <i class="fa fa-qq" aria-hidden="true"></i>
            <span>qq</span>
          </div>
          <div style="margin:0 40px">
            <i class="fa fa-weixin" aria-hidden="true"></i>
            <span>wechat</span>
          </div>
          <div>
            <i class="fa fa-github" aria-hidden="true"></i>
            <span>Github</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container .router__view .leave__message {
  min-height: 600px;
  margin: 0 auto;
  display: flex;
}
.container .router__view .leave__message .website-leave {
  width: 800px;
  margin-right: 20px;
}
.container .router__view .leave__message .website-leave .website-info {
  padding: 10px;
  margin-bottom: 20px;
  background-color: #ffffff90;
}
.container .router__view .leave__message .website-leave .website-info p {
  padding: 10px;
}
.container .router__view .leave__message .website-leave .website-info p span {
  line-height: 26px;
}
.container .router__view .leave__message .website-leave .leave-form {
  margin-bottom: 20px;
  background-color: #ffffff90;
  padding: 10px;
}
.container .router__view .leave__message .website-leave .leave-form p {
  font-size: 17px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.container .router__view .leave__message .website-leave .leave-form textarea {
  width: calc(100% - 40px);
  min-height: 161px;
  max-width: 780px;
  padding: 19px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2rem;
  border-radius: 4px;
}
.container
  .router__view
  .leave__message
  .website-leave
  .leave-form
  .input-group {
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
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
  width: 50%;
}
.container
  .router__view
  .leave__message
  .website-leave
  .leave-form
  .input-group
  input {
  width: calc(100% - 12px);
  height: 30px;
  font-size: 17px;
  padding-left: 10px;
  border: 1px solid #ddd;
  letter-spacing: 0.2rem;
  border-radius: 4px;
}
.container
  .router__view
  .leave__message
  .website-leave
  .leave-form
  .input-group
  .nickname {
  margin-right: 20px;
}
.container .router__view .leave__message .website-leave .leave-form .btn {
  padding: 10px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.2rem;
  background-color: #ffffff90;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.container .router__view .leave__message .website-leave .leave-form .btn:hover {
  box-shadow: 0px 1px 0px #ddd;
}
.container .router__view .leave__message .leave-message-list {
  background-color: #ffffff90;
  padding: 10px;
}
.container .router__view .leave__message .leave-message-list ul li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin-bottom: 20px;
}
.container .router__view .leave__message .leave-message-list ul li div {
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-bottom: 20px;
  font-size: 14px;
}
.container .router__view .leave__message .leave-message-list ul li div h3 {
  margin-right: 20px;
}
.container .router__view .leave__message .leave-message-list ul li span {
  font-size: 12px;
  color: #888;
  line-height: 33px;
}
.container .router__view .leave__message .leave-message-list ul li p {
  padding: 10px;
  font-size: 13px;
  color: #777;
  letter-spacing: 0.1rem;
  line-height: 18px;
}
.container .router__view .leave__message .sidebar {
  width: 320px;
}
.container .router__view .leave__message .sidebar .avatar {
  background-color: #ffffff90;
}
.container .router__view .leave__message .sidebar .avatar .avatar-img {
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.container .router__view .leave__message .sidebar .avatar .avatar-img img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.container .router__view .leave__message .sidebar .avatar .avatar-img i {
  margin-bottom: 10px;
}
.container .router__view .leave__message .sidebar .avatar .link {
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
}
.container .router__view .leave__message .sidebar .avatar .link div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
