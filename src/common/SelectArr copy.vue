<template>
  <div>
    <!--多组件通讯使用 v-bind="$attrs" v-on="$listeners" -->
    <Select v-model="welfare" filterable multiple allow-create @on-create="handleAddWelfare">
      <Option v-for="item in workWelfareData" :value="item.value" :key="item.value">{{ item.value }}</Option>
    </Select>
  </div>
</template>
<script>
// 引入常用变量
// import commonData from "@/common/commonData";

export default {
  props: {
    workWelfare: String,
    workWelfareData: Array
  },
  name: 'SelectArr',
  data () {
    return {
      welfare: []
      // workWelfareData: commonData.workWelfareData,
    }
  },
  components: {},
  computed: {},
  watch: {
    welfare (val) {
      // console.log('welfare', val);
      this.$emit('handleWelfare', val);
    },
    workWelfare (val) {
      this.welfare = val;
      // 使用computed的get()，将computed中的workWelfare依赖指向formValidate.workWelfare然后进行对数据进行处理
      // this.welfare = this.welfareHandle;

      // console.log("workWelfare: "+val);
    }
  },
  methods: {
    handleAddWelfare (val) {
      this.workWelfareData.push({
        value: val,
        label: val
      });
    },
  },
  computed: {
    welfareHandle: {
      get () {
        console.log('get');
        let workWelfare = [];
        console.log(this.welfare);
        debugger
        this.welfare.split('-').forEach(item => {
          // 拆分岗位福利数据
          workWelfare.push(item);
          // 比对岗位福利数据，如果不存在workWelfareData里，则添加到workWelfareData中
          // 由于this.workWelfareData是数组对象，如果想要将里面的值取出进行比对则需要在此循环中载嵌套循环，影响性能
          // 骚操作：将this.workWelfareData转换成字符串，然后通过比对此字符串中是否包含item即可
          // let string = JSON.stringify(this.workWelfareData);
          // if (string.indexOf(item) == -1) {
          //   let obj = {};
          //   obj.value = item;
          //   this.workWelfareData.push(obj);
          // }
        })
        return workWelfare;
      },
      set (val) {
        console.log("set");
        let workWelfare = '';
        val.workWelfare.forEach(item => {
          workWelfare += item + '-'
        })
        val.workWelfare = workWelfare.substr(0, workWelfare.length - 1);
        return val;
      }
    }
  },
  created () { }
}
</script>
<style lang="scss" scoped>
</style>
