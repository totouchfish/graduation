<template>
  <div class="demo">
    <Row type="flex" align="middle">
      <Col span="8">
        <Select v-model="site">
          <Option value="谷歌 http://www.google.com">谷歌 http://www.google.com</Option>
          <Option value="百度 http://www.baidu.co">百度 http://www.baidu.com</Option>
          <Option value="网易 http://www.163.com">网易 http://www.163.com</Option>
        </Select>
      </Col>
      <Col span="8" offset="1">
        <div>site：{{ site }}</div>
        <div>name：{{ name }}</div>
        <div>url：{{ url }}</div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      message: '',
      name: '谷歌',
      url: 'http://www.google.com'
    }
  },
  components: {},
  computed: {
    site: {
      // 页面初始化时会先执行一次 get
      // 监视 data 中 name 和 url 的属性值，只有发生改变时，它们才会重新求值，否则取缓存中的
      get () {
        console.log('get')
        return this.name + ' ' + this.url
      },
      // 监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据，类似于 watch 的功能
      set (newValue) {
        console.log('set')
        let names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  },
  watch: {},
  methods: {
    initData () { },
  },
  mounted () { },
  created () { }
}
</script>
<style lang="scss" scoped>
</style>
