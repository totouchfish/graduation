<template>
  <div>
    <Layout>
      <Header>
        <div class="header">
          <input type="text" v-model="searchContent" :placeholder="searchTips" class="searchContent" />
          <Button class="searchButton">搜 索</Button>
        </div>
      </Header>
      <Content style="margin-top:20px;">
        <div class="search">
          <ul class="searchType">
            <li>
              <dl>
                <dt style="font-weight:bold;">工作城市:</dt>
                <dd v-for="(item,index) in workCityLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,workCityLists,workCity,'workCity')">{{item.name}}</dd>
              </dl>
              <dl>
                <dt>工作性质:</dt>
                <dd v-for="(item,index) in workCharacterLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,workCharacterLists,workCharacter,'workCharacter')">{{item.name}}</dd>
              </dl>
              <dl>
                <dt>职能类型:</dt>
                <dd v-for="(item,index) in functionTypeLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,functionTypeLists,functionType,'functionType')">{{item.name}}</dd>
              </dl>
              <dl>
                <dt>企业性质:</dt>
                <dd v-for="(item,index) in companyTypeLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,companyTypeLists,companyType,'companyType')">{{item.name}}</dd>
              </dl>
              <dl>
                <dt>&emsp;&emsp;行业:</dt>
                <dd v-for="(item,index) in workTypeLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,workTypeLists,workType,'workType')">{{item.name}}</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="jobType">
          <span v-for="(item,index) in sortTypeLists" :class="item.choose?'choose':''" :key="index" @click="chooseItem(index,sortTypeLists,sortType,'sortType')">{{item.name}}</span>
        </div>
        
        <ul class="recruitContent">
          <li v-for="(item,index) in recruitData" :key="index" @mouseenter="item.tagShow = true" @mouseleave="item.tagShow = false">
            <div class="float-left paddingtop-20px">
              <p><a href="#" @click="jobDetails(item.id)">{{item.name}}</a></p>
              <p class="recruitDetails">
                <svg-icon icon-class="address" style="margin-left:0;" />
                <span>{{item.address}}</span>
                <svg-icon icon-class="time" />
                <span>{{item.time}}发布</span>
                <svg-icon icon-class="degree" />
                <span>{{item.degree}}</span>
                <svg-icon icon-class="salary" />
                <span>{{item.salary}}</span>
              </p>
            </div>
            <div class="float-right company">
              <div class="float-left paddingtop-20px">
                <p>{{item.company}}</p>
                <p class="recruitDetails">{{item.workType}}</p>
              </div>
              <div class="float-right company-logo">
                <img src="@/assets/images/company.png">
              </div>
            </div>
            <transition name="fade">
              <div v-if="item.tagShow" class="labels">
                <Tag v-for="(element,indx) in item.tagData" :key="indx" type="border">{{element.name}}</Tag>
              </div>
            </transition>
          </li>
        </ul>
        <!-- <Page :total="total1" :current="currentPage1" class="paging" show-elevator @on-change="changepage1()"></Page> -->
      </Content>
    </Layout>
  </div>
</template>

<script>

