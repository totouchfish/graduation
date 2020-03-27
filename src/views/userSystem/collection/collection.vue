<template>
  <div>
    <div :style="{background:'#e0e0e0',padding:'10px'}">
      <div class="container">

        <Layout>
          <Layout :style="{width: '780px',minWidth: '600px',}">
            <Header>
              <div class="header">
                <a class="current">我的收藏</a>
              </div>
            </Header>
            <Content>
              <ul class="collectionContent" style="width:100%;">
                <!-- <Row v-for="(item,index) in collectionData" :key="index">
                  <Col span="8">
                  <Row>{{item.pName}}</Row>
                  <Row>{{item.companyName}}</Row>
                  </Col>
                  <Col span="8">{{item.workCity}}|{{item.publicTime}}</Col>
                  <Col span="8">
                  <Button type="primary" @click="acceptPosition(item)">申请</Button>
                  <Button type="error" @click="delCollection(item)">删除</Button>
                  </Col>
                </Row> -->
                <li v-for="(item,index) in collectionData" :key="index">
                  <div class="float-left">
                    <div class="infor1"><a>{{item.pName}}</a></div>
                    <div class="infor2"><a>{{item.companyName}}</a>
                      <span>{{item.workCity}}</span>
                      <small>|</small>
                      <font>{{item.publicTime}}</font>
                    </div>
                  </div>
                  <div class="coleBtn">
                    <div class="a-job-apply-button">

                      <button class="a-button a--bordered a--filled" type="button" @click="acceptPosition(item)">申请 </button>
                    </div>
                    <a class="btn_a btn_a3" style="display: block;" @click="delCollection(item)">删除</a>
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

import * as API from "@/api/user.js";
import tool from "@/utils/formatDate"

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
    acceptPosition (item) {
      API.acceptPosition({
        pid: item.pid,
        rid: sessionStorage.getItem('resumeId'),
        userId: sessionStorage.getItem('userId')
      }).then(res => {
        if (res.code == 200) {
          // 申请成功后重新调用获取列表数据的接口
          this.delCollection(item);
          this.initData();
        }     
      });
    },
    delCollection(item){
      API.delCollection({
        pid: item.pid,
        uid:  sessionStorage.getItem('userId'),
      }).then(res => {
        if (res.code == 200) {
          this.initData();
          this.$Message.success('Success!');
        }
      });
    },
    initData () {
      API.collection({
        userId: sessionStorage.getItem('userId'),
        pageNum:1,
        pageSize:10
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.publicTime = tool.formatDate2(item.publicTime)
          });
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
  margin: 0 auto;
  background-color: #f6f6f6;
  border-bottom: 1px solid #e1e1e1;
  padding-left: 20px;
}
.header a.current {
  color: #3498da;
  border-bottom: 2px solid #3498da;
}
.header a {
  display: block;
  float: left;
  width: 80px;
  text-align: center;
  line-height: 60px;
  height: 57px;
  font-size: 18px;
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
  font-size: 14px;
}
.collectionContent li {
  position: relative;
  margin-top: 10px;
  padding: 10px 0px;
  background-color: #fff;
  border: 1px solid #e6e8ea;
  border-radius: 6px;
  overflow: hidden;
}
.collectionContent span {
  margin-left: 10px;
  font-size: 14px;
  color: #999;
}
.float-left {
  width: 480px;
  float: left;
  padding: 8px 0 8px 8px;
  position: relative;
}
.infor1 .info2 {
  height: 20px;
}
.float-left a:hover {
  text-decoration: underline;
}
.float-left a {
  font-size: 14px;
  display: inline-block;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.infor1 a {
  color: #282828;
  height: 18px;
  width: 250px;
}
.infor2 a {
  color: #333;
  width: 250px;
  margin-top: 3px;
}
.infor2 span {
  display: inline-block;
  float: left;
  color: #717171;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  margin-right: 14px;
  font-size: 14px;
}
.infor2 small {
  display: inline-block;
  float: left;
  color: #717171;
}
.infor2 font {
  display: inline-block;
  float: left;
  color: #717171;
  width: 75px;
  text-align: right;
  font-size: 14px;
  margin-left: 14px;
}
.coleBtn {
  padding-top: 15px;
  float: left;
  position: relative;
}
.a-job-apply-button {
  float: left;
  display: inline-block;
  color: #000;
  font-size: 16px;
  line-height: normal;
  text-align: start;
  text-indent: 0px;
  text-shadow: none;
  word-break: normal;
  word-spacing: normal;
}
.a-button {
  color: #fff;
  border: none;
  width: 110px;
  height: 36px;
  font-size: 16px;
  background: #3ba8f0;
  margin-right: 40px;
  margin-left: 20px;
  float: left;
  border-radius: 4px;
}
.coleBtn a {
  font-size: 16px;
}
.btn_a3 {
  display: block;
  float: left;
  cursor: pointer;
  width: 108px;
  height: 34px;
  background: #fafafa;
  border: 1px solid #bebebe;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  -webkit-border-radius: 3px;
  text-align: center;
  line-height: 36px;
  color: #555;
  z-index: 1;
}
</style>