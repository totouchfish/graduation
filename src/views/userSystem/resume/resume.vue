<template>
  <div>
    <Layout class="layout">
      <Header>
        <div class="header">
          <span>我的简历</span>
        </div>
      </Header>
      <Content class="content">
        <div class="resumeUserInfo" v-bind="resumeInfo">
          <div style="margin:20px;font-size:18px;">个人信息</div>
          <Row v-show="!userInfo" class="userInfo_show">
            <Col span="4" style="width:135px;">
            <img src="@/assets/images/man.jpg" class="manImage">
            </Col>
            <Col span="14">
            <Row>
              <Col span="14" style="padding-top:5px;">
              <span style="font-size:24px;padding-right:20px;">{{resumeInfo.name}}</span>
              <span>更新时间:</span>&emsp;<span>2020-02-16 17:07</span>
              </Col>
            </Row>
            <Row>
              <Col class="addressInfo"><span style="padding-left:0;">{{resumeInfo.gender}}</span>|<span>{{resumeInfo.birthDate}}岁</span>|<span>{{resumeInfo.birthAddress}}</span>|<span>{{resumeInfo.workDate}}年经验</span></Col>
            </Row>
            <Row>
              <Col class="contactInfo">
              <svg-icon icon-class="phone" /><span>{{resumeInfo.phone}}</span>
              <svg-icon icon-class="email" style="margin:0 20px 0 25px;" /><span>{{resumeInfo.mail}}</span>
              </Col>
            </Row>
            </Col>
            <Col span="2" offset="4"><span class="edit" @click="editUserInfo">
              <svg-icon icon-class="edit" />&nbsp;编辑</span></Col>
          </Row>
          
        </div>
        <Row v-show="userInfo" class="userInfo_edit">
          <Col>
          <Form ref="form1Validate" :model="form1Validate" label-position="left" :rules="rule1Validate" :label-width="100">
            <Row>
              <Col span="10">
              <FormItem label="姓名" prop="name">
                <Input v-model="form1Validate.name" style="width:194px;"></Input>
              </FormItem>
              <FormItem label="性别" prop="gender">
                <RadioGroup v-model="form1Validate.gender">
                  <Radio label="male">男</Radio>
                  <Radio label="female">女</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="出生年月" prop="birthDate">
                <DatePicker type="date" v-model="form1Validate.birthDate"></DatePicker>
              </FormItem>
              <FormItem label="参加工作时间" prop="workDate">
                <DatePicker type="date" v-model="form1Validate.workDate"></DatePicker>
              </FormItem>
              </Col>
              <Col span="6" offset="8">
              <span>选择文件</span>
              <img src="@/assets/images/man.jpg" style="width:100px;height:100px;">
              <p>只支持JPG格式,大小不要超过500k 建议使用一寸证件照70*100像素</p>
              </Col>
            </Row>
            <FormItem label="户口所在地" prop="address">
              <Row>
                <Col span="7">
                <FormItem prop="birthProvince">
                  <Select v-model="form1Validate.birthProvince" placeholder="请选择户口所在省份" style="widt：30%;">
                    <Option v-for="(item,index) in provinceData" :key="index" :value="item.id">{{item.name}}</Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="7" offset="1">
                <FormItem prop="birthCity">
                  <Select v-model="form1Validate.birthCity" placeholder="请选择户口所在城市" style="widt：30%;">
                    <Option v-for="(item,index) in cityData1" :key="index" :value="item.id">{{item.name}}</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="现居住城市">
              <Row>
                <Col span="8">
                <FormItem prop="liveProvince">
                  <Select v-model="form1Validate.liveProvince" placeholder="请选择现居住省份">
                    <Option v-for="(item,index) in provinceData" :key="index" :value="item.id">{{item.name}}</Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="7" offset="1">
                <FormItem prop="liveCity">
                  <Select v-model="form1Validate.liveCity" placeholder="请选择现居住城市">
                    <Option v-for="(item,index) in cityData2" :key="index" :value="item.id">{{item.name}}</Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="7" offset="1">
                <FormItem prop="liveCounty">
                  <Select v-model="form1Validate.liveCounty" placeholder="请选择现居住县区">
                    <Option v-for="(item,index) in countyData" :key="index" :value="item.id">{{item.name}}</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="联系方式" prop="phone">
              <Input v-model="form1Validate.phone"></Input>
            </FormItem>
            <FormItem label="电子邮箱" prop="mail">
              <Input v-model="form1Validate.mail"></Input>
            </FormItem>
            <FormItem label="政治面貌" prop="identity">
              <Select v-model="form1Validate.identity">
                <Option value="1">中共党员(含预备党员)</Option>
                <Option value="2">团员</Option>
                <Option value="3">民主党派</Option>
                <Option value="4">无党派人士</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="submitUserInfo('form1Validate')">提交</Button>
              <Button @click="userInfo = !userInfo" style="margin-left: 8px">取消</Button>
            </FormItem>
          </Form>
          </Col>
          <!-- <Col span="2" offset="4"><span class="edit"><svg-icon icon-class="edit" />&nbsp;新增</span></Col> -->
        </Row>
        <div class="resumeUserInfo" v-bind="resumeIntention">
          <div style="margin:20px 0 0 20px;font-size:18px;">求职意向</div>
          <Row v-show="!jobIntention">
            <Col span="20" style="padding-top:5px;">
            <Row style="margin-left:20px;">
              <Col style="padding-top:5px;font-size:14px;line-height:2;">
              <Row>
                <Col span="3">工作性质：</Col>
                <Col span="6">{{resumeIntention.workCharacter}}</Col>
                <Col span="3" offset="4">期望地点：</Col>
                <Col span="6">{{resumeIntention.expectPlace}}</Col>
              </Row>
              <Row>
                <Col span="3">期望行业：</Col>
                <Col span="6">{{resumeIntention.expectJob}}</Col>
                <Col span="3" offset="4">税前月薪：</Col>
                <Col span="6">{{resumeIntention.expectSalary}}</Col>
              </Row>
              <Row>
                <Col span="3">期望职业：</Col>
                <Col span="6">{{resumeIntention.expectPost}}</Col>
              </Row>
              </Col>
            </Row>
            </Col>

            <Col span="2" offset="1"><span class="edit" style="padding-left:15px;margin-top:-10px;" @click="editResumeInfo">
              <svg-icon icon-class="edit" />&nbsp;编辑</span></Col>
          </Row>
        </div>
        <Row v-show="jobIntention" class="userInfo_edit">
          <Col>
          <Form ref="form2Validate" :model="form2Validate" label-position="left" :rules="rule2Validate" :label-width="100">
            <FormItem label="工作性质" prop="workCharacter">
              <RadioGroup v-model="form2Validate.workCharacter">
                <Radio label="1">全职</Radio>
                <Radio label="2">兼职</Radio>
                <Radio label="3">实习</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="期望地点" prop="expectPlace">
              <Input v-model="form2Validate.expectPlace"></Input>
            </FormItem>
            <FormItem label="期望行业" prop="expectJob">
              <Input v-model="form2Validate.expectJob"></Input>
            </FormItem>
            <FormItem label="期望职业" prop="expectPost">
              <Input v-model="form2Validate.expectPost"></Input>
            </FormItem>
            <FormItem label="税前月薪" prop="expectSalary">
              <Select v-model="form2Validate.expectSalary">
                <Option value="1">1000元/月以下</Option>
                <Option value="2">1000-2000元/月</Option>
                <Option value="3">2001-4000元/月</Option>
                <Option value="4">4001-6000元/月</Option>
                <Option value="5">6001-8000元/月</Option>
                <Option value="6">8001-10000元/月</Option>
                <Option value="7">10001-15000元/月</Option>
                <Option value="8">15001-20000元/月</Option>
                <Option value="9">20000元/月以上</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="submitResumeInfo('form2Validate')">提交</Button>
              <Button @click="jobIntention = !jobIntention" style="margin-left: 8px">取消</Button>
            </FormItem>
          </Form>
          </Col>
        </Row>
        <div style="margin:20px 0 0 20px;font-size:18px;">项目经验</div>
        <Row v-show="!projectExp"></Row>
        <Row v-show="projectExp"></Row>
        <div style="margin:20px 0 0 20px;font-size:18px;">教育经历</div>
        <Row v-show="!educationExp"></Row>
        <Row v-show="educationExp"></Row>
      </Content>
    </Layout>
  </div>
