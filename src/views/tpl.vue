
<template>
  <div>
    <Table :columns="columns1" :data="data1"></Table>
    <div class="button">
      <span></span>
    </div>
    {{time}}
    <div span="24">
      <TimePicker format="HH:mm" v-model="time" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
    </div>
    {{checkbox}}
    <CheckboxGroup v-model="checkbox">
        <Checkbox label="Eat">11</Checkbox>
        <Checkbox label="Sleep"></Checkbox>
        <Checkbox label="Run"></Checkbox>
        <Checkbox label="Movie"></Checkbox>
    </CheckboxGroup>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Tpl',
  data() {
    return {
      time: [],
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      checkbox: []
    };
  },
  mounted() {
    this.initGetdata()
  },
  methods: {
    initGetdata() {
      axios.post('http://10.0.60.95:8080/Psms/test', {
      }).then((res)=>{
        console.log(res)
        console.log(res.data)
      })
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/lib/styles/mixin.less";


</style>

