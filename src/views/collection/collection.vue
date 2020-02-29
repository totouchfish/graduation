<template>
  <div>     
    <div :style="{background:'#e0e0e0',padding:'10px'}">
    <div class="container">
      
      <Layout>
        <Layout :style="{width: '600px',minWidth: '700px',}">
          <Header>
            <div class="header">
                <a class="current">我的收藏</a>
            </div>
          </Header>
          <Content>
        <ul class="collectionContent">
          <li v-for="(item,index) in collectionData" :key="index">
            <div class="float-left">
              <div class="infor1"><a>{{item.pName}}</a></div>
              <div class="infor2"><a>{{item.companyName}}</a>
              <span>{{item.workCity}}</span>
              <small>|</small>
              <font>{{item.publicTime}}</font></div>
            </div>
          </li>
        </ul>
          </Content>

        </Layout>
      </Layout>
      </div>
    </div>
  </div>
</template>

<script>
import * as API from "@/api/collection.js";
export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {     
      collectionData: []
    };
  },
  components: {},
  watch: {},

  methods: {
    initData () {
      API.collection({

      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          this.collectionData = _data;
        }
      });
    }
  },
  created () {
    this.initData();
  }
}
</script>
<style scoped>
.header {
  height: 59px;
  margin:0 auto;
  background-color:#f6f6f6;
  border-bottom:1px solid #e1e1e1;
  padding-left: 20px;
}
.header a.current {
  color: #3498da;
  border-bottom:2px solid #3498da;
}
.header a{
  display: block;
  float: left;
  width:80px;
  text-align: center;
  line-height: 60px;
  height: 57px;
  font-size:18px;
  margin-right: 40px;
}
.content {
  

  /* padding: 24px; */
  min-height: 90vh;
  /* background: #fff; */
  /* margin-top: 15px; */
  width: 676px;
}
.collectionContent {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 16px;
}
.collectionContent li {
  position: relative;
  padding: 10px 19px;
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #e6e8ea;
  border-radius: 6px;
  overflow: hidden;
}
.collectionContent span{
  margin-left: 60px;
  font-size: 14px;
  color: #999;
}
.float-left {
  width: 494px;
  float: left;
  padding:20px 0 0 8px;
  position: relative;
}
.infor1 .info2{
  height: 28px;
}
.float-left a:hover{
  text-decoration: underline;
}
.float-left a{
  font-size: 16px;
  display: inline-block;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.infor1 a{
  color: #282828;
  height: 28px;
  width: 346px;
}
.infor2 a{
  color: #333;
  width:200px;
  margin-right: 18px;
}
.infor2 span{
  display: inline-block;
  float: left;
  color:#717171;
  width:90px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  margin-right: 14px;
  font-size: 16px;
}
.infor2 small{
  display: inline-block;
  float: left;
  color: #717171;
}
.infor2 font{
  display: inline-block;
  float: left;
  color:#717171;
  width:90px;
  text-align: right;
  font-size: 16px;
}
</style>