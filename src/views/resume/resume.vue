<template>
  <div>
    <Layout class="layout">
      <Header>
        <div class="header">
          <span>我的简历</span>
        </div>
      </Header>
      <Content class="content">
        <div style="margin:20px;font-size:18px;">个人信息</div>
        <Row v-show="userInfo" class="userInfo_show">
          <Col span="4" style="width:135px;">
          <img src="@/assets/images/man.jpg" class="manImage">
          </Col>
          <Col span="14">
          <Row>
            <Col span="14" style="padding-top:5px;">
            <span style="font-size:24px;padding-right:20px;">孔亚楠</span>
            <span>更新时间:</span>&emsp;<span>2020-02-16 17:07</span>
            </Col>
          </Row>
          <Row>
            <Col class="addressInfo"><span style="padding-left:0;">男</span>|<span>25岁</span>|<span>邯郸</span>|<span>3年经验</span></Col>
          </Row>
          <Row>
            <Col class="contactInfo">
            <svg-icon icon-class="phone" /><span>17600625303</span>
            <svg-icon icon-class="email" style="margin:0 20px 0 25px;" /><span>six_heart@163.com</span>
            </Col>
          </Row>
          </Col>
          <Col span="2" offset="4"><span class="edit">
            <svg-icon icon-class="edit" />&nbsp;新增</span></Col>
        </Row>
        <Row v-show="!userInfo" class="userInfo_edit">
          <Col>
          <Form ref="formValidate" :model="formValidate" label-position="left" :rules="ruleValidate" :label-width="100">
            <Row>
              <Col span="10">
              <FormItem label="姓名" prop="name">
                <Input v-model="formValidate.name" placeholder="Enter your name" style="width:194px;"></Input>
              </FormItem>
              <FormItem label="性别" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                  <Radio label="male">男</Radio>
                  <Radio label="female">女</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="出生年月" prop="date">
                <DatePicker type="date" placeholder="Select date" v-model="formValidate.birthDate"></DatePicker>
              </FormItem>
              <FormItem label="参加工作时间" prop="date">
                <DatePicker type="date" placeholder="Select date" v-model="formValidate.workDate"></DatePicker>
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
                <FormItem prop="address">
                  <Select v-model="formValidate.birthProvince" placeholder="Select your city" style="widt：30%;">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="7" offset="1">
                <FormItem prop="address">
                  <Select v-model="formValidate.birthCity" placeholder="Select your city" style="widt：30%;">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="现居住城市">
              <Row>
                <Col span="8">
                <FormItem prop="address">
                  <Select v-model="formValidate.liveProvince" placeholder="Select your city">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="7" offset="1">
                <FormItem prop="address">
                  <Select v-model="formValidate.liveCity" placeholder="Select your city">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                  </Select>
                </FormItem>
                </Col>
                <Col span="7" offset="1">
                <FormItem prop="address">
                  <Select v-model="formValidate.liveCounty" placeholder="Select your city">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="联系方式" prop="phone">
              <Input v-model="formValidate.phone" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="电子邮箱" prop="mail">
              <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
            </FormItem>
            <FormItem label="政治面貌" prop="identity">
              <Select v-model="formValidate.identity" placeholder="Select your city">
                <Option value="1">中共党员(含预备党员)</Option>
                <Option value="2">团员</Option>
                <Option value="3">民主党派</Option>
                <Option value="4">无党派人士</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
              <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
          </Form>
          </Col>
          <!-- <Col span="2" offset="4"><span class="edit"><svg-icon icon-class="edit" />&nbsp;新增</span></Col> -->
        </Row>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "index",
  data () {
    return {
      userInfo: false,
      formValidate: {
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
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        address: [
          { required: true, message: 'Please select the address', trigger: 'change' }
        ],
        phone: [
          { required: true, message: 'phone cannot be empty', trigger: 'blur' },
          { type: 'phone', message: 'Incorrect phone format', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        identity: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
      }
    };
  },
  watch: {
  },
  components: {},
  computed: {},
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  },
  created () {

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
  background-color: #f8f8f8;
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
