
//channelChart
var channelChart = echarts.init(document.getElementById('channelChart'));
var channelOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title:{
        text:'销量排名前十的手机型号的销售渠道'
    },
    grid: {
        top: 120,
    },
    yAxis : [{
        type: 'value'
    },{
        type: 'value'
    }],
    xAxis:[{
        type: 'category',
        data: channelArr[0]
    },
    {
        type: 'category',
        axisLabel: {
                   interval:0,
                   //margin:-10,
                   rotate:20
                },
        data: channelArr[1]
    }],
    series: [
            {
                type: 'bar',
                data: channelArr[2]
            },
            {
                type: 'line',
                data: channelArr[2]
            }
        ]
};
channelChart.setOption(channelOption);


//
var scoreChart = echarts.init(document.getElementById('scoreChart'));
var scoreOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title:{
        text:'手机型号销量排名前十用户评分'
    },
    yAxis : {
        type: 'value',
        min:4
    },
    xAxis:{
        type: 'category',
        boundaryGap : false,
        data: scoreArr[0]
    },
    series: [
            {
        data: scoreArr[1],
        type: 'line'
    }
        ],
};
scoreChart.setOption(scoreOption);