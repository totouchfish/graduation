<template>
  <Layout class="layout">
    <div class="title">查看发布岗位</div>
    <Row class="content">
      <Form ref="formValidate" :model="formValidate" label-position="right" :label-width="85">
        <FormItem label="岗位名称:">
          <p>{{formValidate.p_name}}</p>
        </FormItem>
        <FormItem label="岗位职责:">
          <!-- <div v-model="formValidate.workDuties"></div> -->
          <p>{{formValidate.workDuties}}</p>
        </FormItem>
        <FormItem label="岗位要求:">
          <!-- <div v-model="formValidate.workClaim"></div> -->
          <p>{{formValidate.workClaim}}</p>
        </FormItem>
        <FormItem label="岗位福利:">
          <p>{{formValidate.workWelfare}}</p>
          <!-- <Select v-model="formValidate.workWelfare" multiple>
            <Option v-for="item in workWelfareData" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select> -->
        </FormItem>
        <FormItem label="职能类型:">
          <p>{{formValidate.functionTypeName}}</p>
          <!-- <Select v-model="formValidate.functionType">
            <Option v-for="(item, index) in functionTypeLists" :key="index" :value="item.code">{{item.name}}</Option>
          </Select> -->
        </FormItem>
        <FormItem label="工作地点:">
          <Row>
            <Col span="7">
            <FormItem prop="workProvince">
              <p>{{formValidate.workProvince}}</p>
              <!-- <Select v-model="formValidate.workProvince" placeholder="请选择省份" style="widt:30%;">
                <Option v-for="(item,index) in provinceData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select> -->
            </FormItem>
            </Col>
            <Col span="7" offset="1">
            <FormItem prop="workCity">
              <p>{{formValidate.workCity}}</p>
              <!-- <Select v-model="formValidate.workCity" placeholder="请选择城市" style="widt:30%;">
                <Option v-for="(item,index) in cityData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select> -->
            </FormItem>
            </Col>
            <!-- <Col span="7" offset="1">
            <FormItem prop="detailAdr">
              <Select v-model="formValidate.detailAdr" placeholder="请选择区县">
                <Option v-for="(item,index) in countyData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select>
            </FormItem>
            </Col> -->
          </Row>
        </FormItem>
        <FormItem label="工作性质:" prop="employeeType">
          <p>{{formValidate.employeeType}}</p>
          <!-- <Select v-model="formValidate.employeeType">
            <Option value="1">不限</Option>
            <Option value="2">应届</Option>
            <Option value="3">实习</Option>
            <Option value="4">兼职</Option>
          </Select> -->
        </FormItem>
        <FormItem label="学历要求:" prop="degree">
          <p>{{formValidate.degree}}</p>
          <!-- <Select v-model="formValidate.degree">
            <Option value="1">高中及以上</Option>
            <Option value="2">中专及以上</Option>
            <Option value="3">大专及以上</Option>
            <Option value="4">本科及以上</Option>
            <Option value="5">硕士及以上</Option>
            <Option value="6">博士及以上</Option>
            <Option value="9">不限</Option>
          </Select> -->
        </FormItem>
        <FormItem label="年龄要求:" prop="age">
          <p>{{formValidate.age}}</p>
          <!-- <Select v-model="formValidate.age">
            <Option value="1">20岁以下</Option>
            <Option value="2">20-25岁</Option>
            <Option value="3">25-30岁</Option>
            <Option value="4">35-40岁</Option>
            <Option value="5">40-45岁</Option>
            <Option value="6">45-50岁</Option>
            <Option value="9">不限</Option>
          </Select> -->
        </FormItem>
        <FormItem label="工作经验:" prop="workYears">
          <p>{{formValidate.workYears}}</p>
          <!-- <Select v-model="formValidate.workYears">
            <Option value="1">1年以下</Option>
            <Option value="2">1-3年</Option>
            <Option value="3">3-5年</Option>
            <Option value="4">5年以上</Option>
            <Option value="9">不限</Option>
          </Select> -->
        </FormItem>
        <FormItem label="税前月薪:">
          <p>{{formValidate.salary}}</p>
          <!-- <Select v-model="formValidate.salary">
            <Option value="10">面议</Option>
            <Option value="1">1k/月以下</Option>
            <Option value="2">1k-2k/月</Option>
            <Option value="3">2k-4k/月</Option>
            <Option value="4">4k-6k/月</Option>
            <Option value="5">6k-8k/月</Option>
            <Option value="6">8k-10k/月</Option>
            <Option value="7">10k-15k/月</Option>
            <Option value="8">15k-20k/月</Option>
            <Option value="9">20k/月以上</Option>
          </Select> -->
        </FormItem>
        <FormItem>
          <Button type="primary" @click="back()">返 回</Button>
          <!-- <Button @click="canel()" style="margin-left: 8px">取消</Button> -->
        </FormItem>
      </Form>
    </Row>
  </Layout>
</template>
<script>
// 引入常用变量
import commonData from "@/common/commonData";
import * as API from "@/api/company.js";

export default {
  data () {
    return {
      //userType: sessionStorage.getItem('userType') || 1,
      id: '',
      formValidate: {
        p_name: '',
        workDuties: '',
        workClaim: '',
        workWelfare: '',
        functionType: '',
        workProvince: '',
        workCity: '',
        detailAdr: '',
        employeeType: '',
        degree: '',
        age: '',
        workYears: '',
        salary: ''
      },
      functionTypeLists: commonData.functionTypeLists,
      provinceData: [],
      cityData: [],
      countyData: [],
    };
  },
  methods: {
    initData () {
      API.queryPositionInfoById({
        pid: this.id
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.workProvince = Number(_data.workProvince);
          _data.workCity = Number(_data.workCity);
          _data.detailAdr = Number(_data.detailAdr);
          this.formValidate = res.result;
        }
      });
    },
    back () {
      this.$router.push({ name: 'recruitment' });
    }
  },
  created () {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.initData();
    }
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
  margin-top: 10px;
  margin-bottom: 20px;
}
.content {
  width: 90%;
  margin: 0 auto;
  /* background-color: #f8f8f8; */
  /* padding: 20px 15px; */
}
</style>