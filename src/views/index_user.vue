<template>
  <div class="layout">
    <Layout>
      <HeaderMenu></HeaderMenu>
      <Header v-if="userType == 1">
        <Menu mode="horizontal" theme="light" active-name="1" @on-select="handleSelected" width="1000px">
          <div class="layout-nav">
            <MenuItem name="home">
            <Icon type="ios-navigate" />首页
            </MenuItem>
            <MenuItem name="searchJob">
            <Icon type="md-briefcase" />行业
            </MenuItem>
            <MenuItem name="resume">
            <Icon type="ios-paper" />我的简历
            </MenuItem>
            <MenuItem name="progress">
            <Icon type="ios-analytics" />求职进展
            </MenuItem>
            <MenuItem name="collection">
            <Icon type="md-heart" />职位收藏
            </MenuItem>
            <MenuItem name="personal">
            <Icon type="ios-keypad" />个人中心
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Header v-if="userType == 2">
        <Menu mode="horizontal" theme="light" active-name="1" @on-select="handleSelected" width="1000px">
          <div class="layout-nav">
            <MenuItem name="home">
            <Icon type="ios-navigate" />首页
            </MenuItem>
            <MenuItem name="searchJob">
            <Icon type="md-briefcase" />查看简历
            </MenuItem>
            <MenuItem name="resume">
            <Icon type="ios-paper" />发布招聘
            </MenuItem>
            <MenuItem name="progress">
            <Icon type="ios-analytics" />招聘进展
            </MenuItem>
            <MenuItem name="collection">
            <Icon type="md-heart" />人才收藏
            </MenuItem>
            <MenuItem name="personal">
            <Icon type="ios-keypad" />公司信息
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Header v-if="userType == 3">
        <Menu mode="horizontal" theme="light" active-name="1" @on-select="handleSelected" width="1000px">
          <div class="layout-nav">
            <MenuItem name="home">
            <Icon type="ios-navigate" />首页
            </MenuItem>
            <MenuItem name="searchJob">
            <Icon type="md-briefcase" />行业
            </MenuItem>
            <MenuItem name="resume">
            <Icon type="ios-paper" />我的简历
            </MenuItem>
            <MenuItem name="progress">
            <Icon type="ios-analytics" />求职进展
            </MenuItem>
            <MenuItem name="collection">
            <Icon type="md-heart" />职位收藏
            </MenuItem>
            <MenuItem name="personal">
            <Icon type="ios-keypad" />个人中心
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content class="content">
        <div style="margin-top:20px;">
          <router-view />
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
import HeaderMenu from "@/common/header_user.vue";
// import LeftMenu from "@/common/menu_user.vue";
export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      userType: localStorage.getItem('userType') || 1,
    };
  },
  components: {
    HeaderMenu,
    // LeftMenu
  },

  methods: {
    handleSelected (name) {
      // let names = name.split("_");
      // if (names[1] == "0") {
      this.$router.push(name);
      // } else {
      //   this.$router.push(names[0] + "?type=" + names[1]);
      // }
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.ivu-menu-light {
  /* background-color: red; */
  background: linear-gradient(top, #f5dea8, #d1b267);
  background: -ms-linear-gradient(top, #f5dea8, #d1b267);
  background: -webkit-linear-gradient(top, #f5dea8, #d1b267);
  background: -moz-linear-gradient(top, #f5dea8, #d1b267);
}
.content {
  margin: 0px auto;
}
.layout-nav {
  width: 675px;
  margin: 0 auto;
}
</style>
