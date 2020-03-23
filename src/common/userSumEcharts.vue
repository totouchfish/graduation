<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      line: {
        options: {},
        width: '',
        height: '450'
      },
      data: [{
        value: 45,
        name: '企业注册数'
      }, {
        value: 65,
        name: '用户注册数'
      }]
    };
  },
  props: {
    chartData: {
      type: Object,
      default: () => { }
    }
  },
  mounted () {
    this.options();
  },
  methods: {
    options () {
      let myChart = this.$echarts.init(document.getElementById("main"));
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: '注册数量',
          type: 'pie',
          radius: '68%',
          center: ['50%', '50%'],
          clockwise: false,
          data: this.data,
          label: {
            normal: {
              textStyle: {
                color: '#999',
                fontSize: 14,
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 4,
              borderColor: '#ffffff',
            },
            emphasis: {
              borderWidth: 0,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }],
        color: [
          '#00acee',
          '#52cdd5',
          '#79d9f1',
          '#a7e7ff',
          '#c8efff'
        ],
        backgroundColor: '#fff'
      };
      myChart.setOption(option);
    }
  },
  // created(){

  // }
};
</script>
