<template>
    <div>
      <!-- 首页 -->
      企业认证
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