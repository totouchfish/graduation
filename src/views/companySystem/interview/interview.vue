<template>
    <div>
      面试管理
    </div>
</template>
<script>
export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
    };
  },
  methods: {

  }
}
</script>