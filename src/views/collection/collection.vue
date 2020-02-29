<template>
  <div>     
    <div class="container">
      <Layout>
        <Layout :style="{width: '770px',minWidth: '700px'}">
          <Header>
        <div class="header">
          <span>我的收藏</span>
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
