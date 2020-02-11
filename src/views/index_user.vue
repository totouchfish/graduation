<template>
  <div class="layout">
    <Layout>
      <HeaderMenu></HeaderMenu>
      <Header>
        <Menu
          mode="horizontal"
          theme="light"
          active-name="1"
          @on-select="handleSelected"
          width="1000px"
        >
          <!-- <div class="layout-logo"></div> -->
          <div class="layout-nav">
            <MenuItem name="home_0">
              <Icon type="ios-navigate"></Icon>首 页
            </MenuItem>
            <!-- <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>行业
            </MenuItem>-->
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>行业
              </template>
              <!-- <MenuGroup title="使用"> -->
              <MenuItem name="searchJob_1">IT·互联网</MenuItem>
              <MenuItem name="searchJob_2">房地产</MenuItem>
              <MenuItem name="searchJob_3">金融</MenuItem>
              <MenuItem name="searchJob_4">消费品</MenuItem>
              <MenuItem name="searchJob_5">汽车·制造</MenuItem>
              <MenuItem name="searchJob_6">医疗·化工</MenuItem>
              <!-- </MenuGroup> -->
              <!-- <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>-->
            </Submenu>
            <MenuItem name="resume_0">
              <Icon type="ios-keypad"></Icon>我的简历
            </MenuItem>
            <MenuItem name="progress_0">
              <Icon type="ios-analytics"></Icon>求职进展
            </MenuItem>
            <MenuItem name="collection_0">
              <Icon type="ios-analytics"></Icon>职位收藏
            </MenuItem>
            <MenuItem name="personal_0">
              <Icon type="ios-paper"></Icon>个人中心
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
import LeftMenu from "@/common/menu_user.vue";
export default {
  name: "index",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  components: {
    HeaderMenu,
    LeftMenu
  },

  methods: {
    handleSelected(name) {
      let names = name.split("_");
      if (names[1] == "0") {
        this.$router.push(names[0]);
      } else {
        this.$router.push(names[0] + "?type=" + names[1]);
      }
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
