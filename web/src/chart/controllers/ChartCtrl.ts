/// <reference path="../main" />
/// <reference path="../services/chartService" />
/// <reference path="../config/chartOptions" />

module chart {
    export class ChartCtrl {

        constructor($scope:IChartScope, $mdSidenav, chartService:ChartService, tasks) {
            $scope.toggleSidenav = (menuId) => {
                $mdSidenav(menuId).toggle();
            };
            //chartService.init();

            tasks = tasks.tasks.task;

            chartService.setChart(tasks);
            console.log(tasks);
        }
    }

    export interface IChartScope extends ng.IScope {
        toggleSidenav(menuId);
        chartConfig: any;
    }

    registerController('chartCtrl', ChartCtrl);
}
