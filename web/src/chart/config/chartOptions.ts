module chart {
    export var chartOptions = {

        chart: {
            type: 'columnrange',
            inverted: true,
            zoomType: 'x'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            type: 'linear',
            title: {
                text: null
            }
        },
        plotOptions: {
            columnrange: {
                grouping: false
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br>'
                    + '<p>elapsed time: ' + this.point.eTime + 'ms</p><br>'
                    + '<p>start: ' + this.point.low + '</p><br>'
                    + '<p>end: ' + this.point.high + '</p><br>'
            }
        },
        series: []
    };
}
