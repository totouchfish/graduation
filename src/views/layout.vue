<template>
  <div class="layout">
    <Layout>
      <HeaderMenu></HeaderMenu>
      <Header>
        <Menu mode="horizontal" theme="light" active-name="1" @on-select="handleSelected">
          <!-- <div class="layout-logo"></div> -->
          <div class="layout-nav">
            <MenuItem name="home">
            <Icon type="ios-navigate"></Icon>首页123
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>我的简历
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>收藏
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>其他
            </MenuItem>
          </div>
        </Menu>
      </Header>

      <router-view />
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
  data () {
    return {
      // isCollapsed: false
    };
  },
  components: {
    HeaderMenu,
    LeftMenu
  },
  computed: {
    // rotateIcon() {
    //   return ["menu-item", this.isCollapsed ? "rotate-icon" : ""];
    // },
    // menuitemClasses: function() {
    //   return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    // }
  },
  methods: {
    // collapsedSider() {
    //   this.$refs.side_r.toggleCollapse();
    // },
    handleSelected (name) {
      // this.$router.push({name:'home'})
      this.$router.push(name)
    }
  }
};
</script>

<style lang="less" scoped>
// @import '~@/assets/lib/styles/mixin.less';

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-left: 3px;
  }
}
</style>
