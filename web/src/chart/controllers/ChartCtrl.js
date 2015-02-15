/// <reference path="../main" />
var chart;
(function (chart) {
    var ChartCtrl = (function () {
        function ChartCtrl($scope, $mdSidenav) {
            $scope.toggleSidenav = function (menuId) {
                $mdSidenav(menuId).toggle();
            };
            $('#container').highcharts({
                chart: {
                    type: 'columnrange',
                    inverted: true
                },
                title: {
                    text: 'Mapper Charts'
                },
                xAxis: {
                    categories: ['001', '002']
                },
                yAxis: {
                    type: 'datetime',
                    title: {
                        text: 'Timespan'
                    }
                },
                plotOptions: {
                    columnrange: {
                        grouping: false
                    }
                },
                legend: {
                    enabled: true
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + ' - ' + this.series.name + '</b><br/>' + Highcharts.dateFormat('%e %B %H:%M', this.point.low) + ' - ' + Highcharts.dateFormat('%B %e %H:%M', this.point.high) + '<br/>';
                    }
                },
                series: [{
                    name: 'Producing',
                    data: [{
                        x: 0,
                        low: Date.UTC(2013, 7, 3, 0, 0, 0),
                        high: Date.UTC(2013, 7, 3, 4, 0, 0)
                    }, {
                        x: 0,
                        low: Date.UTC(2013, 7, 3, 10, 0, 0),
                        high: Date.UTC(2013, 7, 3, 12, 0, 0)
                    }, {
                        x: 0,
                        low: Date.UTC(2013, 7, 3, 14, 0, 0),
                        high: Date.UTC(2013, 7, 3, 15, 0, 0)
                    }, {
                        x: 1,
                        low: Date.UTC(2013, 7, 3, 16, 0, 0),
                        high: Date.UTC(2013, 7, 3, 18, 0, 0)
                    }]
                }, {
                    name: 'Breakdown',
                    data: [{
                        x: 0,
                        low: Date.UTC(2013, 7, 3, 4, 0, 0),
                        high: Date.UTC(2013, 7, 3, 10, 0, 0)
                    }, {
                        x: 0,
                        low: Date.UTC(2013, 7, 3, 18, 0, 0),
                        high: Date.UTC(2013, 7, 3, 24, 0, 0)
                    }]
                }, {
                    name: "Changeover",
                    data: [{
                        x: 0,
                        low: Date.UTC(2013, 7, 4, 1, 0, 0),
                        high: Date.UTC(2013, 7, 4, 5, 0, 0)
                    }, {
                        x: 0,
                        low: Date.UTC(2013, 7, 2, 10, 0, 0),
                        high: Date.UTC(2013, 7, 2, 23, 0, 0)
                    },]
                }, {
                    name: "TrialRun",
                    data: [{
                        x: 0,
                        low: Date.UTC(2013, 7, 4, 5, 0, 0),
                        high: Date.UTC(2013, 7, 4, 13, 0, 0)
                    }, {
                        x: 0,
                        low: Date.UTC(2013, 7, 2, 2, 0, 0),
                        high: Date.UTC(2013, 7, 2, 10, 0, 0)
                    }]
                }]
            });
        }
        return ChartCtrl;
    })();
    chart.ChartCtrl = ChartCtrl;
    chart.registerController('chartCtrl', ChartCtrl);
})(chart || (chart = {}));
