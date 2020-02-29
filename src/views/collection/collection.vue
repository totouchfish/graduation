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
          <!-- <Content class="content">
            <div class="recruit" v-for="(item,index) in resumeData" :key="index">
              <a class="recruit_left" href="#" style="color:#333">
                <p class="recruit_right_postName">{{item.pName}}</p>
                <p class="recruit_right_workInfo" :title="item.postRequirement" v-html="item.postRequirement2">{{item.postRequirement2}}</p>
                <p style="font-size:14px;margin-top:11px;">{{item.publicTime}}</p>
              </a>
              <div class="recruit_right">
                <a href="#" :title="item.companyName" style="color:#333">
                  <p class="recruit_right_title">{{item.companyName}}</p>
                  <p style="margin-top:8px;">{{item.trade}}</p>
                  <p style="margin-top:2px;">
                    <span class="recruit_right_label" v-for="(item,index2) in item.companyWelfare.slice(0,2)" :key="index2">{{item}}</span> ...
                  </p>
                </a>
              </div>
            </div>
          </Content> -->
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
