import * as echarts from 'echarts'

export function xzqZhutu1(divId,jmnoi) {

  var xData = jmnoi.xData;
  var chartdata = jmnoi.yData;

  var chartDom = document.getElementById(divId);
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: chartdata,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }]
  };
  option && myChart.setOption(option);
}

export function  xzqZhutu(divId,shuju){
var xData = shuju.xData
var yData = shuju.yData
var zData = shuju.zData
var aData = shuju.aData
var chartDom = document.getElementById(divId);
var myChart = echarts.init(chartDom);
var option;
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: {show: false, readOnly: false},
        magicType: {show: false, type: ['line', 'bar']},
        restore: {show: false},
        saveAsImage: {show: false}
      }
    },
    legend: {
      data: ['预算', '支出', '执行预算率']
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '万元',
      //  interval: 50, // y轴左侧 数据间隔
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '百分比',
        min: 0,
        max: 100,
      }
    ],
    series: [
      {
        name: '预算',
        type: 'bar',
        data: yData
      },
      {
        name: '支出',
        type: 'bar',
        data: zData
      },
      {
        name: '执行预算率',
        type: 'line',
        yAxisIndex: 1,
        data: aData
      }
    ]
  };
  option && myChart.setOption(option);
}