</template>

<script>
import * as API from "@/api/resume.js";
export default {
  name: "index",
  data () {
    return {
      userInfo: false,
      jobIntention: false,
      projectExp: false,
      educationExp: false,
      provinceData:[],
      cityData1:[],
      cityData2:[],
      countyData:[],
      form1Validate: {
        id:'',
        name: '',
        gender: '',
        birthDate: '',
        workDate: '',
        birthProvince: '',
        birthCity: '',
        liveProvince: '',
        liveCity: '',
        liveCounty: '',
        phone: '',
        mail: '',
        identity: ''
      },
      rule1Validate: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthDate: [
          { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
        ],
        workDate: [
          { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
        ],
        birthProvince: [
          { required: true, type: 'number', message: '请选择户口所省份', trigger: 'change' }
        ],
        birthCity: [
          { required: true, type: 'number', message: '请选择户口所城市', trigger: 'change' }
        ],
        liveProvince: [
          { required: true, type: 'number', message: '请选择现居住省份', trigger: 'change' }
        ],
        liveCity: [
          { required: true, type: 'number', message: '请选择现居住城市', trigger: 'change' }
        ],
        liveCounty: [
          { required: true, type: 'number', message: '请选择现居住县区', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          // { type: 'phone', message: '手机号码格式不正确', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        identity: [
          { required: true, message: '请选择政治面貌', trigger: 'change' }
        ],
      },
      form2Validate: {
        id:'',
        workCharacter: '',
        expectPlace: '',
        expectJob: '',
        expectwork:'',
        expectSalary: '',
      },
      rule2Validate: {
        workCharacter: [
          { required: true, message: '请选择工作性质', trigger: 'change' }
        ],
        expectPlace: [
          { required: true, message: '请输入期望地点', trigger: 'blur' }
        ],
        expectJob: [
          { required: true, message: '请选择期望行业', trigger: 'change' }
        ],
        expectPost: [
          { required: true, message: '请选择期望职业', trigger: 'change' }
        ],
        expectSalary: [
          { required: true, message: '请选择税前月薪', trigger: 'change' }
        ]
      },
      resumeInfo: [],
      resumeIntention: []
    };
  },
  watch: {
    'form1Validate.birthProvince':function(val){
      // 如果是四个直辖市,第二级选择为对应区
      if(val == 110000) val = 110100;
      if(val == 120000) val = 120100;
      if(val == 310000) val = 310100;
      if(val == 500000) val = 500100;
      if(val){
        this.getCity(val, 1);
      }
    },
    'form1Validate.liveProvince':function(val){
      if(val){
        this.getCity(val, 2);
      }
    },
    'form1Validate.liveCity':function(val){
      if(val){
        this.getCounty(val);
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    // 获取全国各省
    getProvince () {
      API.getProvince().then(res => {
        if (res.code == 200) {
          this.provinceData = res.result;
        }
      });
    },
    // 获取对应省份下的各市
    getCity (val, type) {
      API.getCity({
        pid: val,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          type == 1 ? this.cityData1 = _data : this.cityData2 = _data;
        }
      });
    },
    // 获取对应市下的各个区县
    getCounty (val) {
      API.getCity({
        pid: val,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          this.countyData = res.result;
        }
      });
    },
    // 点击编辑按钮，获取用户信息
    editUserInfo () {
      API.queryUserInfoById({
        userId: sessionStorage.getItem('userId')
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          this.form1Validate = _data;
        }
        this.userInfo = !this.userInfo
      });
    },
    // 提交用户信息
    submitUserInfo (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.form1Validate)
          API.updateJobIntention({
            userId: sessionStorage.getItem('userId'),
            userInfo: this.form1Validate
          }).then(res => {
            if (res.code == 200) {
              this.userInfo = !this.userInfo;
              this.$Message.success('Success!');
            }
          });
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    // 获取用户简历信息
    editResumeInfo () {
      API.queryJobIntentionById({
        userId: sessionStorage.getItem('userId')
       
      }).then(res => {
        if (res.code == 200) {
          this.form2Validate = res.result;
          this.jobIntention = !this.jobIntention
        }
      });
    },
    // 提交用户简历信息
    submitResumeInfo (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.form2Validate)
          API.updateUserInfo({
            userId: sessionStorage.getItem('userId'),
            jobIntention: this.form2Validate
          }).then(res => {
            if (res.code == 200) {
              this.jobIntention = !this.jobIntention;
              this.$Message.success('Success!');
            }
          });
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    initData () {
      API.queryUserInfo({
        userId: sessionStorage.getItem('userId')
      }).then(res => {
        if (res.code == 200) {
          // 200 代表此用户已经填写过用户信息，
          // 显示展示数据的div
          // this.userInfo = false;
          let _data = res.result;
          this.resumeInfo = _data;
          console.log(_data);
        } else {
          // 900 代表用户还没录入过信息
          // 显示数据填写的div
          // this.userInfo = true;
        }
      });
      API.resumeIntention({
        userId: sessionStorage.getItem('userId')
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          this.resumeIntention = _data;
          // this.jobIntention = false;
          console.log(_data);
        }else {
          // tthis.jobIntention = true;
        }
      });
    }
  },
  created () {
    this.initData();
    this.getProvince();
  }
};
</script>

<style scoped>
span {
  font-size: 15px;
  vertical-align: middle;
}
.layout {
  width: 1000px;
  border: 0;
}
.header {
  padding: 5px 20px;
  background-color: #fff;
}
.header span {
  font-size: 24px;
}
.content {
  margin-top: 25px;
  background-color: #fff;
}
.userInfo_show {
  background-color: #fff;
  padding-left: 20px;
}
.userInfo_edit {
  width: 80%;
  margin: auto;
  background-color: #f8f8f8;
  padding: 20px 15px;
}
.manImage {
  width: 116px;
  height: 116px;
}
.addressInfo {
  padding: 15px 0;
}
.addressInfo span {
  padding: 0 20px;
}
.contactInfo svg {
  font-size: 18px;
  margin-left: -4px;
  margin-right: 10px;
  vertical-align: middle;
}
.edit {
  cursor: pointer;
  display: inline-block;
  padding-top: 7px;
}
.edit:hover {
  color: #1787fb;
}
</style>
