<template>
  <Layout class="layout">
    <!-- 添加发布岗位 -->
    <div class="title">添加发布岗位</div>
    <Row class="content">
      <Form ref="formValidate" :model="formValidate" label-position="right" :rules="ruleValidate" :label-width="85">
        <FormItem label="岗位名称:" prop="p_name">
          <Input v-model="formValidate.p_name"></Input>
        </FormItem>
        <FormItem label="岗位职责:" prop="workDuties">
          <Input type="textarea" :rows="3" v-model="formValidate.workDuties"></Input>
        </FormItem>
        <FormItem label="岗位要求:" prop="workClaim">
          <Input type="textarea" :rows="3" v-model="formValidate.Duties"></Input>
        </FormItem>
        <FormItem label="岗位福利:" prop="workWelfare">
          <Select v-model="formValidate.workWelfare" multiple>
            <Option v-for="item in workWelfareData" :value="item.value" :key="item.value">{{ item.value }}</Option>
          </Select>
        </FormItem>
        <!-- <FormItem label="行业名称:" prop="workType">
          <Select v-model="formValidate.workType">
            <Option value="1">不限</Option>
            <Option value="2">互联网/游戏/软件</Option>
            <Option value="3">电子/通信/硬件</Option>
            <Option value="4">房地产/建筑/物业</Option>
            <Option value="5">金融</Option>
            <Option value="6">消费品</Option>
            <Option value="7">汽车/机械/制造</Option>
            <Option value="8">服务/外包/中介</Option>
            <Option value="9">广告/传媒/教育/文化</Option>
            <Option value="10">交通/贸易/物流</Option>
            <Option value="11">制药/医疗</Option>
            <Option value="12">能源/化工/环保</Option>
            <Option value="13">政府/农林牧渔</Option>
          </Select>
        </FormItem> -->
        <FormItem label="职能类型:" prop="functionType">
          <Select v-model="formValidate.functionType">
            <Option v-for="(item, index) in functionTypeLists" :key="index" :value="item.code">{{item.name}}</Option>
          </Select>
        </FormItem>
        <FormItem label="工作地点:" prop="none">
          <Row>
            <Col span="7">
            <FormItem prop="workProvince">
              <Select v-model="formValidate.workProvince" placeholder="请选择省份" style="widt:30%;">
                <Option v-for="(item,index) in provinceData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select>
            </FormItem>
            </Col>
            <Col span="7" offset="1">
            <FormItem prop="workCity">
              <Select v-model="formValidate.workCity" placeholder="请选择城市" style="widt:30%;">
                <Option v-for="(item,index) in cityData" :key="index" :value="item.id">{{item.name}}</Option>
              </Select>
            </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="工作性质:" prop="employeeType">
          <Select v-model="formValidate.employeeType">
            <Option value="1">不限</Option>
            <Option value="2">应届</Option>
            <Option value="3">实习</Option>
            <Option value="4">兼职</Option>
          </Select>
        </FormItem>
        <!-- <FormItem label="是否统招:" prop="isUnified">
        <RadioGroup v-model="formValidate.isUnified">
          <Radio label="1">是</Radio>
          <Radio label="0">否</Radio>
        </RadioGroup>
      </FormItem> -->
        <!-- <FormItem label="企业性质:" prop="companyType">
          <Select v-model="formValidate.companyType">
            <Option value="1">不限</Option>
            <Option value="2">外商独资/外企办事处</Option>
            <Option value="3">中外合营(合资/合作)</Option>
            <Option value="4">私营/民营企业</Option>
            <Option value="5">国有企业</Option>
            <Option value="6">国内上市公司</Option>
            <Option value="7">政府机关/非盈利机构</Option>
            <Option value="8">事业单位</Option>
            <Option value="9">外商独资/外企办事处</Option>
            <Option value="10">其它</Option>
          </Select>
        </FormItem> -->
        <FormItem label="学历要求:" prop="degree">
          <Select v-model="formValidate.degree">
            <Option value="1">高中及以上</Option>
            <Option value="2">中专及以上</Option>
            <Option value="3">大专及以上</Option>
            <Option value="4">本科及以上</Option>
            <Option value="5">硕士及以上</Option>
            <Option value="6">博士及以上</Option>
            <Option value="9">不限</Option>
          </Select>
        </FormItem>
        <FormItem label="年龄要求:" prop="age">
          <Select v-model="formValidate.age">
            <Option value="1">20岁以下</Option>
            <Option value="2">20-25岁</Option>
            <Option value="3">25-30岁</Option>
            <Option value="4">35-40岁</Option>
            <Option value="5">40-45岁</Option>
            <Option value="6">45-50岁</Option>
            <Option value="9">不限</Option>
          </Select>
        </FormItem>
        <FormItem label="工作经验:" prop="workYears">
          <Select v-model="formValidate.workYears">
            <Option value="1">1年以下</Option>
            <Option value="2">1-3年</Option>
            <Option value="3">3-5年</Option>
            <Option value="4">5年以上</Option>
            <Option value="9">不限</Option>
          </Select>
        </FormItem>
        <FormItem label="税前月薪:" prop="salary">
          <Select v-model="formValidate.salary">
            <Option value="10">高中及以上</Option>
            <Option value="1">1k/月以下</Option>
            <Option value="2">1k-2k/月</Option>
            <Option value="3">2k-4k/月</Option>
            <Option value="4">4k-6k/月</Option>
            <Option value="5">6k-8k/月</Option>
            <Option value="6">8k-10k/月</Option>
            <Option value="7">10k-15k/月</Option>
            <Option value="8">15k-20k/月</Option>
            <Option value="9">20k/月以上</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submit('formValidate')">提交</Button>
          <Button @click="canel()" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Row>
  </Layout>
