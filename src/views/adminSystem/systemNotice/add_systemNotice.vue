<template>
  <Layout class="layout">
    <!-- 添加发布职位 -->
    <div class="title">发布系统公告</div>
    <Row class="content">
      <Form ref="formValidate" :model="formValidate" label-position="right" :rules="ruleValidate" :label-width="85">
        <FormItem label="公告标题:" prop="noticeTitle">
          <Input class="font" v-model="formValidate.noticeTitle"></Input>
        </FormItem>
        <FormItem label="发布时间:" prop="employeeType">
          <span class="font">{{nowDate}}</span>
        </FormItem>
        <FormItem label="公告内容:" prop="noticeContent">
          <Input class="font" type="textarea" :rows="6" maxlength="999" v-model="formValidate.noticeContent"></Input>
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
import tool from "@/utils/formatDate";
import * as API from "@/api/admin.js";

export default {
  data () {
    return {
      //userType: sessionStorage.getItem('userType') || 1,
      id: '',
      formValidate: {
        p_name: '',
        brief: '',
      },
      nowDate: '',
      ruleValidate: {
        noticeTitle: [
          { required: true, message: '请输入公告标题', trigger: 'blur' }
        ],
        noticeContent: [
          { required: true, message: '请输入公告内容', trigger: 'blur' }
        ]
      },
    };
  },
  watch: {
  },
  methods: {
    // 提交用户简历信息
    submit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let _data = this.formValidate;
          _data.publicId = 4;
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
          this.formValidate = res.result;
        }
      });
    },
    canel () {
      this.formValidate = [];
      this.$router.push({ name: 'recruitment' });
    }
  },
  //mounted是在el挂载到实例上后调用，一般第一个业务逻辑会在这里开启
  mounted: function () {
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function () {
      //设置定时器，每秒执行一次function函数，
      _this.nowDate = tool.formatDate(new Date());
    }, 1000);
  },
  created () {
    
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.initData();
    }
  }
}
</script>
<style scoped>
.layout {
  min-width: 310px;
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
}
.font{
  font-size:16px;
  vertical-align:middle;
}
</style>