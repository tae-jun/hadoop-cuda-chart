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
                return '<b>node: ' + this.point.node + '</b><br>'
                    + '<p>elapsed time: ' + this.point.eTime + 'ms</p><br>'
                    + '<p>start: ' + new Date(this.point.low) + '</p><br>'
                    + '<p>end: ' + new Date(this.point.high) + '</p><br>'
                    + '<p>name: ' + this.series.name + '</p>name: <br>'
            }
        },
        series: []
    };
}
