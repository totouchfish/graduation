<template>
  <div class="container">
    <div class="userInfo">
      <div class="resume_title"></div>
      <div class="man_photo"><img src="@/assets/images/man.jpg" class="man_photo" :alt="this.resumeInfo.name"></div>
      <div class="userName">{{resumeInfo.name}}</div>
      <div class="userInfo1">
        <span style="padding-left:0;">{{resumeInfo.gender}}</span>|<span>{{resumeInfo.birthDate}}岁</span>|<span>{{resumeInfo.birthProvince}}{{resumeInfo.birthCity}}</span></span>|<span>{{resumeInfo.workDate}}年经验</span>
      </div>
      <div class="userInfo2">
        <svg-icon icon-class="phone" /><span>{{resumeInfo.phone}}</span>
        <svg-icon icon-class="email" style="margin:0 5px 0 40px;" /><span>{{resumeInfo.mail}}</span>
      </div>
    </div>
    <div class="intentionInfo">
      <div class="title">求职意向</div>
      <Row style="padding-top:5px;font-size:14px;line-height:2;margin-left:20px;">
        <Row>
          <Col span="3">工作性质：</Col>
          <Col span="6">{{resumeInfo.workCharacter}}</Col>
          <Col span="3" offset="4">期望地点：</Col>
          <Col span="6">{{resumeInfo.expectPlace}}</Col>
        </Row>
        <Row>
          <Col span="3">期望行业：</Col>
          <Col span="6">{{resumeInfo.expectJob}}</Col>
          <Col span="3" offset="4">税前月薪：</Col>
          <Col span="6">{{resumeInfo.expectSalary}}</Col>
        </Row>
        <Row>
          <Col span="3">期望职业：</Col>
          <Col span="6">{{resumeInfo.expectPost}}</Col>
        </Row>
      </Row>
    </div>
    <div class="intentionInfo">
      <div class="title">项目经历</div>
      
      <!--  -->
    </div>
  </div>
</template>

<script>
import * as API from "@/api/resume.js";
import tool from "@/utils/formatDate";

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      resumeInfo: {},//个人信息
      itemType: 1,
      jobLists: []
    };
  },
  components: {},
  watch: {

  },

  methods: {
    initData () {
      // 获取用户简历所有数据
      API.queryResume({
        userId: sessionStorage.getItem('userId')
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          // 个人信息 和 求职意向
          _data.gender == 1 ? _data.gender = '男' : _data.gender == 2 ? _data.gender = '女' : '无';
          _data.birthDate = tool.getAge(_data.birthDate);
          _data.workDate = tool.getAge(_data.workDate);
          // 这种转义的活都应该是后台转的，前台只负责拿数据，展示数据。
          _data.workCharacter = _data.workCharacter == '1' ? '全职' : _data.workCharacter == '2' ? '兼职' : '实习';
          switch (_data.expectSalary) {
            case '1':
              _data.expectSalary = '1k元/月以下';
              break;
            case '2':
              _data.expectSalary = '1k-2k元/月';
              break;
            case '3':
              _data.expectSalary = '2k-4k元/月';
              break;
            case '4':
              _data.expectSalary = '4k-6k元/月';
              break;
            case '5':
              _data.expectSalary = '6k-8k元/月';
              break;
            case '6':
              _data.expectSalary = '8k-10k元/月';
              break;
            case '7':
              _data.expectSalary = '10k-15k元/月';
              break;
            case '8':
              _data.expectSalary = '15k-20k元/月';
              break;
            case '9':
              _data.expectSalary = '20k元/月以上';
              break;
            default:
              _data.expectSalary = '无';
          }
          this.resumeInfo = _data;
          // 项目经历
          let _projectData = res.result.projects
          _projectData.forEach(item => {
            item.startTime = tool.formatDate2(item.startTime);
            item.endTime = tool.formatDate2(item.endTime)
          });
          // 教育经历
          let _studyData = res.result.educations
          _studyData.forEach(item => {
            item.startDate = tool.formatDate2(item.startDate);
            item.endDate = tool.formatDate2(item.endDate)
          });
          this.projectExpData = _data.projects;
          this.educationExpData = _data.educations;
          // 什么的id存储？
          sessionStorage.setItem("resumeId", _data.id);
          // 隐藏数据填写的div
          this.userInfo = false;
        } else {
          // 900 代表用户还没录入过信息
          // 显示数据填写的div
          this.userInfo = true;
        }
      });

    }
  },
  created () {
    this.initData();
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  border: 0;
  color: black;
  .userInfo {
    padding-bottom: 30px;
    background-color: #fff;
  }
  .resume_title {
    width: 800px;
    height: 100px;
    background-image: url(../../../assets/images/resume_title.png);
  }
  .man_photo {
    margin-top: -30px;
    img {
      margin: 0 auto;
      display: block;
      width: 116px;
      height: 116px;
      border-radius: 50%;
    }
  }
  .userName {
    text-align: center;
    font-size: 36px;
    color: black;
    margin-top: 10px;
  }
  .userInfo1 {
    padding: 15px 0;
    text-align: center;
    span {
      padding: 0 10px;
    }
  }
  .userInfo2 {
    text-align: center;
    svg {
      font-size: 18px;
      margin-left: -4px;
      vertical-align: bottom;
    }
  }
  .title {
    margin: 20px 0 0 20px;
    font-size: 20px;
  }
  .intentionInfo {
    margin-top: 30px;
    padding-bottom: 20px;
    background-color: #fff;
    overflow: hidden; //解决margin塌陷问题
  }
}
</style>
