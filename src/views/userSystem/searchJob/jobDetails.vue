<template>
  <div>
    <Layout>
      <div class="content">
        <div class="title">
          <div class="title-info">

            <h1 title="职位名称">{{positionDetail.p_name}}</h1>
            <h3>
              <span title="公司名称">{{positionDetail.conpanyName}}</span>
              <!-- <a href="https://www.liepin.com/company/10280479/" data-promid="" target="_blank" title="天津万顺东晟科技发展有限公司">天津万顺东晟科技发展有限公司</a> -->
            </h3>

            <!-- <span class="triangle"></span> -->
          </div>
          <span class="triangle"></span>
        </div>
        <div class="job-item">
          <div class="job-title-left">
            <p class="job-item-title">{{positionDetail.salary}}</p>
            <p class="basic-infor">
              <svg-icon icon-class="address" /><span>{{positionDetail.workCity}}</span>
              <svg-icon icon-class="time" /><span>{{positionDetail.publicTime}}</span>
            </p>
            <div class="job-qualifications">
              <span>{{positionDetail.degree}}</span>
              <span>{{positionDetail.employeeType}}</span>
              <span>{{positionDetail.age}}</span>
            </div>
          </div>
          <div class="right-control">
            <div class="job-intro">
              <a href="javascript:;" class="btn-apply" style="top: auto;" @click="applyPosition()">应聘职位</a>
            </div>
            <div class="right-operation">
              <a class="link-collection" data-selector="link-collection" data-value="0" href="javascript:;" @click="collectPosition()">收藏</a>
            </div>
          </div>
        </div>
        <div class="comp-tag-box">
          <Tag color="#3d9ccc" v-for="(element,indx) in this.tagData" :key="indx" type="border" class="tag">{{element.name}}</Tag>
        </div>
        <div class="job_details">
          <div class="job_details_word">
            <h3 class="job_details_title">岗位职责：</h3>
            <p>
              {{positionDetail.workDuties}}
            </p>
            <h3 class="job_details_title">职位要求：</h3>
            <p>
              {{positionDetail.workClaim}}
            </p>
            <h3 class="job_details_title">企业简介：</h3>
            <p>
              {{positionDetail.brief}}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>

// 引入常用变量
import commonData from "@/common/commonData.js";
import * as API from "@/api/user.js";
import * as API2 from "@/api/common.js";
import tool from "@/utils/formatDate";
import switchFont from "@/utils/switchFont";

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      id:'',
      positionDetail:[],
      tagData: [
        {
          name: '年底双薪'
        }, {
          name: '绩效奖金'
        }, {
          name: '带薪年假'
        }, {
          name: '交通补助'
        }, {
          name: '通讯津贴'
        }, {
          name: '午餐补助'
        }, {
          name: '弹性工作'
        }, {
          name: '免费班车'
        }, {
          name: '五险一金'
        }
      ]
    };
  },
  watch: {

  },
  components: {},
  methods: {
    applyPosition(){
      API.acceptPosition({
        pid: this.id,
        rid: sessionStorage.getItem("resumeId"),
        userId: sessionStorage.getItem('userId')
      }).then(res => {
        if(res.code == 200) {
          this.$route.push('searchJob');
          this.$Message.success("申请成功！");
        }else{
          this.$Message.error("申请失败，请先完善简历！");
        }
      });
      
    },
    collectPosition(){
      API.addCollection({
        pid: this.id,
        uid: sessionStorage.getItem("userId")
      }).then(res => {
        if(res.code == 200) {
          this.$router.push('searchJob');
          this.$Message.success("收藏成功！");
        }else{
          this.$Message.error("收藏失败！");
        }
      });
      
    },
    initData () {
      // 初始化列表数据
      API.positionDetail({
       pid:this.id,
      }).then(res => {
        if (res.code == 200) {
          let _data=res.result;
          _data.publicTime = tool.translateTime1( _data.publicTime);
          _data.degree = switchFont.degree(_data.degree);
          _data.age = switchFont.age(_data.age);
          //_data.workYears = switchFont.workYears(_data.workYears);
          //_data.salary = switchFont.salary(_data.salary);
          this.positionDetail = _data;
        }
      })
    }
  },
  created () {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.initData();
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 800px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  .title {
    height: 88px;
    width: 100%;
    background-color: #3d9ccc;
    position: relative;
    left: -15px;
    margin-top: 20px;
    .title-info {
      position: relative;
      left: 25px;
      top: 18px;
      width: 665px;
      padding-right: 10px;
      color: #fff;
      background-color: #3d9ccc;
    }
    .triangle {
      width: 15px;
      position: absolute;
      left: 0;
      bottom: -7px;
      border-bottom: 8px solid transparent;
      border-right: 15px solid #156e9b;
    }
  }
  .job-item {
    position: relative;
    padding: 10px 16px 0 20px;

    .job-title-left {
      float: left;
      // color: #8cc4e1;
      font-size: 16px;
      .job-item-title {
        padding: 23px 0 0 5px;
        margin-bottom: 14px;
        line-height: 32px;
        color: #ff7f00;
        font-size: 32px;
      }
      .basic-infor {
        svg {
          color: #8cc4e1;
        }
      }
      .job-qualifications {
        margin-left: -6px;
        span {
          float: left;
          padding: 0 10px;
          border-left: 2px solid #d0d0d0;
          margin: 10px 0;
          font-size: 16px;
        }
        span:first-child {
          border-left: 0;
        }
      }
    }
    .right-control {
      // margin-top: 26px;
      text-align: center;
      .job-intro {
        position: absolute;
        right: 0;
        top: 24px;
        .btn-apply {
          margin-right: 16px;
          display: inline-block;
          width: 163px;
          padding: 10px 15px;
          font-size: 16px;
          border-radius: 5px;
          color: #fff;
          background-color: #fa0;
        }
      }
      .right-operation {
        position: absolute;
        right: 16px;
        top: 77px;
        width: 180px;
        text-align: right;
        color: #ccc;
      }
    }
  }
  .comp-tag-box {
    margin: 140px 30px 20px 15px;
    .tag {
      margin-left: 10px;
      background-color: #edf9ff !important;
    }
  }
  .job_details {
    border-top: 1px dotted #ccc;
    padding: 10px 30px 20px;
    .job_details_word {
      border: 0;
      padding-bottom: 0;
      line-height: 24px;
      word-wrap: break-word;
      padding: 0 10px 20px;
      font-size: 14px;
      .job_details_title {
        margin: 10px 0;
        padding-left: 7px;
        line-height: 16px;
        color: #000;
        font-size: 14px;
        font-weight: 400;
        border-left: 3px solid #3d9ccc;
      }
    }
  }
}
</style>
