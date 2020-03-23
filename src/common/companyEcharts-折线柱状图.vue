<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data () {
    return {
      line: {
        options: {},
        width: '',
        height: '450'
      },
      dateData: ['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04', '2019-01-05', '2019-01-06', '2019-01-07'],
      numberData: [12, 18, 20, 36, 30, 10, 24],
      maxNumber: 50
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
        backgroundColor: '#fff',
        grid: {
          top: '15%',
          right: '10%',
          left: '10%',
          bottom: '12%'
        },
        xAxis: [{
          type: 'category',
          color: '#59588D',
          data: this.dateData,
          axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
              fontSize: 18
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(107,107,107,0.37)',
            }
          },
          axisTick: {
            show: false
          },
        }],
        yAxis: [{
          min: 0,
          max: this.maxNumber,
          axisLabel: {
            formatter: '{value}人',
            color: '#999',
            textStyle: {
              fontSize: 18
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(107,107,107,0.37)',
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(131,101,101,0.2)',
              type: 'dashed',
            }
          }
        }],
        series: [{
          type: 'bar',
          data: this.numberData,
          barWidth: '50px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FF9A22' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#FFD56E' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 0, 0],
            }
          },
          label: {
            normal: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
              position: 'top',
            }
          }
        }, {
          data: this.numberData,
          type: 'line',
          smooth: true,
          name: '折线图',
          symbol: 'none',
          lineStyle: {
            color: '#3275FB',
            width: 4,
            shadowColor: 'rgba(0, 0, 0, 0.3)', //设置折线阴影
            shadowBlur: 15,
            shadowOffsetY: 20,
          }
        }]
      };
      myChart.setOption(option);
    }

  },
  // created(){

  // }
};
</script>
