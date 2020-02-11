<template>
  <div class="hello">
    <button>我是child1组件</button>

  </div>
</template>

<script>
export default {
  name: "child1",
  props: {
    msg: String
  }
};
</script>

<style>
</style>
