<template>
  <div>
    <!-- <div>
      <p class="certificationTip" style="font-size:15px"> <span>您好，您还未完善资质认证，通过资质审核可免费发布职位，成为会员可享受多重会员专属特权！</span> <a href="https://ihr.zhaopin.com/register/personQualificationSelect.html"> <span>立即完善资质认证</span> </a>
      </p>
    </div> -->
    <CountEcharts></CountEcharts>
  </div>
</template>
<script>  
import CountEcharts from '@/common/userSumEcharts';

export default {
  name: "zhengqing-demo",
  data () {
    return {

    };
  },
  components: {
    CountEcharts
  },
  methods: {
    demo () {

    }
  },
  created () {
  }
}
</script>