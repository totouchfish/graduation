<template>
  <div class="hello">
    <div class="login_center_box">
      <div class="login_center_bottom_box">
        <div class="login_center_bottom_bg_box"></div>
        <div class="login_type"><span>管理员注册</span></div>
        <div class="login_center_bottom_word_box">
          <div class="login_title">大学生招聘网站管理员注册</div>
          <Form ref="formValidate" :model="formValidate" label-position="right" :rules="ruleValidate" :label-width="85" class="login_content">
            <FormItem label="用户名称" prop="userName">
              <Input prefix="ios-contact" size="large" v-model="formValidate.userName" />
            </FormItem>
            <FormItem label="用户密码" prop="password" style="margin-top:40px;">
              <Input prefix="ios-key" type="password" size="large" v-model="formValidate.password" />
            </FormItem>
            <FormItem label="确认密码" prop="password2" style="margin-top:40px;">
              <Input prefix="ios-key" type="password" size="large" v-model="formValidate.password2" />
            </FormItem>
            <FormItem label="手机号" prop="phone" style="margin-top:40px;">
              <Input prefix="ios-contact" size="large" v-model="formValidate.phone" />
            </FormItem>
            <FormItem>
              <Button @click="submit('formValidate')" class="login_button">注&emsp;册</Button>
              <div class="login_register">已有账号，<a href="#" @click="login()" class="registerFont">去登陆</a></div>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import * as API from "@/api/login.js";

export default {
  name: "login",
  data () {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formValidate.password) {
        callback(new Error('两次密码输入不一致'));
      } else {
        callback();
      }
    };
    return {
      userType: sessionStorage.getItem('userType') || 1,
      formValidate: {
        userName: '',
        password: '',
        password2: '',
        phone:''
      },
      ruleValidate: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        password2: [
          { validator: validatePassCheck, trigger: 'blur' }
        ],
         phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$router.push('login?type=3');
    },
    submit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          API.registerA({
            adminName: this.formValidate.userName,
            adminPwd: this.formValidate.password,
            phone:this.formValidate.phone,
            userType: this.userType
          }).then(res => {
            if (res.code == 200) {
              this.$router.push('login?type=3');
              this.$Message.success('登录成功！');
              sessionStorage.setItem('userType', this.userType);
              sessionStorage.setItem('adminName', this.formValidate.adminName);
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

<style lang="scss" scoped>
.hello {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: antiquewhite;
  background-image: url(../../assets/images/login_bg.png);
  background-size: 100% 100%;
}
.login_center_box {
  padding: 8% 20% 5% 30%;
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
  height: 550px;
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
  padding: 0 57px;
  input {
    width: 90%;
  }
}
.login_title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px;
}
/* 去除表单校验的红色*符号，影响美观 */
/deep/ .ivu-form-item-required .ivu-form-item-label:before {
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
  span {
    cursor: pointer;
  }
  span:hover {
    color: #2d8cf0;
    text-decoration: underline;
  }
}
.login_button {
  top: 20px;
  left: 27%;
  width: 120px;
  position: absolute;
  font-size: 17px;
}
.login_register {
  position: absolute;
  top: 80px;
  right: -40px;
}
.registerFont {
  cursor: pointer;
  color: #515a6e;
  text-decoration: underline;
  span:hover {
    color: #2d8cf0;
    text-decoration: underline;
  }
}
</style>