// 引入常用变量
import commonData from "@/common/commonData.js";
import * as API from "@/api/user.js";

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
      searchTips: "请输入关键字,例如：IT、JAVA、百度、华为等",
      workCityLists: commonData.workCityLists,
      workCharacterLists: commonData.workCharacterLists,
      functionTypeLists: commonData.functionTypeLists,
      workTypeLists: commonData.workTypeLists,
      companyTypeLists: commonData.companyTypeLists,
      sortTypeLists: commonData.sortTypeLists,
      recruitData: commonData.recruitData,
      // 这里是我声明的选中的那些字段对应的变量
      workCity: 0,
      workCharacter: 0,
      workType: 0,
      functionType: 0,
      companyType: 0,
      sortType: 0,
      workCityName: '',
      workCharacterName: '',
      workTypeName: '',
      functionTypeName: '',
      companyTypeName: '',
      sortTypeName: ''
    };
  },
  watch: {
    selectPosition (val) {
      if (val == 1) {
        this.searchTips = "请输入关键字,例如：IT,JAVA,前端,后端等";
      } else {
        this.searchTips = "请输入公司名称或者关键词,例如：百度,华为等";
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    chooseItem (index, list, chooseIt, string) {
      list[chooseIt].choose = false;
      list[index].choose = true;
      if (string == "workCity") {
        // 这里是将选中的值绑定到对应的变量上
        this.workCity = index;
        this.workCityName = list[index].name;
      } else if (string == "functionType") {
        this.functionType = index;
        this.functionTypeName = list[index].name;
      } else if (string == "workCharacter") {
        this.workCharacter = index;
        this.workCharacterName = list[index].name;
      } else if (string == "workType") {
        this.workType = index;
        this.workTypeName = list[index].name;
      } else if (string == "companyType") {
        this.companyType = index;
        this.companyTypeName = list[index].name;
      } else if (string == "sortType") {
        this.sortType = index;
        this.sortTypeName = list[index].name;
      }
      sessionStorage.setItem(string, index);
    },
    toggleShow () {
      this.tagShow = true;
    },
    toggleHide () {
      this.tagShow = false;
    },
    jobDetails (id){
      this.$router.push('jobDetails?id='+id);
    },
    initData () {
      // 初始化列表数据
      API.queryPositionByCondition({
        // 这里是将变量与你接口的字段绑定，
        content: this.searchContent,//搜索框
        workCity: this.workCityName,
        employType: this.workCharacterName,
        trade:this.workTypeName,//啥字段
        functionType: this.functionTypeName,
        companyType: this.companyTypeName,
        type: this.sortTypeName,
        pageSize:10,
        pageNum:1
      }).then(res => {
        if (res.code == 200) {
          // this.jobLists = res.result;
        }
      })
    }
  },
  created () {
    // 加载已选中的城市
    if (sessionStorage.getItem("workCity")) {
      this.chooseItem(sessionStorage.getItem("workCity"), this.workCityLists, this.workCity, 'workCity');
    }
    if (sessionStorage.getItem("workCharacter")) {
      this.chooseItem(sessionStorage.getItem("workCharacter"), this.workCharacterLists, this.workCharacter, 'workCharacter');
    }
    if (sessionStorage.getItem("workType")) {
      this.chooseItem(sessionStorage.getItem("workType"), this.workTypeLists, this.workType, 'workType');
    }
    if (sessionStorage.getItem("functionType")) {
      this.chooseItem(sessionStorage.getItem("functionType"), this.functionTypeLists, this.functionType, 'functionType');
    }
    if (sessionStorage.getItem("companyType")) {
      this.chooseItem(sessionStorage.getItem("companyType"), this.companyTypeLists, this.companyType, 'companyType');
    }
    if (sessionStorage.getItem("sortType")) {
      this.chooseItem(sessionStorage.getItem("sortType"), this.sortTypeLists, this.sortType, 'sortType');
    }
    this.initData();
  }
};
</script>

<style scoped>
.header {
  width: 800px;
  height: 100px;
  /* background-color: #fff; */
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
  min-width: 600px;
  width: 600px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 42px;
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
  border: 0.5px solid #a9a9a9;
  border-right: 0;
}
.searchButton {
  width: 80px;
  height: 40px;
  font-size: 16px;
  border: 0.5px solid #a9a9a9;
  margin-left: -3.5px;
  border-radius: 0;
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
}
/* .hostSearch {
  font-size: 17px;
  margin-left: 10px;
  color: #666;
  cursor: pointer;
}
.hostSearch:hover {
  color: #1890ff;
} */
.search {
  width: 800px;
  height: 325px;
  background-color: #fff;
  padding: 20px 15px;
  font-size: 15px;
}
.searchType {
  list-style: none;
  /* padding-left: 0; */
}
.jobType {
  width: 800px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
  background-color: #fff;
  padding: 15px 15px;
  font-size: 15px;
}
.jobType span {
  padding: 5px 15px;
  text-align: center;
}
dl {
  position: relative;
  padding-left: 65px;
  display: inline-block;
}
dt {
  position: absolute;
  font-weight: bold;
  left: 0;
  top: 0;
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
.recruitContent {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 16px;
}
.recruitContent li {
  position: relative;
  padding: 32px 19px;
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #e6e8ea;
  border-radius: 6px;
  overflow: hidden;
}
.paddingtop-20px {
  padding-top: 20px;
}
.recruitDetails {
  font-size: 14px;
  color: #999;
  margin-top: 10px;
}
.recruitDetails svg {
  margin-left: 30px;
  vertical-align: middle;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.company {
  width: 300px;
}
.company-logo {
  position: relative;
  width: 80px;
  height: 80px;
}
.company-logo img {
  position: absolute;
  width: 80px;
  top: 50%;
  transform: translateY(-50%);
}
.labels {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 815px;
  padding: 4px 16px;
  border-top: 1px solid #e6e8ea;
  background-color: #f8f8f8;
}
/* 进入和离开时过渡状态的 动画状态 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
  height: 37px;
}

/* 进入时的 初始状态 和 离开时动画的 结束状态 */
.fade-enter,
.fade-leave-to {
  height: 0;
}

/* 离开时的 初始状态 和 进入时动画的 结束状态 */
.fade-enter-to,
.fade-leave {
  height: 37px;
}
</style>
