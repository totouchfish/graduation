<template>
  <div>
    <!--多组件通讯使用 v-bind="$attrs" v-on="$listeners" -->
    <Select v-model="welfare" filterable multiple allow-create @on-create="handleAddWelfare">
      <Option v-for="item in workWelfareObject" :value="item.value" :key="item.value">{{ item.value }}</Option>
    </Select>
  </div>
</template>
<script>
// 引入常用变量
import commonData from "@/common/commonData";

export default {
  props: {
    workWelfare: String,
    workWelfareList: Array
  },
  name: 'SelectArr',
  data () {
    return {
      welfareTemp: [],
    }
  },
  components: {},
  computed: {
    welfare: {
      get () {
        console.log('get');
        return this.switchData(this.workWelfare);
      },
      set (val) {
        console.log('set');
        let data = val.join('-');
        this.$emit('update:workWelfare', data);
      }
    },
    workWelfareObject: {
      get () {
        return this.workWelfareObject = this.workWelfareList;
      },
      set (val) {}      
    }
  },
  methods: {
    handleAddWelfare (val) {
      this.workWelfareObject.push({
        value: val,
        label: val
      });
    },
    switchData (val) {
      let workWelfare = [];
      val.split('-').forEach(item => {
        // 拆分岗位福利数据
        workWelfare.push(item);
        // 比对岗位福利数据，如果不存在workWelfareData里，则添加到workWelfareData中
        // 由于this.workWelfareData是数组对象，如果想要将里面的值取出进行比对则需要在此循环中载嵌套循环，影响性能
        // 骚操作：将this.workWelfareData转换成字符串，然后通过比对此字符串中是否包含item即可
        let string = JSON.stringify(this.workWelfareObject);
        if (string.indexOf(item) == -1) {
          let obj = {};
          obj.value = item;
          this.workWelfareObject.push(obj);
        }
      })
      return workWelfare;
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
