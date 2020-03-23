<template>
  <div>
    <div v-if="certificationTip" class="certificationTip" style="font-size:15px">
      <span>您好，{{userName}}，您还未完善企业信息认证，通过企业信息审核之后才可以发布职位招聘！</span>
      <a href="#" @click="improveData()"> <span>&emsp;&emsp;&emsp;立即完善企业信息认证</span> </a>
    </div>
    <Layout>
      <Layout class="content">
        <div class="recruitmentData">
          <div class="recruitmentData_title">最新动态数据</div>
          <div class="recruitmentData_content">
            <div class="box first">
              <div>简历投递</div>
              <div>12</div>
              <div>今日新增(份)</div>
            </div>
            <div class="box second">
              <div>简历投递</div>
              <div>1200</div>
              <div>历史累计(份)</div>
            </div>
          </div>
          <div class="recruitmentData_content">
            <div class="box third">
              <div>招聘人数</div>
              <div>12</div>
              <div>今日新增(人)</div>
            </div>
            <div class="box forth">
              <div>招聘人数</div>
              <div>1200</div>
              <div>历史累计(人)</div>
            </div>
          </div>
        </div>
        <div class="echarts">
          <div class="recruitmentData_title">最近七天投递、招聘数量折线图</div>
          <Echarts style="margin-left:15px;"></Echarts>
        </div>
      </Layout>
      <Sider hide-trigger :style="{background: '#fff',marginLeft:'10px',flex: '0 0 270px',height: '95vh',maxWidth:'280px'}">
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
          </div>
        </div>
        <div class="systemMessage">
          <h2>系统公告</h2>
          
        </div>
      </Sider>
    </Layout>
  </div>
</template>
<script>  
import Echarts from '@/common/companyEcharts';

export default {
  data () {
    return {
      certificationTip: true,
      userName: sessionStorage.getItem('userName'),
      nowTime:
        new Date().getHours() < 12
          ? "上午好"
          : new Date().getHours() > 18
            ? "晚上好"
            : "下午好",
      // certificationTip:false
    };
  },
  components: {
    Echarts
  },
  methods: {
    improveData () {
      this.$router.psuh('certification');
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
.certificationTip {
  width: 910px;
  margin-bottom: 15px;
  padding: 10px 20px;
  color: #8c5a00;
  background-color: #fff2db;
  box-shadow: 0px 1px 4px 0px #bbbbbb;
}
.content {
  width: 700px;
  // background-color: #fff;
  .recruitmentData {
    width: 100%;
    height: 360px;
    background-color: #fff;
    .recruitmentData_title {
      padding: 10px;
      border-bottom: 1px dotted #ccc;
    }
    .recruitmentData_content {
      width: 100%;
      height: 150px;
      // 弹性布局
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .box {
        width: 210px;
        height: 120px;
        border-top-left-radius: 2.2em;
        border-bottom-left-radius: 0.6em;
        border-bottom-right-radius: 0.6em;
        color: #fff;
        div:nth-child(1) {
          padding: 5px 0 3px 20px;
          border-bottom: 1px solid #fff;
        }
        div:nth-child(2) {
          text-align: center;
          font-size: 42px;
        }
        div:nth-child(3) {
          text-align: center;
          // font-size: 36px;
        }
      }
      .first {
        background-color: #bdebec;
      }
      .second {
        background-color: #bdecc7;
      }
      .third {
        background-color: #ecd4bd;
      }
      .forth {
        background-color: #ecbdd1;
      }
    }
  }
  .echarts {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #fff;
    .recruitmentData_title {
      padding: 10px;
      border-bottom: 1px dotted #ccc;
    }
  }
}
.userInfo {
  .userPhotoPosition {
    margin: 20px 0 0 15px;
    display: inline-block;
    .userPhoto {
      width: 80px;
      height: 80px;
    }
    .userInfoPosition {
      display: inline-block;
      vertical-align: top;
      margin-left: 10px;
      padding-top: 10px;
      .userName {
        font-size: 18px;
        padding-top: 5px;
      }
    }
  }
}
.systemMessage{
  margin-top: 20px;
  margin-left: 10px;
  padding-top: 10px;
  border-top: 1px dotted #ccc;
}
</style>