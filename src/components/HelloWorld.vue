<template>
  <div class="hello">
    <div>各位靓仔晚上好！</div>
    <child1></child1>
    <child2></child2>
    <Button
      :type="type"
      :text="text"
      @myEvent='parDemo'
    >
    </Button>
    <div v-display-key="'10'">
      <button>我是权限10</button>
    </div>
    <div v-display-key="'1'">
      <button>我是权限1</button>
    </div>
    <div v-display-key="'4'">
      <button>我是权限4</button>
    </div>
    <div v-display-key="'2'">
      <button>我是权限2</button>
    </div>
    <div v-display-key="'5'">
      <button>我是权限5</button>
    </div>
    <div>
      <input
        type="text"
        v-model="inputVal"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    // Button
  },
  data() {
    return {
      value: 3,
      type: "success",
      text: "成功",
      inputVal: null
    };
  },
  methods: {
    parDemo: function() {
      console.log("111");
    }
  },
  watch: {
    inputVal: {
      // 在执行watch监听input输入的同时还可以执行其他的方法。
      handler(oldVal, newVal) {
        this.parDemo();
        console.log(newVal);
      },
      immediate: true
    }
  },
  created() {}
};
</script>

<style scoped>
</style>
 