<template>
  <div class="headerWrapper">
    <div class="leftBar">大学生校招网后台管理系统</div>
    <div class="rightBar">
      <div class="userName">
        <span
          class="left"
          @click="show"
        >{{userName}}</span>
        <div
          class="about"
          v-show="showOn"
          v-on:mouseleave="hide"
        >
          <div @click="reset">修改密码</div>
          <div @click="quit">退出</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    userName: {
      type: String,
      default: "---"
    }
  },
  data() {
    return {
      showOn: false
    };
  },
  mounted() {},
  methods: {
    show() {
      this.showOn = !this.showOn;
    },
    hide() {
      this.showOn = !this.showOn;
    },
    reset() {
      // this.$router.push("/resetPassword/reset");
    },
    quit() {
      // this.$router.push("/resetPassword/reset");
    }
  }
};
</script>

<style scoped>
.headerWrapper {
  width: 100%;
  height: 80px;
  position: relative;
  background: #7198ff;
}
.leftBar {
  width: 301px;
  height: 43px;
  position: absolute;
  left: 35px;
  top: 24px;
  font-size: 26px;
}
.rightBar {
  position: absolute;
  right: 50px;
  top: 27px;
}
.userName {
  display: inline-block;
  height: 40px;
  cursor: pointer;
  position: relative;
}
.userName span {
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 0 1px;
  border-bottom: 1px solid #ffffff;
}
.about {
  width: 94px;
  height: 80px;
  z-index: 999;
  padding: 10px 0;
  background-color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  top: 41px;
  box-shadow: 0px 2px 8px 0px #bbbbbb;
  border-radius: 0 0 3px 3px;
}
.about div {
  width: 94px;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  text-indent: 15px;
  color: #999999;
}
.about div:hover {
  background-color: #cccccc;
}
</style>
