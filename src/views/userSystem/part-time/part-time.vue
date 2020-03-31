<template>
  <div>
    <div class="container">
      <!-- <img src="@/assets/images/logo.png" alt class="webLogo" /> -->

      <Layout>
        <Sider hide-trigger class="sider-left" :style="{background: '#fff',flex: '0 0 270px',maxWidth:'280px'}">

          <div class="workCity"">
            <div class=" choosePosition">
            <h3>所在地</h3>
          </div>
          <div class="userWorkInfo">
            <ul>
              <li>
                <dl>
                  <dd v-for="(item,index) in workCityLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,workCityLists,workCity,'workCity')">{{item.name}}</dd>
                </dl>
              </li>
            </ul>
          </div>

          <div></div>
    </div>
    <div class="workType">
      <div class="choosePosition">
        <h3>兼职类型</h3>
        <div class="userWorkInfo">
          <ul>
            <li>
              <dl>
                <dd v-for="(item,index) in partTimeLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,partTimeLists,partTime,'partTime')">{{item.name}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
    </Sider>
    <Layout :style="{width: '800px',minWidth: '700px'}">
      <Content class="content">
        <div class="recruit" v-for="(item,index) in resumeData" :key="index">
          <a class="recruit_left" href="#" style="color:#333">
            <p class="recruit_right_postName"><a href="#" @click="jobDetails(item.p_id)">{{item.p_name}}</a></p>
            <p class="recruit_right_workInfo" :title="item.postRequirement" v-html="item.postRequirement2">{{item.postRequirement2}}</p>
            <p style="font-size:14px;margin-top:11px;">{{item.addressDetail}}</p>
          </a>
          <div class="recruit_right">
            <a href="#" :title="item.companyName" style="color:#333">
              <p class="recruit_right_title">{{item.companyName}}</p>
              <p style="margin-top:8px;">{{item.phone}}</p>             
            </a>
          </div>
        </div>
      </Content>
    </Layout>

    </Layout>
  </div>
  </div>
</template>

<script>
import * as API from "@/api/user.js";
import commonData from "@/common/commonData.js";
import tool from "@/utils/formatDate";
import switchFont from "@/utils/switchFont";

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      workCityLists: commonData.workCityLists,
      partTimeLists: commonData.partTimeLists,
      resumeData: [],
      workCity: 0,
      partTime:0,
      workCityCode: 'city00',
      partTimeCode: 'ptype00',
    };
  },
  components: {},
  watch: {

  },

  methods: {
    chooseItem (index, list, chooseIt, string) {
      list[chooseIt].choose = false;
      list[index].choose = true;
      if (string == "workCity") {
        // 这里是将选中的值绑定到对应的变量上
        this.workCity = index;
        this.workCityCode = list[index].code;
      } else if (string == "partTime") {
        this.partTime = index;
        this.partTimeCode = list[index].code;
      }
      this.initData();//点击之后需要触发调用接口
      sessionStorage.setItem(string, index);
    },
    jobDetails (id) {
      this.$router.push('jobDetails?id=' + id);     
    },
    initData () {
      this.resumeData = [];
      API.queryPartTime({
        pageNum:1,
        pageSize:10,
        workCity: this.workCityCode,
        employeeType: this.partTimeCode,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.forEach(item => {
            item.postRequirement = `${item.salary} | ${item.workCity} | ${item.publicTime}`
            item.postRequirement2 = `<span style='color:red;'>${item.salary}</span> | ${item.workCity} | ${item.publicTime}`
          });
          this.resumeData = _data;
        }
      });
    }
  },
  created () {
    //加载已选中的城市
    if (sessionStorage.getItem("workCity")) {
      this.chooseItem(sessionStorage.getItem("workCity"), this.workCityLists, this.workCity, 'workCity');
    }
    if (sessionStorage.getItem("partTime")) {
      this.chooseItem(sessionStorage.getItem("partTime"), this.partTimeLists, this.partTime, 'partTime');
    }
    this.initData();
  }
}

</script>

<style scoped>
.ivu-menu-item {
  font-size: 16px;
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

dl {
  position: relative;
  padding-left: 10px;
  display: inline-block;
}
dd {
  float: left;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 0.2em;
  padding: 1px 5px;
}
.choose {
  background-color: #41af55;
  /* padding: 1px 5px; */
}
.choosePosition {
  margin: 20px 0 0 15px;
  display: inline-block;
}
.recruit {
  position: relative;
  padding: 10px 10px 10px 10px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  height: 100px;
}
.recruit_left {
  float: left;
  width: 375px;
  padding-right: 10px;
  outline: none;
  border-right: 1px dashed grey;
  display: inline-block;
  /* color: black; */
}
.recruit_right {
  float: left;
  padding: 6px 5px 3px 15px;
  width: 245px;
  height: 70px;
  border-left: 1px dotted #8197a2;
  font-size: 14px;
  display: inline-block;
  font-size: 14px;
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
  font-size: 14px;
}
.recruit_right_postName:hover {
  color: #f6841d;
}
.recruit_right_postName:visited {
  color: #800080;
}
.recruit_right_workInfo {
  width: 350px;
  font-size: 14px;
  margin-top: 10px;
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
