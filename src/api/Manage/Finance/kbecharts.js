import * as echarts from 'echarts';
//柱图
export function ColumnDiagram(params,divId,leftName,rightName) {
  var nameData = [];
  var numData = [];
  var yNumData = [];
  var colorData = [];
  var yZsun = 0;
  for (var i = 0; i < params.length; i++){
    nameData[i] = params[i].name;
    numData[i] = params[i].num;
    yNumData[i] = Math.ceil(params[i].num);
    colorData[i] = params[i].color;
  }
  yZsun = mpSort(yNumData);
  var myChart = echarts.init(document.getElementById(divId));
  var option;

  option = {
    color: colorData,

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    toolbox: {
      feature: {
        dataView: { show: false, readOnly: false },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        data: nameData,
        //文字样式
        axisLabel: {
          show: true,
          textStyle: {
            color: "#000000"

          },
          fontSize: 5,
          interval: 0,
          rotate: 30
        }

      }
    ],
    yAxis: [
      {
        type: 'value',
        name: rightName,
        min: 0,
        max: yZsun,
        position: 'right',
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000"
          }
        },
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: leftName,
        min: 0,
        max: yZsun,
        position: 'left',
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000"
          }
        },
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: leftName,
        type: 'bar',
        data: numData,
        barWidth : 60,
        itemStyle: {
          normal: {
            //这里是重点
            color: function(params) {
              //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
              var colorList = colorData;
              var index;
              //给大于颜色数量的柱体添加循环颜色的判断
              if (params.dataIndex >= colorList.length) {
                index = params.dataIndex - colorList.length;
                return colorList[index];
              }
              return colorList[params.dataIndex];
            }
          }
        }
      },
    ]
  };
  option && myChart.setOption(option);
}

// 冒泡排序返回最大数
function mpSort(array){
  var t = 0;
  if(array != null && array.length > 0){
    if(array.length == 1){
      t = array[0] + 3;
    }else if(array.length == 2){
      t = array[0] + array[1];
    }
    else{
      var len = array.length;
      var temp = 0;
      for (var j = 0; j < len - 1; j++)
      {
        for (var i = 0; i < len - 1 - j; i++)
          if (array[i] > array[i + 1])
          {
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
          }
      }
      t = array[array.length-1] + array[array.length-2];
    }
  }
  return t;
}

export function LinesWarnAnalysis(params,divId,rightName,leftName, isShowBackground) {
  //颜色
  var colors = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622','#5470C6', '#91CC75', '#EE6666'];
  var xData = params.xData;
  var yName = params.yName;
  var yDatas = params.yDatas;
  var series = [];
  for(var i =0; i< yName.length;i++){
    var sdata = {};
    sdata.name=yName[i];
    sdata.type="line";
    sdata.data = yDatas[i];
    if(isShowBackground){
      sdata.areaStyle = {};
      sdata.emphasis = {focus: 'series'};
      sdata.color = "#87CEFA";
    }else{
      sdata.color = colors[i];
    }
    series.push(sdata);

  }
  var myChart = echarts.init(document.getElementById(divId));

  var option;
  option = {
    title: {
      text: leftName
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      show:true,
      data: xData,
      axisLabel:{
        textStyle: {
          color: "#000000"
        },

      }
    },
    yAxis: {
      type: 'value',
      axisLabel:{
        textStyle: {
          color: "#000000"
        },

      }
    },
    series: series
  };
  option && myChart.setOption(option);
}
export function horDiagram(divId){

  var chartDom = document.getElementById(divId);
  var myChart = echarts.init(chartDom);
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // Use axis to trigger tooltip
        type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  option && myChart.setOption(option);
}
