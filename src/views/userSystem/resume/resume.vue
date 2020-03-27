<template>
  <div>
    <Layout class="layout">
      <Header>
        <div class="header">
          <Row>
            <Col span="4">
            <span>我的简历</span>
            </Col>
            <Col span="2" offset="18">
            <Button icon="ios-eye" @click="preview()">预览</Button>
            <!-- <span>预览、下载</span> -->
            </Col>
          </Row>
        </div>
      </Header>
      <Content class="content">
        <div class="resumeUserInfo">
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
              <Col class="addressInfo"><span style="padding-left:0;">{{resumeInfo.gender}}</span>|<span>{{resumeInfo.birthDate}}岁</span>|<span>{{resumeInfo.birthProvince}}{{resumeInfo.birthCity}}</span></span>|<span>{{resumeInfo.workDate}}年经验</span></Col>
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
          <Row v-show="userInfo" class="userInfo_edit">
            <Col>
            <Form ref="form1Validate" :model="form1Validate" label-position="right" :rules="rule1Validate" :label-width="125">
              <Row>
                <Col span="10">
                <FormItem label="姓名：" prop="name">
                  <Input v-model="form1Validate.name" style="width:194px;"></Input>
                </FormItem>
                <FormItem label="性别：" prop="gender">
                  <RadioGroup v-model="form1Validate.gender">
                    <Radio label="1">男</Radio>
                    <Radio label="2">女</Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem label="出生年月：" prop="birthDate">
                  <DatePicker type="date" v-model="form1Validate.birthDate"></DatePicker>
                </FormItem>
                <FormItem label="参加工作时间：" prop="workDate">
                  <DatePicker type="date" v-model="form1Validate.workDate"></DatePicker>
                </FormItem>
                </Col>
                <Col span="6" offset="8">
                <Upload :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-exceeded-size="handleMaxSize" :on-format-error="handleFormatError" :data="{'userId': userId}" :action="url" style="display: inline-block;">
                  <div class="uploadButton">选择文件&ensp;</div>
                </Upload>
                <img src="@/assets/images/man.jpg" style="width:100px;height:100px;">
                <p>支持JPG、JPEG、PNG格式,大小不要超过2M,建议使用一寸证件照70*100像素</p>
                </Col>
              </Row>
              <FormItem label="户口所在地：" prop="none">
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
              <FormItem label="现居住城市：" prop="none">
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
              <FormItem label="联系方式：" prop="phone">
                <Input v-model="form1Validate.phone"></Input>
              </FormItem>
              <FormItem label="电子邮箱：" prop="mail">
                <Input v-model="form1Validate.mail"></Input>
              </FormItem>
              <FormItem label="政治面貌：" prop="identity">
                <Select v-model="form1Validate.identity">
                  <Option value="1">中共党员(含预备党员)</Option>
                  <Option value="2">团员</Option>
                  <Option value="3">民主党派</Option>
                  <Option value="4">无党派人士</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="submitUserInfo('form1Validate')">提交</Button>
                <Button @click="userInfo = !userInfo;form1Validate = {};" style="margin-left: 8px">取消</Button>
              </FormItem>
            </Form>
            </Col>
            <!-- <Col span="2" offset="4"><span class="edit"><svg-icon icon-class="edit" />&nbsp;新增</span></Col> -->
          </Row>
        </div>
        <div class="resumeUserInfo">
          <div style="margin:20px 0 0 20px;font-size:18px;">求职意向</div>
          <Row v-show="!jobIntention">
            <Col span="20" style="padding-top:5px;">
            <Row style="margin-left:20px;">
              <Col style="padding-top:5px;font-size:14px;line-height:2;">
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
              </Col>
            </Row>
            </Col>

            <Col span="2" offset="1"><span class="edit" style="padding-left:15px;margin-top:-10px;" @click="editIntentionInfo">
              <svg-icon icon-class="edit" />&nbsp;编辑</span></Col>
          </Row>
          <Row v-show="jobIntention" class="userInfo_edit">
            <Col>
            <Form ref="form2Validate" :model="form2Validate" label-position="left" :rules="rule2Validate" :label-width="100">
              <FormItem label="工作性质：" prop="workCharacter">
                <RadioGroup v-model="form2Validate.workCharacter">
                  <Radio label="1">全职</Radio>
                  <Radio label="2">兼职</Radio>
                  <Radio label="3">实习</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="期望地点：" prop="expectPlace">
                <Input v-model="form2Validate.expectPlace"></Input>
              </FormItem>
              <FormItem label="期望行业：" prop="expectJob">
                <Input v-model="form2Validate.expectJob"></Input>
              </FormItem>
              <FormItem label="期望职业：" prop="expectPost">
                <Input v-model="form2Validate.expectPost"></Input>
              </FormItem>
              <FormItem label="税前月薪：" prop="expectSalary">
                <Select v-model="form2Validate.expectSalary">
                  <Option value="1">1k元/月以下</Option>
                  <Option value="2">1k-2k元/月</Option>
                  <Option value="3">2k-4k元/月</Option>
                  <Option value="4">4k-6k元/月</Option>
                  <Option value="5">6k-8k元/月</Option>
                  <Option value="6">8k-10k元/月</Option>
                  <Option value="7">10k-15k元/月</Option>
                  <Option value="8">15k-20k元/月</Option>
                  <Option value="9">20k元/月以上</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="submitIntentionInfo('form2Validate')">提交</Button>
                <Button @click="jobIntention = !jobIntention;form2Validate = {};" style="margin-left: 8px">取消</Button>
              </FormItem>
            </Form>
            </Col>
          </Row>

        </div>
        <div class="resumeUserInfo">
          <div style="margin:20px 0 0 20px;font-size:18px;">项目经历</div>
          <Row v-show="!projectExp">
            <Col span="4" offset="20">
            <span class="edit" style="padding-left:15px;margin-top:-70px;" @click="addProjectExp()">
              <svg-icon icon-class="edit" />&nbsp;添加项目经历</span></Col>
          </Row>
          <Row v-show="!projectExp">
            <Col span="20">
            <Card v-for="(item, index) in projectExpData" :key="index" class="projectItem">
              <Row>
                <Col span="21">
                <span>项目名称：</span>
                <p>{{item.projectName}}</p>
                </Col>
                <Col span="2" offset="1">
                <span class="edit" style="padding-left:15px;margin-top:-10px;" @click="editProjectExp(item)">
                  <svg-icon icon-class="edit" />&nbsp;编辑</span>
                </Col>
              </Row>
              <Row>
                <span>项目日期：</span>
                <p>{{item.startTime}} - {{item.endTime}}</p>
              </Row>
              <Row>
                <span>项目描述：</span>
                <p>{{item.projectDesc}}</p>
              </Row>
              <Row>
                <span>个人职责：</span>
                <p>{{item.personalWork}}</p>
              </Row>
            </Card>
            </Col>
            <!-- <Col span="4">
            <span class="edit" style="padding-left:15px;margin-top:-70px;" @click="addProjectExp()">
              <svg-icon icon-class="edit" />&nbsp;添加项目经历</span></Col> -->
          </Row>
          <Row v-show="projectExp" class="userInfo_edit">
            <Col>
            <Form ref="form3Validate" :model="form3Validate" label-position="right" :rules="rule3Validate" :label-width="100">
              <FormItem label="项目名称：" prop="projectName">
                <Input v-model="form3Validate.projectName"></Input>
              </FormItem>
              <FormItem label="项目时间：" prop="projectDate">
                <DatePicker v-model="form3Validate.projectDate" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
              </FormItem>
              <FormItem label="项目描述：" prop="projectDesc">
                <Input type="textarea" :autosize="true" v-model="form3Validate.projectDesc"></Input>
              </FormItem>
              <FormItem label="个人职责：" prop="personalWork">
                <Input type="textarea" :autosize="true" v-model="form3Validate.personalWork"></Input>
              </FormItem>
              <FormItem label="所属公司：" prop="companyName">
                <Input v-model="form3Validate.companyName"></Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="submitProjectExp('form3Validate')">提交</Button>
                <Button @click="projectExp = !projectExp;form3Validate = {};" style="margin-left: 8px">取消</Button>
              </FormItem>
            </Form>
            </Col>
            <Col>
            <!-- 12312312312313 -->
            </Col>
          </Row>
        </div>
        <div class="resumeUserInfo">
          <div style="margin:20px 0 0 20px;font-size:18px;">教育经历</div>
          <Row v-show="!educationExp">
            <Col span="4" offset="20">
            <span class="edit" style="padding-left:15px;margin-top:-70px;" @click="addEducationExp()">
              <svg-icon icon-class="edit" />&nbsp;添加教育经历</span></Col>
          </Row>
          <Row v-show="!educationExp">
            <Col span="20">
            <Card v-for="(item, index) in educationExpData" :key="index" class="projectItem">
              <Row>
                <Col span="6">
                <span>{{item.schoolName}}</span>
                </Col>
                <Col span="7">
                <span>{{item.major}}</span>
                </Col>
                <Col span="2">
                <span>{{item.degree}}</span>
                </Col>
                <Col span="7">
                <span>{{item.startDate}} - {{item.endDate}}</span>
                </Col>
                <Col span="2">
                <span class="edit" style="padding-left:15px;margin-top:-10px;" @click="editEducationExp(item)">
                  <svg-icon icon-class="edit" />&nbsp;编辑</span>
                </Col>
              </Row>
            </Card>
            </Col>
            <!-- <Col span="4">
            <span class="edit" style="padding-left:15px;margin-top:-70px;" @click="addEducationExp()">
              <svg-icon icon-class="edit" />&nbsp;添加教育经历</span></Col> -->
          </Row>
          <Row v-show="educationExp" class="userInfo_edit">
            <Col>
            <Form ref="form4Validate" :model="form4Validate" label-position="right" :rules="rule4Validate" :label-width="100">
              <FormItem label="学校名称：" prop="schoolName">
                <Input v-model="form4Validate.schoolName"></Input>
              </FormItem>
              <FormItem label="就读时间：" prop="studyDate">
                <DatePicker v-model="form4Validate.studyDate" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></DatePicker>
              </FormItem>
              <FormItem label="所学专业：" prop="major">
                <Input type="textarea" :autosize="true" v-model="form4Validate.major"></Input>
              </FormItem>
              <FormItem label="是否统招：" prop="isUnified">
                <RadioGroup v-model="form4Validate.isUnified">
                  <Radio label="1">是</Radio>
                  <Radio label="0">否</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="学历：" prop="degree">
                <Select v-model="form4Validate.degree">
                  <Option value="1">高中</Option>
                  <Option value="2">中专</Option>
                  <Option value="3">大专</Option>
                  <Option value="4">本科</Option>
                  <Option value="5">硕士</Option>
                  <Option value="6">博士</Option>
                  <Option value="9">其他</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="submitEducationExp('form4Validate')">提交</Button>
                <Button @click="educationExp = !educationExp;form4Validate = {};" style="margin-left: 8px">取消</Button>
              </FormItem>
            </Form>
            </Col>
            <Col>
            </Col>
          </Row>
        </div>
        <!-- <Row v-show="!educationExp"></Row>
        <Row v-show="educationExp"></Row> -->
      </Content>
    </Layout>
  </div>
