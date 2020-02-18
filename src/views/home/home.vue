<template>
  <div>
    <div class="container">
      <!-- <img src="@/assets/images/logo.png" alt class="webLogo" /> -->

      <Layout>
        <Layout :style="{width: '770px',minWidth: '700px'}">
          <!-- <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>-->
          <Header>
            <div class="header">
              <select v-model="selectPosition" class="selectPosition">
                <option value="1">职位</option>
                <option value="2">公司</option>
              </select>
              <input type="text" v-model="searchContent" :placeholder="searchTips" class="searchContent" />
              <Button class="searchButton">搜索</Button>
              <div style="font-size:17px;margin-top:13px;color:#999">
                热门搜索:
                <span class="hotSearch" v-for="(item,index) in hotSearch" :key="index" :title="item" @click="search(item)">{{item}}</span>
              </div>
            </div>
          </Header>
          <Content class="content">
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
          </Content>
        </Layout>
        <Sider hide-trigger :style="{background: '#fff',flex: '0 0 270px',height: '95vh',maxWidth:'280px'}">
          <div class="userInfo">
            <div class="userPhotoPosition">
              <img src="@/assets/images/userPhoto.png" class="userPhoto" />
              <div class="userInfoPosition">
                <div class="userName">
                  Hi~,
                  <span style="color:black;">{{userName}}</span>！
                </div>
                <div style="padding-top: 10px;">欢迎回来,{{nowTime}}！</div>
              </div>
              <div class="userWorkInfo">
                <!-- <p>
                  <span title="天津">天津</span>
                  <span style="color:#999999;">|</span>
                  <span title="开发者服务">开发者服务</span>
                  <span style="color:#999999;">|</span>
                  <span title="工作1年以上">工作1年以上</span>
                </p>-->
                <ul>
                  <li>
                    理想工作城市：
                    <span>北京、天津</span>
                  </li>
                  <li>
                    理想工作职业：
                    <span>IT行业</span>
                  </li>
                  <li>
                    理想工作岗位：
                    <span>前端工程师</span>
                  </li>
                  <li>
                    理想工作薪资：
                    <span>6k~10k/月</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </Sider>
      </Layout>
    </div>
  </div>
</template>

<script>
import * as API from "@/api/home.js";
import commonData from "@/common/commonData.js";

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      selectPosition: 1,
      selectPositionLists: [
        {
          value: 1,
          label: "职位"
        },
        {
          value: 2,
          label: "公司"
        }
      ],
      searchContent: "",
      hotSearchIt: "",
      userName: "麻辣老王头",
      nowTime:
        new Date().getHours() < 12
          ? "上午好"
          : new Date().getHours() > 18
            ? "晚上好"
            : "下午好",
      searchTips: "请输入关键字,例如：IT,JAVA,前端,后端等",
      hotSearch: [
        "运营",
        "Java",
        "产品经理",
        "销售",
        "UI设计师",
        "人力资源",
        "市场经理",
        "城市",
        "品牌"
      ],
      resumeData: commonData.testData
    };
  },
  components: {},
  watch: {
    selectPosition (val) {
      if (val == 1) {
        this.searchTips = "请输入关键字,例如：IT,JAVA,前端,后端等";
      } else {
        this.searchTips = "请输入公司名称或者关键词,例如：百度,华为等";
      }
    }
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
            // item.publicTime = tool.formatDate(item.publicTime);
            item.companyWelfare = item.subsidy.split("/");
          });
          // this.resumeData = _data;
          console.log(_data);
        }
      });
    }
  },
  created () {
    this.initData();
  }
};
</script>

<style scoped>
/* .container {
} */
.ivu-menu-item {
  font-size: 20px;
}
.webLogo {
  width: 200px;
  height: 60px;
  vertical-align: middle;
}
.content {
  /* padding: 24px; */
  min-height: 90vh;
  /* background: #fff; */
  /* margin-top: 15px; */
  width: 676px;
}

.header {
  width: 676px;
  height: 130px;
  background-color: #fff;
  padding: 20px 18px;
}
.selectPosition {
  cursor: pointer;
  width: 80px;
  height: 60px;
  font-size: 22px;
  padding-left: 8px;
  vertical-align: middle;
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
}
.searchContent {
  min-width: 480px;
  width: 480px;
  height: 60px;
  font-size: 20px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-left: -5px;
}
.searchButton {
  width: 80px;
  height: 60px;
  font-size: 22px;
  margin-left: -3.5px;
  border-radius: 0;
  border: 0.5px solid #a9a9a9;
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
  border-left: 0;
}
.hotSearch {
  font-size: 17px;
  margin-left: 10px;
  color: #666;
  cursor: pointer;
}
.hotSearch:hover {
  color: #1890ff;
}
.userPhoto {
  width: 80px;
  height: 80px;
}
.userPhotoPosition {
  margin: 20px 0 0 15px;
  display: inline-block;
}
.userInfoPosition {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  padding-top: 10px;
}
.userName {
  font-size: 18px;
  padding-top: 5px;
}
.recruit {
  position: relative;
  margin-top: 20px;
  padding: 15px 30px 14px 21px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  height: 130px;
}
.recruit_left {
  float: left;
  width: 375px;
  padding-right: 15px;
  outline: none;
  border-right: 1px dashed grey;
  display: inline-block;
  /* color: black; */
}
.recruit_right {
  float: left;
  padding: 6px 5px 3px 20px;
  width: 245px;
  height: 88px;
  border-left: 1px dotted #8197a2;
  font-size: 14px;
  display: inline-block;
  font-size: 16px;
}
.recruit_right_title {
  width: 240px;
  overflow: hidden; /* 超出的文本隐藏 */
  text-overflow: ellipsis; /* 溢出用省略号显示 */
  white-space: nowrap; /* 溢出不换行 */
}
.recruit_right_title:hover {
  color: #f6841d;
}
.recruit_right_postName {
  color: #1890ff;
  font-size: 20px;
}
.recruit_right_postName:hover {
  color: #f6841d;
}
.recruit_right_postName:visited {
  color: #800080;
}
.recruit_right_workInfo {
  width: 350px;
  font-size: 16px;
  margin-top: 12px;
  overflow: hidden; /* 超出的文本隐藏 */
  text-overflow: ellipsis; /* 溢出用省略号显示 */
  white-space: nowrap; /* 溢出不换行 */
}
.recruit_right_workInfo:nth-child(1) {
  color: #ff6600;
}
.recruit_right_label {
  display: inline-block;
  width: 80px;
  height: 26px;
  border: 0;
  background-color: #edf9ff;
  color: #3d9ccc;
  text-align: center;
  line-height: 25px;
  margin-top: 8px;
  font-size: 14px;
  padding: 2px 10px;
}
.recruit_right_label:nth-child(2) {
  margin-left: 10px;
}
.userWorkInfo {
  margin-top: 10px;
  font-size: 14px;
  margin-left: 10px;
  line-height: 25px;
}
.userWorkInfo ul {
  list-style-type: none;
}
.userWorkInfo ul span {
  color: black;
  font-size: 16px;
}
</style>
