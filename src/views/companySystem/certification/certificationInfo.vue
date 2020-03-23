<template>
  <Layout class="layout">
    <div class="title">企业信息</div>   
    <Row class="content">
      <Form ref="formValidate" :model="formValidate" label-position="right" :rules="ruleValidate" :label-width="135">
        <FormItem label="企业全称:" prop="companyName">
          <Input v-model="formValidate.companyName"></Input>
        </FormItem>
        <FormItem label="营业执照注册号:" prop="companyId">
          <Input v-model="formValidate.companyId"></Input>
        </FormItem>
        <FormItem label="法人姓名:" prop="legalPersonName">
          <Input v-model="formValidate.legalPersonName"></Input>
        </FormItem>
        <FormItem label="法人身份证号:" prop="legalPersonId">
          <Input v-model="formValidate.legalPersonId"></Input>
        </FormItem>
        <FormItem label="企业联系电话:" prop="companyPhone">
          <Input v-model="formValidate.companyPhone"></Input>
        </FormItem>
        <FormItem label="企业官网地址:">
          <Input v-model="formValidate.companyUrl"></Input>
        </FormItem>
        <FormItem label="企业所在地址:" prop="none">
          <Row>
            <Col span="7">
            <FormItem prop="companyProvince">
              <Select v-model="formValidate.companyProvince" placeholder="企业所在省份" style="widt:30%;">
                <Option v-for="(item,index) in provinceData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="7" offset="1">
            <FormItem prop="companyCity">
              <Select v-model="formValidate.companyCity" placeholder="企业所在城市" style="widt:30%;">
                <Option v-for="(item,index) in cityData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="7" offset="1">
            <FormItem prop="companyCounty">
              <Select v-model="formValidate.companyCounty" placeholder="企业所在区县">
                <Option v-for="(item,index) in countyData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="企业详细地址:" prop="companyAddress">
          <Input v-model="formValidate.companyAddress"></Input>
        </FormItem>
        <!-- <FormItem label="工作性质:" prop="workCharacter">
          <Select v-model="formValidate.workCharacter">
            <Option value="1">不限</Option>
            <Option value="2">应届</Option>
            <Option value="3">实习</Option>
          </Select>
        </FormItem> -->
        <FormItem style="margin-left:30%;margin-top:30px;">
          <Button type="primary" @click="submit('formValidate')">修 改</Button>
          <!-- <Button @click="canel()" style="margin-left: 8px">取消</Button> -->
        </FormItem>
      </Form>
    </Row>
    <Row>
      <!-- 认证之后展示认证信息 -->
    </Row>
  </Layout>
</template>
<script>
// 引入常用变量
import commonData from "@/common/commonData.js";
import * as API from "@/api/company.js";
import * as API2 from "@/api/common.js";

export default {
  data () {
    const noCheck = (rule, value, callback) => {
      callback();
    };
    return {
      userType: sessionStorage.getItem('userType') || 1,
      formValidate: {
        companyName: '',
        companyId: '',
        legalPersonName: '',
        legalPersonId: '',
        companyPhone: '',
        companyUrl: '',
        companyProvince: '',
        companyCity: '',
        companyCounty: '',
      },
      provinceData: [],
      cityData: [],
      countyData: [],
      ruleValidate: {
        companyName: [
          { required: true, message: '请输入企业全称', trigger: 'blur' }
        ],
        companyId: [
          { required: true, message: '请输入企业营业执照注册号', trigger: 'blur' }
        ],
        legalPersonName: [
          { required: true, message: '请输入法人姓名', trigger: 'blur' }
        ],
        legalPersonId: [
          { required: true, message: '请输入法人身份证号', trigger: 'blur' }
        ],
        companyPhone: [
          { required: true, message: '请输入企业联系电话', trigger: 'blur' }
        ],
        companyProvince: [
          { required: true, message: '请选择企业所在省份', trigger: 'change' }
        ],
        companyCity: [
          { required: true, message: '请选择企业所在城市', trigger: 'change' }
        ],
        companyCounty: [
          { required: true, message: '请选择企业所在区县', trigger: 'change' }
        ],
        companyAddress: [
          { required: true, message: '请输入企业详细地址', trigger: 'blur' }
        ],
        none: [
          { required: true, validator: noCheck}
        ]
      },
    };
  },
  watch:{
    'formValidate.companyProvince': function (val) {
      if (val) {
        this.getCity(val);
      }
    },
  },
  methods: {
    // 获取全国各省
    getProvince () {
      API2.getProvince().then(res => {
        if (res.code == 200) {
          this.provinceData = res.result;
        }
      });
    },
    // 获取对应省份下的各市
    getCity (val) {
      API2.getCity({
        pid: val,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          this.cityData = _data;
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
    // 提交用户简历信息
    submit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.form2Validate)
          // API.updateUserInfo({
          //   userId: sessionStorage.getItem('userId'),
          //   jobIntention: this.form2Validate
          // }).then(res => {
          //   if (res.code == 200) {
          //     this.jobIntention = !this.jobIntention;
          //     this.$Message.success('Success!');
          //   }
          // });
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    canel () {
      this.formValidate = [];
      this.$router.push({ name: 'recruitment' });
    }
  },
  created(){
    this.getProvince();
  }
}
</script>
<style scoped>
.layout {
  width: 1000px;
  border: 0;
  background-color: #fff;
  padding: 15px;
  border-radius: 0.5em;
}
.title {
  border-left: 5px solid #2d8cf0;
  padding-left: 10px;
  font-size: 18px;
  height: 24px;
  margin-bottom: 20px;
}
.content {
  width: 90%;
  margin: 0 auto;
  /* background-color: #f8f8f8; */
  /* padding: 20px 15px; */
}
</style>