</template>

<script>
import * as API from "@/api/user.js";
import * as API2 from "@/api/common.js";
import tool from "@/utils/formatDate";
import switchFont from "@/utils/switchFont";

export default {
  name: "index",
  data () {
    const noCheck = (rule, value, callback) => {
      callback();
    };
    return {
      url: '',
      userId: sessionStorage.getItem('userId'),
      userInfo: false,
      jobIntention: false,
      projectExp: false,
      educationExp: false,
      provinceData: [],
      cityData1: [],
      cityData2: [],
      countyData: [],
      form1Validate: {
        id: '',
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
        none: [
          { required: true, validator: noCheck }
        ]
      },
      form2Validate: {
        id: '',
        workCharacter: '',
        expectPlace: '',
        expectJob: '',
        expectwork: '',
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
          { required: true, message: '请输入期望行业', trigger: 'blur' }
        ],
        expectPost: [
          { required: true, message: '请输入期望职业', trigger: 'blur' }
        ],
        expectSalary: [
          { required: true, message: '请选择税前月薪', trigger: 'change' }
        ]
      },
      form3Validate: {
        proId: '',
        projectName: '',
        projectDate: [new Date(), new Date()],
        startTime: '',
        endTime: '',
        projectDesc: '',
        personalWork: '',
        companyName: '',
        resumeId: ''
      },
      rule3Validate: {
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ],
        projectDate: [
          { required: true, type: 'array', min: 1, message: '请选择日期', trigger: 'change' }
        ],
        projectDesc: [
          { required: true, message: '请输入项目描述', trigger: 'blur' }
        ],
        personalWork: [
          { required: true, message: '请输入个人职责', trigger: 'blur' }
        ],
        companyName: [
          { required: true, message: '请输入所属公司', trigger: 'blur' }
        ]
      },
      form4Validate: {
        eduId: '',
        schoolName: '',
        studyDate: [new Date(), new Date()],
        major: '',
        isUnified: '1',
        degree: '',
        resumeId: ''
      },
      rule4Validate: {
        schoolName: [
          { required: true, message: '请输入学校名称', trigger: 'blur' }
        ],
        studyDate: [
          { required: true, type: 'array', min: 1, message: '请选择日期', trigger: 'change' }
        ],
        major: [
          { required: true, message: '请输入所学专业', trigger: 'blur' }
        ],
        isUnified: [
          { required: true, message: '请选择是否统招', trigger: 'change' }
        ],
        degree: [
          { required: true, message: '请选学历', trigger: 'change' }
        ]
      },
      resumeInfo: [],
      resumeIntention: [],
      projectExpData: [],
      educationExpData: []
    };
  },
  watch: {
    'form1Validate.birthProvince': function (val) {
      // 如果是四个直辖市,第二级选择为对应区
      if (val == 110000) val = 110100;
      if (val == 120000) val = 120100;
      if (val == 310000) val = 310100;
      if (val == 500000) val = 500100;
      if (val) {
        this.getCity(val, 1);
      }
    },
    'form1Validate.liveProvince': function (val) {
      if (val) {
        this.getCity(val, 2);
      }
    },
    'form1Validate.liveCity': function (val) {
      if (val) {
        this.getCounty(val);
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    handleMaxSize (file) {
      this.$Notice.warning({
        title: "图片大小超过限制",
        desc: file.name + " 图片超过2M，请重新上传。"
      });
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: "格式不正确",
        desc: "请选择JPG、JPEG、PNG格式的图片"
      });
    },
    handleSuccess (res, file) {
      if (res.result) {
        this.$Message.success("图片上传成功！");
        this.uploadList = [];
        this.imgUrl = '@/assets/images/man.jpg';
      }
    },
    preview () {
      this.$router.push('/preview');
    },
    // 获取全国各省
    getProvince () {
      API2.getProvince().then(res => {
        if (res.code == 200) {
          this.provinceData = res.result;
        }
      });
    },
    // 获取对应省份下的各市
    getCity (val, type) {
      API2.getCity({
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
      API2.getCity({
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
        userId: this.userId
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          // select组件的value类型是number类型,接口返回的是string类型，所以需要转换一下
          _data.birthProvince = Number(_data.birthProvince);
          _data.birthCity = Number(_data.birthCity);
          _data.liveProvince = Number(_data.liveProvince);
          _data.liveCity = Number(_data.liveCity);
          _data.liveCounty = Number(_data.liveCounty);
          this.form1Validate = _data;
          console.log(this.form1Validate);
        }

        this.userInfo = !this.userInfo;
      });
    },
    // 提交用户信息
    submitUserInfo (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let _data = this.form1Validate;
          _data.id = this.userId;
          API.updateUserInfo(_data).then(res => {
            if (res.code == 200) {
              this.userInfo = !this.userInfo;
              this.initData();
              this.$Message.success('Success!');
            }
          });
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    // 获取简历求职意向信息
    editIntentionInfo () {
      API.queryJobIntentionById({
        userId: this.userId

      }).then(res => {
        if (res.code == 200) {
          this.form2Validate = res.result;
        }
        this.jobIntention = !this.jobIntention;
      });
    },
    // 提交简历求职意向信息
    submitIntentionInfo (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let _data = this.form2Validate;
          _data.id = this.userId;
          API.updateJobIntention(_data).then(res => {
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
    //添加项目经历
    addProjectExp () {
      this.projectExp = !this.projectExp;
    },
    // 获取用户项目经历
    editProjectExp (item) {
      API.queryProjectById({
        proId: item.proId,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result[0];
          _data.projectDate = [_data.startTime, _data.endTime];
          this.form3Validate = _data;
          // debugger
          this.projectExp = !this.projectExp;
        } else {
          this.$Message.error('error');
        }
      });
    },
    submitProjectExp (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.form3Validate.startTime = tool.formatDate2(this.form3Validate.projectDate[0]);
          this.form3Validate.endTime = tool.formatDate2(this.form3Validate.projectDate[1]);
          let _data = this.form3Validate;
          _data.resumeId = this.resumeInfo.id;
          API.submitProject(_data).then(res => {
            if (res.code == 200) {
              this.projectExp = !this.projectExp;
              this.initData();
              this.$Message.success('Success!');
            }
          });
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    //添加项目经历
    addEducationExp () {
      this.form4Validate = {};
      this.educationExp = !this.educationExp;
    },
    //通过教育背景项id获取教育背景信息
    editEducationExp (item) {
      API.queryEducationById({
        eduId: item.eduId,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result[0];
          // 不是转换，projectDate是一个数组，把start和end拼进去就可以了
          _data.studyDate = [_data.startDate, _data.endDate];
          _data.isUnified = String(_data.isUnified);
          this.form4Validate = _data;
          this.educationExp = !this.educationExp;
        } else {
          this.$Message.error('error呀')
        }
      });
    },
    submitEducationExp (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.form4Validate.startDate = tool.formatDate2(this.form4Validate.studyDate[0]);
          this.form4Validate.endDate = tool.formatDate2(this.form4Validate.studyDate[1]);
          let _data = this.form4Validate;
          _data.resumeId = this.resumeInfo.id;//这行代码是干啥的
          API.submitEducation(_data).then(res => {
            if (res.code == 200) {
              this.educationExp = !this.educationExp;
              this.initData();
              this.$Message.success('Success!');
            }
          });
        } else {
          this.$Message.error('Fail!');
        }
      })
    },

    initData () {
      // 获取用户简历所有数据
      API.queryResume({
        userId: this.userId
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
          let _projectData = res.result.projects;
          _projectData.forEach(item => {
            item.startTime = tool.translateTime1(item.startTime);
            item.endTime = tool.translateTime1(item.endTime);
          });
          this.projectExpData = _projectData;
          // 教育经历
          let _studyData = res.result.educations;
          _studyData.forEach(item => {
            item.startDate = tool.translateTime1(item.startDate);
            item.endDate = tool.translateTime1(item.endDate);
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
  padding: 25px 15px 20px 5px;
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
.projectItem {
  width: 113%;
  margin: 10px 0 20px 20px;
  /* background-color: #eee; */
  /* padding: 10px 0 10px 20px; */
}
.projectItem p {
  display: inline-block;
  width: 83%;
  vertical-align: top;
}
.uploadButton {
  cursor: pointer;
  color: #1787fb;
}
</style>
