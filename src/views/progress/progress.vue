<template>
  <div>
    <div class="header">
      <ul>
        <li @click="searchJob('1')"><a href="#">投递成功</a></li>
        <li @click="searchJob('2')"><a href="#">被查看</a></li>
        <li @click="searchJob('3')"><a href="#">有意向</a></li>
        <li @click="searchJob('4')"><a href="#">邀请面试</a></li>
        <li @click="searchJob('5')"><a href="#">不合适</a></li>
      </ul>
    </div>
    <Content class="container">
      <div v-for="(item, index) in jobLists" :key="index">
        <div class="js">
          <div class="ji js-item">
            <div class="ji-item clearfix">
              <div class="ji-item-info fl">
                <a class="ji-item-info-jobName" href="" target="_blank">{{item.jobName}}</a>
                <p>{{item.salary}}</p>
                <a class="ji-item-info-companyName" href="" target="_blank">{{item.companyName}}</a>
              </div>
              <div class="ji-item-status fr">
                <p>{{item.status}}</p>
                <div><span>{{item.time}}</span></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="js">
          <div class="ji js-item">
            <div class="ji-item clearfix">
              <div class="ji-item-info fl">
                <a class="ji-item-info-jobName" href="" target="_blank">2020届java开发工程师</a>
                <p>10K-15K</p>
                <a class="ji-item-info-companyName" href="" target="_blank">北京思特奇信息技术股份有限公司</a>
              </div>
              <div class="ji-item-status fr">
                <p>成功投递</p>
                <div><span>2020-02-26</span></div>
              </div>
            </div>
          </div>
        </div> -->
      </div>

    </Content>
  </div>
</template>

<script>
import * as API from "@/api/home.js";

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      jobLists:[
        {
          jobName: '2020届java开发工程师',
          salary: '10K-15K',
          companyName: '北京思特奇信息技术股份有限公司',
          status: '成功投递',
          time: '2020-02-26'
        },
        {
          jobName: '2020届java开发工程师',
          salary: '10K-15K',
          companyName: '北京思特奇信息技术股份有限公司',
          status: '成功投递',
          time: '2020-02-26'
        },{
          jobName: '2020届java开发工程师',
          salary: '10K-15K',
          companyName: '北京思特奇信息技术股份有限公司',
          status: '成功投递',
          time: '2020-02-26'
        },{
          jobName: '2020届java开发工程师',
          salary: '10K-15K',
          companyName: '北京思特奇信息技术股份有限公司',
          status: '成功投递',
          time: '2020-02-26'
        },{
          jobName: '2020届java开发工程师',
          salary: '10K-15K',
          companyName: '北京思特奇信息技术股份有限公司',
          status: '成功投递',
          time: '2020-02-26'
        },{
          jobName: '2020届java开发工程师',
          salary: '10K-15K',
          companyName: '北京思特奇信息技术股份有限公司',
          status: '成功投递',
          time: '2020-02-26'
        },{
          jobName: '2020届java开发工程师',
          salary: '10K-15K',
          companyName: '北京思特奇信息技术股份有限公司',
          status: '成功投递',
          time: '2020-02-26'
        }
      ]
    };
  },
  components: {},
  watch: {

  },

  methods: {
    search (item) {
    },
    initData () {
      API.homeLists({
        type: this.selectPosition,
        // hotSearch: this.hotSearchIt,
        content: this.searchContent
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.postRequirement = `${item.salary} | ${item.workCity} | ${item.degree} | ${item.employeeType}`
            item.postRequirement2 = `<span style='color:red;'>${item.salary}</span> | ${item.workCity} | ${item.degree} | ${item.employeeType}`
            item.companyWelfare = item.subsidy.split("/");
          });
          this.resumeData = _data;
          console.log(_data);
        }
      });
    }
  },
  created () {
    // this.initData();
    // var d = data.data;return [['地区', d.name].join(': '), ['确诊', d.DIAGNOSIS].join(': '), ['疑似', d.SUSPECT].join(': '), ['治愈', d.CURE===-1 ? '待公布':d.CURE].join(': '), ['死亡', d.DEAD===-1 ? '待公布':d.DEAD].join(': ')].join('<br/>')
  }
};
</script>

<style scoped>
.header {
  height: 50px;
  background-color: #fff;
  width: 880px;
  margin: auto;
  border-radius: 0.5em;
}
.header ul {
  list-style-type: none;
}
.header li {
  width: 176px;
  height: 48px;
  box-sizing: border-box;
  text-align: center;
  float: left;
  border-right: 1px solid #eee;
}
.header li:last-child {
  border-right: 0;
}
.header a {
  line-height: 48px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  position: relative;
  display: block;
}
.header a:hover {
  color: #2d8cf0;
}
.container {
  width: 1000px;
  border: 0;
}
.js {
  margin-top: 16px;
  background-color: #fff;
  height: 140px;
  border-radius: 0.5em;
}
:first-child.js-item {
  border-top: 1px solid transparent;
}
.js-item {
  border-top: 1px solid #ededed;
  background-color: #fff;
}
.clearfix {
  zoom: 1;
  display: block;
}
.ji-item .ji-item-info {
  padding-left: 25px;
  max-width: 580px;
}
.fl {
  float: left;
}
.ji-item .ji-item-info-jobName {
  margin-top: 30px;
  display: block;
  font-size: 18px;
  color: #333;
}

.ji-item .ji-item-info p {
  margin: 4px 0 3px;
  font-size: 18px;
  color: #ff5959;
  font-weight: 700;
}
.ji-item .ji-item-info-companyName {
  display: block;
  font-size: 14px;
  color: #999;
  margin-bottom: 29px;
}
.ji-item .ji-item-status {
  padding: 31px 25px 31px 0;
  display: block;
  text-align: right;
  cursor: pointer;
}
.fr {
  float: right;
}
.ji-item .ji-item-status p {
  font-size: 14px;
  color: #666;
  height: 47px;
}
.ji-item .ji-item-status div span {
  margin-top: 11px;
  display: inline-block;
  font-size: 14px;
  color: #999;
}
</style>
