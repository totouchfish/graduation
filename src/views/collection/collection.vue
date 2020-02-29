<template>
  <div>     
    <div class="container">
      <Layout>
        <Layout :style="{width: '770px',minWidth: '700px'}">
          <Header>
        <div class="header">
          <span>我的收藏--当多人同时操作同一代码时会造成冲突，需要修改冲突，只是本地代码冲突，修改完之后无需立即提交到master上，可以等自己的代码改完再提交</span>
        </div>
      </Header>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {     
      resumeData: []
    };
  },
  components: {},
  watch: {
  },

  methods: {
    
    
  },
  created () {
    
  }
};
</script>

<style scoped>
.header {
  padding: 5px 20px;
  background-color: #fff;
}
.header span {
  font-size: 24px;
}
.content {
  /* padding: 24px; */
  min-height: 90vh;
  /* background: #fff; */
  /* margin-top: 15px; */
  width: 676px;
}
</style>
