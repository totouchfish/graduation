<template>
  <div class="container">
    <div id="pdfCentent">
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
      <!-- 项目经历 -->
      <div class="intentionInfo">
        <div class="title">项目经历</div>
        <div class="projectInfo" v-for="(item, index) in projectExpData" :key="index">
          <p>
            <span class="blue_circle"></span>&ensp;{{item.startTime}} - {{item.endTime}}
          </p>
          <div class="project_item" :style="projectExpData.length == index+1?'border:0':''">
            <p class="project_item_title">{{item.projectName}}</p>
            <div class="project_item_content">
              <p>{{item.projectDesc}}</p>
              <p>{{item.personalWork}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 教育经历 -->
      <div class="educationInfo">
        <div class="title">教育经历</div>
        <div class="projectInfo" v-for="(item, index) in educationExpData" :key="index">
          <div>
            <Row>
              <Col span="7">
              <span class="blue_circle"></span>&ensp;{{item.schoolName}}
              </Col>
              <Col span="2"><span>{{item.degree}}</span></Col>
              <Col span="5" offset="1"><span>{{item.major}}</span></Col>
              <Col span="8"><span>{{item.startDate}} - {{item.endDate}}</span></Col>
            </Row>
          </div>
          <div class="education_item" v-if="educationExpData.length !== index+1"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_content">
        <Button type="primary" shape="circle" @click="ExportSavePdf(htmlTitle,nowTime)">下载简历</Button>
        <Button shape="circle" style="margin-left:60px;" @click="back()">返回简历</Button>
        <BackTop class="backtop"></BackTop>
      </div>
    </div>
  </div>
</template>

<script>
import * as API from "@/api/user.js";
import tool from "@/utils/formatDate";
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
import switchFont from "@/utils/switchFont";

export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      resumeInfo: {}, // 个人信息
      itemType: 1,
      jobLists: [],
      projectExpData: [], // 项目经历
      educationExpData: [], // 教育经历
      // jstopdf 方法一
      title: sessionStorage.getItem('userName') + '的简历',
      // jstopdf 方法二
      htmlTitle: sessionStorage.getItem('userName') + '的简历',
      nowTime: "03-24",
    };
  },
  components: {},
  watch: {

  },

  methods: {
    back () {
      this.$router.push('/resume');
    },
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
          _data.expectSalary = switchFont.salary(_data.expectSalary);
          this.resumeInfo = _data;
          // 项目经历
          let _projectData = res.result.projects
          _projectData.forEach(item => {
            item.startTime = tool.translateTime1(item.startTime);
            item.endTime = tool.translateTime1(item.endTime)
          });
          this.projectExpData = _projectData;
          // 教育经历
          let _studyData = res.result.educations
          _studyData.forEach(item => {
            item.startDate = tool.translateTime1(item.startDate);
            item.endDate = tool.translateTime1(item.endDate)
            item.degree = switchFont.degree(item.degree);
          });
          this.educationExpData = _studyData;
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
  letter-spacing: 1px;
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
    margin: 20px 0 15px 20px;
    font-size: 20px;
  }
  .intentionInfo {
    margin-top: 30px;
    padding-bottom: 20px;
    background-color: #fff;
    overflow: hidden; //解决margin塌陷问题
  }
  .projectInfo {
    // margin-top: 10px;
    margin-left: 20px;
    .blue_circle {
      border-radius: 6px;
      width: 6px;
      height: 6px;
      display: inline-block;
      border: 2px solid #1787fb;
    }
    .project_item {
      padding-left: 50px;
      margin-left: 4px;
      padding-bottom: 10px;
      border-left: 1px dashed #dcdcdc;
      .project_item_title {
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 15px;
        padding-top: 15px;
      }
      .project_item_content {
        p {
          margin-bottom: 20px;
          width: 90%;
        }
      }
    }
    .education_item {
      border-left: 1px dashed #dcdcdc;
      height: 30px;
      margin-top: -6px;
      margin-left: 2px;
    }
  }
  .educationInfo {
    margin-top: 30px;
    margin-bottom: 100px;
    padding-bottom: 20px;
    background-color: #fff;
    overflow: hidden; //解决margin塌陷问题
  }
  .footer {
    position: fixed;
    bottom: 0;
    height: 80px;
    width: 120%;
    left: -20%;
    background-color: #fff;
    // box-shadow: 0px -2px 3px ;
    box-shadow: 0 -4px 8px 0 rgba(90, 99, 103, 0.08);
    .footer_content {
      margin-left: 28%;
      margin-top: 28px;
      .backtop {
        bottom: 20px !important;
      }
    }
  }
}
</style>
