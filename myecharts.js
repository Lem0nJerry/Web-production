function point(){
  //1.初始化放bar1这个图表盒子的环境
  var point=echarts.init(document.querySelector('.point .chart'));
  var myColor=['#FF6103 ','#C0D9D9','#56d0e3',' #238E23','#8b78f6','#5196cb','#00c1de'];
  
  const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
];

const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];

const data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
const title = [];
const singleAxis = [];
const series = [];
days.forEach(function (day, idx) {
  title.push({
    textBaseline: 'middle',
    top: ((idx + 0.5) * 100) / 7 + '%',
    text: day,
    textStyle:{
      color:'#fff',
      fontSize:"12"
    }
  });
  singleAxis.push({
    left: 100,
    type: 'category',
    boundaryGap: false,
    data: hours,
    top: (idx * 100) / 7 + 5 + '%',
    height: 100 / 7 - 10 + '%',
    axisLabel: {
      interval: 2,
      show:false
    },
    axisLine: {
      lineStyle: {
        color:'rgba(255,255,255,.1'
      }
    }
  });
  series.push({
    singleAxisIndex: idx,
    coordinateSystem: 'singleAxis',
    type: 'scatter',
    data: [],
    symbolSize: function (dataItem) {
      return dataItem[1] * 4;
    },
    
    
    itemStyle: {
      color:function(params){
        return myColor[params.dataIndex]
      } 
    }
  });
});
data.forEach(function (dataItem) {
  series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});
option = {
  tooltip: {
    position: 'top'
  },
  title: title,
  singleAxis: singleAxis,
  series: series
};
  //3.把设置好的图表装到bar1这个盒子中
  point.setOption(option);
  //图形自适应屏幕
  window.addEventListener('resize',function(){
    point.resize();
  })
  
}
function bar1(){
  var bar1=echarts.init(document.querySelector('.bar .chart'));
  var myColor=['#1089e7','#f57474','#56d0e3','#f8b448','#8b78f6'];
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
 
    grid: {
      left: '18%',
      top:'10%',
      bottom: '10%',
    },
    xAxis: {
      show:false
    },
  

    yAxis:[{
      type: 'category',

     
      data: ['HTML5', 'CSS3', 'javaScript', 'VUE', 'NODE'],
      inverse:true,
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#fff'
      }

    },
    {
      type: 'category',
      data: [702,350,610,793,664],
      inverse:true,
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#fff'
      }


    }] ,
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70,34,60,78,69],
        yAxisIndex:0,
        barCategoryGap:60,
        barWidth:10,
        itemStyle:{
         
            barBorderRadius:20,
            color:function(params){
              return myColor[params.dataIndex]
            }
          
        },
        label:{
          
            show:true,
            position:'inside',
            formatter:'{c}%'
          
        }
      },
      {
        name: '框',
        type: 'bar',
        data: [100, 100,100,100,100],
        yAxisIndex:1,
        barCategoryGap:50,
        barWidth:15,
        itemStyle:{
          color:'none',
          borderWidth:3,
          borderColor:'#00c1de',
          barBorderRadius:15
        }
      }
    ]
  };

  //3.把图表装到对应的echarts盒子中
  bar1.setOption(option);
     //图形自适应屏幕
     window.addEventListener('resize',function(){
      bar1.resize();
    })

}

function funnel() {
  // 创建 ECharts 实例
  var funnelChart = echarts.init(document.querySelector('.funnel .chart'),null, { height: 250 });

  // 指定图表选项
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    legend: {
      data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
      textStyle:{
        color:'rgba(255,255,255,.6)',
        fontSize:"12"
      }
    },
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 80,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' }
        ]
      }
    ]
  };

  // 设置选项
  funnelChart.setOption(option);

  // 处理图表大小调整
  window.addEventListener('resize', function () {
    funnelChart.resize();
  });
}

function unite1() {
  // 初始化echarts实例
  var unite1 = echarts.init(document.querySelector('.unite1 .chart'),null, { height: 250 });

  // 设置图表配置项
  setTimeout(function () {
    var option = {
      legend: {
        right: 'right',
        textStyle: {
          color: '#fff' 
        }
      },
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ]
      },
      xAxis: { 
        type: 'category' ,
      axisLabel:{
        color:'rgba(255,255,255,.6)',
        fontSize:'12'
      },},
      yAxis: { 
        gridIndex: 0,
        axisLabel:{
          color:'rgba(255,255,255,.6',
          fontSize:'12'
        },
        axisLine:{
          lineStyle:{
              color:'rgba(255,255,255,.1',
              width:2
          }
        },
        //设置y轴分割线的样式
        splitLine:{
          lineStyle:{
              color:'rgba(255,255,255,.1)'
          }
        }
       },
       grid: {
        left: '5%',
        top: '60%',
        right: 0,
        bottom: '4%',
        containLabel: true
      },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          itemStyle: {
            color: 'green' 
          }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
          
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '50%',
          center: ['50%', '32%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          }
        }
      ]
    };

    // 在轴指示器更新时更新饼图
    unite1.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        unite1.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });

    // 设置图表配置
    unite1.setOption(option);
  }, 0);

  // 监听窗口大小变化，调整图表大小
  window.addEventListener('resize', function () {
    unite1.resize();
  });
}

function bar02(){
  var bar02chart=echarts.init(document.querySelector('.bar02 .chart'));
  var option = {
    legend: {
      textStyle: {
        color: '#fff' 
      }
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 120],
        ['Milk Tea', 83.1, 73.4, 150],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { 
      type: 'category',
      axisLabel:{
        color:'rgba(255,255,255,.6)',
        fontSize:'12'
      },
      axisLine:{
        show:false
      }
    },
    yAxis: {
      axisLabel:{
        color:'rgba(255,255,255,.6',
        fontSize:'12'
      },
      axisLine:{
        lineStyle:{
            color:'rgba(255,255,255,.1',
            width:2
        }
      },
      splitLine:{
        lineStyle:{
            color:'rgba(255,255,255,.1)'
        }
      }
    },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };
  bar02chart.setOption(option);
  window.addEventListener('resize',function(){
    bar02chart.resize();
  })
}


point();
bar1();
funnel();
unite1();
bar02();