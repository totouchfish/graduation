<template>
  <div>
    <!-- 首页 -->
    企业首页
    <!-- <Input v-model="teacherBirthday" placeholder="生日" style="width: 160px"></Input>
    <Button type="primary" @click="getAge()">计算</Button>
    <div>{{age}}</div> -->
    <RadioGroup v-model="isUnified">
      <Radio label="1">是</Radio>
      <Radio label="0">否</Radio>
    </RadioGroup>
    <Button type="primary" @click="select()">选择</Button>
  </div>
</template>
<script>  
export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      teacherBirthday: '2019-02-02',
      age: '',
      isUnified:''
    };
  },
  methods: {
    // 判断用户的年龄
    getAge () {
      let birthdays = new Date(this.teacherBirthday.replace(/-/g, "/"));
      let d = new Date();
      let age =
        d.getFullYear() -
        birthdays.getFullYear() -
        (d.getMonth() < birthdays.getMonth() ||
          (d.getMonth() == birthdays.getMonth() &&
            d.getDate() < birthdays.getDate())
          ? 1
          : 0);
      this.age = age;
    },
    select(){
      if(this.isUnified == '1'){
        this.isUnified = '0';
      }else{
        this.isUnified = '1';
      }
    }
  },
  created () {
  }
}
</script>