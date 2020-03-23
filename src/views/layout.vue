<template>
  <div class="layout">
    <HeaderMenu :type='userType'></HeaderMenu>
    <Layout v-if="userType == 1">
      <Header>
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
    <Layout v-if="userType == 2">
      <!-- <HeaderMenu></HeaderMenu> -->
      <Header>
        <Menu mode="horizontal" theme="light" active-name="1" @on-select="handleSelected" width="1000px">
          <div class="layout-nav">
            <MenuItem name="chome">
            <Icon type="ios-navigate" />首页
            </MenuItem>
            <MenuItem name="resumeHanlde">
            <Icon type="md-briefcase" />简历管理
            <!-- 查看简历  -->
            </MenuItem>
            <MenuItem name="interview">
            <Icon type="md-heart" />面试管理
            <!-- 查看面试人员、面试通知  -->
            </MenuItem>
            <MenuItem name="recruitment">
            <Icon type="ios-paper" />招聘管理
            <!-- 发布招聘信息  -->
            </MenuItem>
            <MenuItem name="certification">
            <Icon type="ios-keypad" />企业认证
            <!-- 企业资质认证  -->
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
    <Layout v-if="userType == 3" style="position: relative;">
      <!-- <HeaderMenu></HeaderMenu> -->
      <div class="leftmenu">
        <Menu width='150px' class="admin-menu" theme="light" active-name="1" @on-select="handleSelected">
          <MenuItem name="ahome">
            <Icon type="ios-navigate" />首页
          </MenuItem>
          <MenuItem name="systemNotice">
            <Icon type="ios-paper" />系统公告
          </MenuItem>
          <Submenu name="none">
            <template slot="title">
              <Icon type="ios-paper" />企业管理
            </template>
            <MenuItem name="companyReview">
              <Icon type="md-briefcase" />企业审核
            </MenuItem>
            <MenuItem name="positionManager">
              <Icon type="md-briefcase" />职位管理
            </MenuItem>
          </Submenu>
          <MenuItem name="resumeManager">
          <Icon type="ios-analytics" />简历管理
          </MenuItem> 
        </Menu>
      </div>
      <Content class="content_admin">
        <router-view />
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
      userType: sessionStorage.getItem('userType') || 1,
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
  background: #f5f7f9;
  position: relative;
  /* overflow: hidden; */
  height: 100vh;
}
.ivu-menu-light {
  /* 禁止选中文字 */
  user-select: none;
  /* background-color: red; */
  /* background: linear-gradient(top, #616064, #909193); */
  /* background: -ms-linear-gradient(top, #f5dea8, #d1b267);
  background: -webkit-linear-gradient(top, #f5dea8, #d1b267);
  background: -moz-linear-gradient(top, #f5dea8, #d1b267); */
}
.content {
  margin: 0 auto;
}
.leftmenu {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
}
.content_admin {
  margin: 0 auto;
  width: calc(100% - 150px);
  position: absolute;
  left: 150px;
}
.layout-nav {
  width: 675px;
  margin: 0 auto;
}
.admin-menu {
  height: 100vh;
  width: 100px;
}
.ivu-layout-sider {
  background-color: #fff;
  flex: 0;
}
</style>
