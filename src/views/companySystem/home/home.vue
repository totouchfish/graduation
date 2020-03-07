<template>
    <div>
      <!-- 首页 -->
      企业首页
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