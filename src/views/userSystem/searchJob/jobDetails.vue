<template>
  <div>
    <Layout>
      <div class="content">
        <div class="title">
          <div class="title-info">

            <h1 title="前端开发工程师">前端开发工程师</h1>
            <h3>
              <span title="天津万顺东晟科技发展有限公司">天津万顺东晟科技发展有限公司</span>
              <!-- <a href="https://www.liepin.com/company/10280479/" data-promid="" target="_blank" title="天津万顺东晟科技发展有限公司">天津万顺东晟科技发展有限公司</a> -->
            </h3>

            <!-- <span class="triangle"></span> -->
          </div>
          <span class="triangle"></span>
        </div>
        <div class="job-item">
          <div class="job-title-left">
            <p class="job-item-title">8-12k·12薪</p>
            <p class="basic-infor">
              <svg-icon icon-class="address" /><span>天津</span>
              <svg-icon icon-class="time" /><span>2020年03月20日</span>
            </p>
            <div class="job-qualifications">
              <span>学历不限</span>
              <span>1年以上</span>
              <span>语言不限</span>
              <span>年龄不限</span>
            </div>
          </div>
          <div class="right-control">
            <div class="job-intro">
              <a href="javascript:;" class="btn-apply" style="top: auto;">应聘职位</a>
            </div>
            <div class="right-operation">
              <a class="link-collection" data-selector="link-collection" data-value="0" href="javascript:;">收藏</a>
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
              1.根据业务需求文档完成前端研发工作；与后端研发人员配合，讨论交互方式，页面集成工作；完成现有系统的维护工作，完成相关的迭代优化工作；
              2.根据系统平台的业务需求，完成前端架构，并编制相关的前端规范等技术文档,网页标准化及优化研究；
              3.负责公司前端的测试计划和优化，编写设计文档和测试分析报告等文档，沉淀和积累前端的测试框架和发布规范及机制；
              4.负责前端系统性能优化工作，确立优化方向及可执行和量化的优化方案；
              5.完成领导交办的其它任务。
            </p>
            <h3 class="job_details_title">职位要求：</h3>
            <p>
              1.专科学历，软件技术、计算机科学与技术、电子工程等相关专业；
              2.3年以上Web前端工作经验、对企业级前端开发有经验；
              3.熟练使用JavaScript、CSS/CSS3.HTML4/HTML5编程开发，熟悉其标准规范及各浏览器差异性；
              4.熟练掌握AjaxHTTP等基础知识了解跨域机制；
              5.熟练前端模块化开发,面向对象编程开发；
              6.熟练使用jQuery、React、Vue、ng、Ember等框架对前端组件化有一定的理解；
              7.熟练使用前端代码管理及打包工具。
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
import * as API from "@/api/home.js";

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
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
    initData () {
      // 初始化列表数据
      API.queryPositionByCondition({
        // 这里是将变量与你接口的字段绑定，
        content: this.searchContent,//搜索框
        workCity: this.workCityName,
        employType: this.workCharacterName,
        trade: this.workTypeName,//啥字段
        functionType: this.functionTypeName,
        companyType: this.companyTypeName,
        type: this.sortTypeName,
        pageSize: 10,
        pageNum: 1
      }).then(res => {
        if (res.code == 200) {
          // this.jobLists = res.result;
        }
      })
    }
  },
  created () {
    // this.initData();
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
