<template>
  <div class="hello">
    <div class="login_center_box">
      <div class="login_center_bottom_box">
        <div class="login_center_bottom_bg_box"></div>
        <div class="login_type"><span @click="chooseType(1)">用户</span>&emsp;<span @click="chooseType(2)">企业</span>&emsp;<span @click="chooseType(3)">管理员</span></div>
        <div class="login_center_bottom_word_box">
          <div class="login_title">大学生招聘网站{{userType == 1 ?'用户':userType == 2 ? '企业':'管理员'}}登录</div>
          <Form ref="formValidate" :model="formValidate" label-position="right" :rules="ruleValidate" :label-width="70" class="login_content">
            <FormItem label="用户名" prop="userName">
              <Input prefix="ios-contact" size="large" v-model="formValidate.userName" />
            </FormItem>
            <FormItem label="密码" prop="password" style="margin-top:40px;">
              <Input prefix="ios-key" userType="password" size="large" v-model="formValidate.password" />
            </FormItem>
            <FormItem>
              <Button userType="primary" @click="submit('formValidate')" class="login_button">登&emsp;录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import * as API from "@/api/collection.js";

export default {
  name: "login",
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      formValidate: {
        userName: 'kong',
        password: '123456'
      },
      ruleValidate: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    chooseType (userType) {
      this.userType = userType;
    },
    submit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          API.login({
            userName: this.formValidate.userName,
            userPwd: this.formValidate.password,
            userType: this.userType
          }).then(res => {
            if (res.code == 200) {
              this.$router.push(this.userType == 1 ? 'home' : this.userType == 2 ? 'chome' : 'ahome');
              this.$Message.success('登录成功！');
              sessionStorage.setItem('userType',this.userType);
              sessionStorage.setItem('userId',res.result);
            }
          });
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
};
</script>

<style>
.hello {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: antiquewhite;
  background-image: url(../../../assets/images/login_bg.png);
  background-size: 100% 100%;
}
.login_center_box {
  padding: 10% 20% 5% 30%;
}
.login_center_top_box {
  text-align: center;
  padding-bottom: 20px;
  padding-right: 25px;
  color: white;
  word-spacing: 8px;
  letter-spacing: 1px;
}

.login_center_bottom_box {
  width: 600px;
  height: 450px;
  z-index: 10;
  position: absolute;
}
.login_center_bottom_bg_box {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.35;
  filter: alpha(opacity=35); /*:rgba(0,0,0,0.3);*/
  z-index: -1;
  position: absolute;
  border-radius: 15px;
}
.login_center_bottom_word_box {
  padding: 60px 57px;
}
.login_center_bottom_word_box input {
  width: 90%;
}
.login_title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 50px;
}
/* 去除表单校验的红色*符号，影响美观 */
.ivu-form-item-required .ivu-form-item-label:before {
  content: '';
}
.ivu-form .ivu-form-item-label {
  font-size: 16px;
}
.login_type {
  /* float: right; */
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 14px;
}
.login_type span {
  cursor: pointer;
}
.login_type span:hover {
  color: #2d8cf0;
  text-decoration: underline;
}
.login_content {
  margin-top: 30px;
}
.login_button {
  top: 40px;
  left: 27%;
  width: 120px;
  position: absolute;
  font-size: 17px;
}
</style>