</template>
<script>
// 引入常用变量
import commonData from "@/common/commonData";
import * as API from "@/api/resume.js";
import * as API2 from "@/api/position.js";


export default {
  data () {
    const noCheck = (rule, value, callback) => {
      callback();
    };
    return {
      id: '',
      formValidate: {
        p_name: '',
        workDuties: '',
        workClaim: '',
        workWelfare: [],
        functionType: '',
        workProvince: '',
        workCity: '',
        employeeType: '',
        degree: '',
        age: '',
        workYears: '',
        salary: ''
      },
      functionTypeLists: commonData.functionTypeLists,
      workWelfareData: commonData.workWelfareData,
      provinceData: [],
      cityData: [],
      countyData: [],
      ruleValidate: {
        p_name: [
          { required: true, message: '请输入岗位名称', trigger: 'blur' }
        ],
        workDuties: [
          { required: true, message: '请输入岗位描述', trigger: 'blur' }
        ],
        workClaim: [
          { required: true, message: '请输入岗位描述', trigger: 'blur' }
        ],
        workWelfare: [
          { required: true, type: 'array', min: 1, message: '请选择岗位福利', trigger: 'change' },
        ],
        functionType: [
          { required: true, message: '请选择职能类型', trigger: 'change' }
        ],
        workProvince: [
          { required: true, type: 'number', message: '请选择省份', trigger: 'change' }
        ],
        workCity: [
          { required: true, type: 'number', message: '请选择城市', trigger: 'change' }
        ],
        employeeType: [
          { required: true, message: '请选择工作性质', trigger: 'change' }
        ],
        degree: [
          { required: true, message: '请选择学历要求', trigger: 'change' }
        ],
        age: [
          { required: true, message: '请选择年龄要求', trigger: 'change' }
        ],
        workYears: [
          { required: true, message: '请选择工作经验', trigger: 'change' }
        ],
        salary: [
          { required: true, message: '请选择税前月薪', trigger: 'change' }
        ],
        none: [
          { required: true, validator: noCheck}
        ]
      },
    };
  },
  watch: {
    'formValidate.workWelfare': function (val) {
      console.log(val);

    },
    'formValidate.workProvince': function (val) {
      if (val) {
        this.getCity(val);
      }
    }
    // ,
    // 'formValidate.workCity': function (val) {
    //   if (val) {
    //     this.getCounty(val);
    //   }
    // }
  },
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
    getCity (val) {
      API.getCity({
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
      API.getCity({
        pid: val,
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          this.countyData = _data;
        }
      });
    },
    // 提交用户简历信息
    submit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let _data = this.formValidate;
          _data.publicId = 4;
          let workWelfare = '';
          _data.workWelfare.forEach(item =>{
            workWelfare += item + '-'
          })
          _data.workWelfare = workWelfare.substr(0,workWelfare.length - 1);
          API2.positionOperation(_data).then(res => {
            if (res.code == 200) {
              this.$router.push({ name: 'recruitment' });
              this.$Message.success('Success!');
            }
          });
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    initData () {
      API2.queryPositionInfoById({
        pid: this.id
      }).then(res => {
        if (res.code == 200) {
          let _data = res.result;
          _data.workProvince = Number(_data.workProvince);
          _data.workCity = Number(_data.workCity);
          _data.detailAdr = Number(_data.detailAdr);
          let workWelfare = [];
          _data.workWelfare.forEach(item =>{
            let obj = {};
            obj.value = item;
            workWelfare.push(obj);
          })
          _data.workWelfare = workWelfare;
          this.formValidate = res.result;
        }
      });
    },
    canel () {
      this.formValidate = [];
      this.$router.push({ name: 'recruitment' });
    }
  },
  created () {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.initData();
    }
    // 获取全国各省
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