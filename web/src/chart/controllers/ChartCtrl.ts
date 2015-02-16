/// <reference path="../main" />
/// <reference path="../services/chartService" />

module chart {
    export class ChartCtrl {


        constructor($scope:IChartScope, $mdSidenav, chartService:ChartService) {
            $scope.toggleSidenav = (menuId) => {
                $mdSidenav(menuId).toggle();
            };

            chartService.get((err, data)=> {
                if (err)
                    return;

                console.log(data);

                var mappers = data.mappers;

                console.log(mappers);

                var series = [];
                mappers.forEach((mapper, index)=> {
                    series.push({
                        name: 'Mapper' + index,
                        data: [{
                            x: index,
                            low: mapper.start,
                            high: mapper.end
                        }]
                    })
                });

                this.setChart({

                    chart: {
                        type: 'columnrange',
                        inverted: true,
                        zoomType: 'x'
                    },
                    title: {
                        text: 'Mapper Charts'
                    },
                    xAxis: {
                        categories: []
                    },
                    yAxis: {
                        type: 'linear',
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
                        enabled: false
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + ' - ' + this.series.name + '</b><br/>' + Highcharts.dateFormat('%e %B %H:%M', this.point.low) +
                                ' - ' + Highcharts.dateFormat('%B %e %H:%M', this.point.high) + '<br/>';
                        }
                    },
                    series: series
                });
            });
        }

        setChart(chartOptions:HighchartsOptions):void {
            $('#chartContainer').highcharts(chartOptions);
        }
    }

    export interface IChartScope extends ng.IScope {
        toggleSidenav(menuId);
        chartConfig: any;
    }

    registerController('chartCtrl', ChartCtrl);
}